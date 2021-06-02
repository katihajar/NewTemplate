import { Component, OnInit } from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';

import {RecommendTeacherService} from '../../../controller/service/recommend-teacher.service';
import {RecommendTeacher} from '../../../controller/Model/recommend-teacher.model';
import {Prof} from '../../../controller/Model/prof.model';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: RecommendTeacherService) { }

  ngOnInit(): void {
  }
  get recommendTeacher(): RecommendTeacher {
    return this.service.recommendTeacher;
  }
  get itemssprof(): Array<Prof> {
    return this.service.itemssprof;
  }

  set itemssprof(value: Array<Prof>) {
    this.service.itemssprof = value;
  }
  public FindAllProf(){
    console.log(this.itemssprof);
    this.service.findAllProf().subscribe(data => this.itemssprof = data);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set recommendTeacher(value: RecommendTeacher) {
    this.service.recommendTeacher = value;
  }

  public save() {
    this.service.save().subscribe(data => {
      console.log(this.selectedRecommend);
      console.log('meryem');
  });
  }
  get selectedRecommend(): RecommendTeacher {
    return this.service.selectedRecommend;
  }

  set selectedRecommend(value: RecommendTeacher) {
    this.service.selectedRecommend = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get items(): Array<RecommendTeacher> {
    return this.service.items;
  }

  set items(value: Array<RecommendTeacher>) {
    this.service.items = value;
  }
  get prof(): Prof {
    return this.service.prof;
  }

  set prof(value: Prof) {
    this.service.prof = value;
  }
}
