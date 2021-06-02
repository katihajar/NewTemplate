import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import { RecommendTeacher } from 'src/app/controller/Model/recommend-teacher.model';
import { RecommendTeacherService } from 'src/app/controller/service/recommend-teacher.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: RecommendTeacherService ) { }

  ngOnInit(): void {
  }
  get selected(): RecommendTeacher {
    return this.service.selected;
  }
  public save() {
    this.service.save().subscribe(data => {
      console.log(this.selected);
      console.log('meryem');
    });
  }
  set selected(value: RecommendTeacher) {
    this.service.selected = value;
  }
}
