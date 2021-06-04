import { Component, OnInit } from '@angular/core';
import {QuizConfig} from "../../../../controller/Model/quiz-config.model";
import {MessageService} from "primeng/api";
import {QuizService} from "../../../../controller/service/quiz.service";


@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['./quiz-config.component.scss']
})
export class QuizConfigComponent implements OnInit {

  constructor(private service: QuizService, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  public hideCreateDialog() {
    this.createDialog = false;
  }
  get configuration(): QuizConfig {
    return this.service.configuration;
  }

  set configuration(value: QuizConfig) {
    this.service.configuration = value;
  }

  get configurations(): Array<QuizConfig> {
    return this.service.configurations;
  }

  set configurations(value: Array<QuizConfig>) {
    this.service.configurations = value;
  }
  public itemChecked(event: any) {
    if (event.target.checked) {
      this.service.shuffle(this.service.question.reponses);
    }
  }
  saveConfig() {
    this.service.ProgressBar(event);
    this.service.itemChecked(event);
    this.configurations?.push(this.configuration);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Configuration Applieded',
      life: 3000
    });
    this.createDialog = false;
  }

  ProgressBar($event: any) {
    return this.service.ProgressBar(event);
  }
}
