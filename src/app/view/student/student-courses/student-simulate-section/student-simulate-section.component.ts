import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Section} from '../../../../controller/Model/section.model';
import {Cours} from '../../../../controller/Model/cours.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-simulate-section',
  templateUrl: './student-simulate-section.component.html',
  styleUrls: ['./student-simulate-section.component.scss']
})
export class StudentSimulateSectionComponent implements OnInit {


  // tslint:disable-next-line:max-line-lengthg
  constructor(private messageService: MessageService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient) { }
  value = 0;

  get image(): string {
    return this.service.image;
  }

  set image(value: string) {
    this.service.image = value;
  }

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
  NextSection() {
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder != 0){
      this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = 6;
      this.NextSection();
    }
  }
  photoURL() {
    this.service.image = '';
    for (let j = 0; j < 66 ; j++)
    {
      this.service.image += this.selectedsection.urlImage[j];
    }
    this.service.image += 'preview';
    console.log(this.service.image );
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
  }

  PreviousSection() {
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder != 6){
      this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = 0;
      this.PreviousSection();
    }
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set itemssection2(value: Array<Section>) {
    this.service.itemssection2 = value;
  }
  get itemssection2(): Array<Section> {
    return this.service.itemssection2;
  }
  get selectessection(): Array<Section> {
    return this.service.selectessection;
  }
  set selectessection(value: Array<Section>) {
    this.service.selectessection = value;
  }
}
