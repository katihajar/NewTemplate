import { Component, OnInit } from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Router} from '@angular/router';
import {QuizService} from '../../../../controller/service/quiz.service';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class SectionListComponent implements OnInit {

  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private serviceQuiz: QuizService, private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService , private router: Router) { }
  ngOnInit(): void {
    this.initCol();
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'code', header: 'Code'},
      {field: 'questions', header: 'Questions'},
      {field: 'urlVideo', header: 'UrlVideo'},
      {field: 'urlImage3', header: 'UrlImage3'},
      {field: 'urlImage2', header: 'UrlImage2'},
      {field: 'urlImage', header: 'UrlImage'},
      {field: 'contenu', header: 'Contenu'},
      {field: 'content', header: 'Content'},
      {field: 'indicationProf', header: 'IndicationProf'},
      {field: 'cours', header: 'Cours'},
      {field: 'categorieSection', header: 'CategorieSection'},
      {field: 'url', header: 'Url'},
      {field: 'superCategorieSection', header: 'SuperCategorieSection'}
    ];
  }
  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }

  set itemssection(value: Array<Section>) {
    this.service.itemssection = value;
  }

  get itemssection(): Array<Section> {
    return this.service.itemssection;
  }
  get selectessection(): Array<Section> {
    return this.service.selectessection;
  }

  set selectessection(value: Array<Section>) {
    this.service.selectessection = value;
  }
  public editSection(sections: Section) {
    this.selectedsection = {...sections};
    this.editDialogSection = true;
  }
  public view(sections: Section) {
    this.selectedsection = {...sections};
    this.viewDialogSection = true;
  }
  get createDialogSection(): boolean {
    return this.service.createDialogSection;
  }

  set createDialogSection(value: boolean) {
    this.service.createDialogSection = value;
  }

  get editDialogSection(): boolean {
    return this.service.editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this.service.editDialogSection = value;
  }

  get viewDialogSection(): boolean {
    return this.service.viewDialogSection;
  }

  set viewDialogSection(value: boolean) {
    this.service.viewDialogSection = value;
  }

  get submittedSection(): boolean {
    return this.service.submittedSection;
  }

  set submittedSection(value: boolean) {
    this.service.submittedSection = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  public delete(sections: Section) {
    this.selectedsection = sections;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + sections.libelle + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteSection().subscribe(data => {
          this.itemssection = this.itemssection.filter(val => val.id !== this.selectedsection.id);
          this.selectedsection = new Section();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Section Deleted',
            life: 3000
          });
        });
      }
    });
  }


  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected sections?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleSectionByid().subscribe(data => {
          this.service.deleteMultipleSectionIndexById();
          this.selectessection = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Sections Deleted',
            life: 3000
          });
        });
      }
    });
  }

    CreateQuiz(section: Section) {
      this.serviceQuiz.sectionSelected = section;
      this.router.navigate(['/pages/quiz-create']);
    }
}
