import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {Section} from '../../../../controller/model/section.model';
import {CategorieSection} from '../../../../controller/model/categorie-section.model';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }
  public editSection() {
    this.submittedSection = true;
    if (this.selectedsection.id) {
      this.itemssection[this.service.findSectionIndexById(this.selectedsection.id)] = this.selectedsection;
      this.service.updateSection().subscribe(data => {
        this.selectedsection = data;
        // tslint:disable-next-line:no-shadowed-variable
        this.service.afficheCours().subscribe(data => this.itemscours = data);
        // tslint:disable-next-line:no-shadowed-variable
        this.service.affichelistSection().subscribe(data => this.itemssection = data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Sections Updated',
          life: 3000
        });
      });
    }
    this.editDialogSection = false;
    this.selectedsection = new Section();

  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }
  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }
  public hideEditDialog() {
    this.editDialogSection = false;
  }
  get editDialogSection(): boolean {
    return this.service.editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this.service.editDialogSection = value;
  }

  get submittedSection(): boolean {
    return this.service.submittedSection;
  }

  set submittedSection(value: boolean) {
    this.service.submittedSection = value;
  }
  findAllCours() {
    this.service.findAllCours().subscribe(data => {
      this.itemscours = data;
    });
  }
  findAllCategorie() {
    this.service.findAllCategorieSection().subscribe(data => {
      this.itemscategoriesection = data;
    });
  }

  get itemscategoriesection(): Array<CategorieSection> {
    return this.service.itemscategoriesection;
  }

  set itemscategoriesection(value: Array<CategorieSection>) {
    this.service.itemscategoriesection = value;
  }
  get selectedcategoriesection(): CategorieSection {
    return this.service.selectedcategoriesection;
  }

  set selectedcategoriesection(value: CategorieSection) {
    this.service.selectedcategoriesection = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  set itemssection(value: Array<Section>) {
    this.service.itemssection = value;
  }
}
