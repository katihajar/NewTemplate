import { Component, OnInit } from '@angular/core';
import {Section} from '../../../../controller/Model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/Model/cours.model';

@Component({
  selector: 'app-section-simulate',
  templateUrl: './section-simulate.component.html',
  styleUrls: ['./section-simulate.component.scss']
})
export class SectionSimulateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }
  value = 0;
  ngOnInit(): void {
  }
  get progress(): number {
    return this.service.progress;
  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set progress(value: number) {
    this.service.progress = value;
  }
  PreviewsSection() {
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder != 0){
    this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = 6;
      this.PreviewsSection();
    }
  }
  NextSection() {
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder != 6){
    this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = 0;
      this.NextSection();
    }
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
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
}
