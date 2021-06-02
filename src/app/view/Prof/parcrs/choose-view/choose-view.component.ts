import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/Model/cours.model';
import {Section} from '../../../../controller/Model/section.model';

@Component({
  selector: 'app-choose-view',
  templateUrl: './choose-view.component.html',
  styleUrls: ['./choose-view.component.scss']
})
export class ChooseViewComponent implements OnInit {
  value = 0;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  ngOnInit(): void {
  }
  public FindSection(cour: Cours) {
    this.selectedcours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.selectessection = data;
        });
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
    this.service.afficheOneSection().subscribe( data => { this.selectedsection = data; });
  }
  set selectessection(value: Array<Section>) {
    this.service.selectessection = value;
  }
  public viewType() {
    this.viewChooseType = true;
  }
  get viewChooseType(): boolean {
    return this.service.viewChooseType;
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
  set viewChooseType(value: boolean) {
    this.service.viewChooseType = value;
  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }
}
