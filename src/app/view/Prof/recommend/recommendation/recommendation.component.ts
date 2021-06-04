import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RecommendTeacher} from '../../../../controller/Model/recommend-teacher.model';
import {RecommendTeacherService} from '../../../../controller/service/recommend-teacher.service';
import {LoginService} from '../../../../controller/service/login.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService,  private serviceUser: LoginService, private confirmationService: ConfirmationService, private service: RecommendTeacherService ) { }

  ngOnInit(): void {
    console.log(this.selected);
  }
  get items(): Array<RecommendTeacher> {
    return this.service.items;
  }

  set items(value: Array<RecommendTeacher>) {
    this.service.items = value;
  }
  get selected(): RecommendTeacher {
    return this.service.selected;
  }
  public save() {
     this.selected.prof = this.serviceUser.prof;
     this.service.save().subscribe(data => {
      // @ts-ignore
      this.items.push({...data});
      console.log(this.selected);
      console.log('meryem');
    });
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selected(value: RecommendTeacher) {
    this.service.selected = value;
  }
}
