import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../controller/Model/cours.model';
import {RecommendTeacher} from '../../../controller/Model/recommend-teacher.model';
import {Prof} from '../../../controller/Model/prof.model';
import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lastUpdate = new Date();
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ParcoursService, private servicerecommend: RecommendTeacherService) { }

  ngOnInit(): void {
  }

  get itemsprof(): Array<Prof> {
    return this.servicerecommend.itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this.servicerecommend.itemsprof = value;
  }
  public FindAllProf(){
    console.log(this.selected);
    this.servicerecommend.findAllProf().subscribe(data => this.itemsprof = data);
  }
  public save() {
    this.servicerecommend.save().subscribe(data => {
      console.log(this.selected);
      console.log('meryem');
    });
  }
  get selected(): RecommendTeacher {
    return this.servicerecommend.selected;
  }

  set selected(value: RecommendTeacher) {
    this.servicerecommend.selected = value;
  }
  public openCreateCours() {
    this.selectedcours = new Cours();
    this.submittedCours = false;
    this.createDialogCours = true;
  }
  set submittedCours(value: boolean) {
    this.service.submittedCours = value;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get createDialogCours(): boolean {
    return this.service.createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this.service.createDialogCours = value;
  }

}
