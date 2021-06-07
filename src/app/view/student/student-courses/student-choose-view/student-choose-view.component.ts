import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../../controller/Model/cours.model';
import {Section} from '../../../../controller/Model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';

@Component({
  selector: 'app-student-choose-view',
  templateUrl: './student-choose-view.component.html',
  styleUrls: ['./student-choose-view.component.scss']
})
export class StudentChooseViewComponent implements OnInit {
  value = 0;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
  }
  public FindSection(cour: Cours) {
    this.selectedcours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.selectesssection = data;
        });
  }
  get image(): string {
    return this.service.image;
  }

  set image(value: string) {
    this.service.image = value;
  }
  public FindSectionOneByOne(cour: Cours) {
    this.selectedcours = cour;
    let i = 0;
    i = i + 1;
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.service.image = '';
    this.service.afficheOneSection().subscribe(
        data => {
          this.selectedsection = data;
          for (let j = 0; j < 66 ; j++)
          {
            this.service.image += this.service.selectedsection.urlImage[j];
          }
          this.service.image += 'preview';
          console.log(this.service.image);
        });
  }
  set selectesssection(value: Array<Section>) {
    this.service.selectesssection = value;
  }
  public viewType2() {
    this.viewChooseType2 = true;
  }
  get viewChooseType2(): boolean {
    return this.service.viewChooseType2;
  }
// tslint:disable-next-line:adjacent-overload-signatures
  get itemssection2(): Array<Section> {
    return this.service.itemssection2;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  get selectescours(): Array<Cours> {
    return this.service.selectescours;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemssection2(value: Array<Section>) {
    this.service.itemssection2 = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set viewChooseType2(value: boolean) {
    this.service.viewChooseType2 = value;
  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }

}
