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
  get itemsprof(): Array<Prof> {
    return this.service.itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this.service.itemsprof = value;
  }
  public FindAllProf(){
    console.log(this.itemsprof);
    this.service.findAllProf().subscribe(data => this.itemsprof = data);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set recommendTeacher(value: RecommendTeacher) {
    this.service.recommendTeacher = value;
  }

  public save() {
    this.service.save().subscribe(data => {
      console.log(this.selected);
      console.log('meryem');
  });
  }
  get selected(): RecommendTeacher {
    return this.service.selected;
  }

  set selected(value: RecommendTeacher) {
    this.service.selected = value;
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
