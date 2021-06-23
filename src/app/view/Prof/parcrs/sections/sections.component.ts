import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Section} from '../../../../controller/Model/section.model';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {


  cols: any[];
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, public sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
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
  // tslint:disable-next-line:adjacent-overload-signatures
  get selectedsection(): Section {
    return this.service.selectedsection;
  }
  photoURL() {

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image2);
  }

}
