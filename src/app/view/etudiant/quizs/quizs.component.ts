import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-commandes',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class QuizsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
