import { Component, OnInit } from '@angular/core';
import {Question} from '../../../../controller/Model/question.model';
import {Quiz} from '../../../../controller/Model/quiz.model';
import {TypeDeQuestion} from '../../../../controller/Model/type-de-question.model';
import {Reponse} from '../../../../controller/Model/reponse.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.scss']
})
export class QuizPreviewComponent implements OnInit {


  value = 0;
  constructor(private  service: QuizService, private router: Router) { }
  get question(): Question {
    return this.service.question;
  }
  set question(value: Question) {
    this.service.question = value;
  }
  public displayTime() {
    return this.service.displayTime();
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get qnprogress(): number {
    return this.service.qnprogress;
  }
  get questions(): Array<Question> {
    return this.service.questions;
  }

  get reponse(): Reponse {
    return this.service.reponse;
  }

  get reponses(): Array<Reponse> {
    return this.service.question.reponses;
  }

  get type(): TypeDeQuestion {
    return this.service.question.typeDeQuestion;
  }

  get types(): Array<TypeDeQuestion> {
    return this.service.types;
  }
  get items(): Array<Quiz> {
    return this.service.items;
  }
  set items(value: Array<Quiz>) {
    this.service.items = value;
  }
  get selected(): Quiz {
    return this.service.selected;
  }

  set selected(value: Quiz) {
    this.service.selected = value;
  }
  startTimer() {
    this.service.timer = setInterval(() => {
      this.service.seconds++;
    }, 1000);
  }


  Answer(n: number, rep: Question) {
    this.service.questions[this.service.qnprogress].reponses = rep.reponses;
  }


  NextQuestion() {
    this.service.a++;
    this.service.qnprogress++;
    this.value++;
    // tslint:disable-next-line:triple-equals
    if (this.service.qnprogress == this.service.questions.length) {
      document.getElementById('container').style.visibility = 'hidden';
      document.getElementById('mainCard').style.visibility = 'visible';
      if (this.correctAnswerCount >= 10){
        document.getElementById('congratulations3').style.visibility = 'visible';
        document.getElementById('hard-luck3').style.visibility = 'hidden';
      }else {
        document.getElementById('congratulations3').style.visibility = 'hidden';
        document.getElementById('hard-luck3').style.visibility = 'visible';
      }
      clearInterval(this.service.timer);
    }
  }

  get correctAnswerCount(): number {
    return this.service.correctAnswerCount;
  }
  ngOnInit(): void {
    this.service.seconds = 0;
    this.service.qnprogress = 0;
    this.service.findAll();
    this.service.getQuiz().subscribe(data => {
      let i = 0;
      i = i + 1;
      this.items[i] = data[i];
    });
    // this.service.getReponses().subscribe(data => this.service.reponses = data);
    this.startTimer();
    this.service.getReponsesByQuestion(this.question);
    this.service.CorrectAnswer();

  }

  checked(e) {
    // tslint:disable-next-line:triple-equals
    if (e.target.checked == true){
      this.service.correctAnswerCount++;
    }else {
      this.service.correctAnswerCount = 0;
    }
  }
  public viewQuiz(){
    this.router.navigate(['/view/quiz-create']);
  }
}

