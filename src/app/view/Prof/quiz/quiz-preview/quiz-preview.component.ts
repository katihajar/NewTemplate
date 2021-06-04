import { Component, OnInit } from '@angular/core';
import {Question} from '../../../../controller/model/question.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {TypeDeQuestion} from '../../../../controller/model/type-de-question.model';
import {Reponse} from '../../../../controller/model/reponse.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.scss']
})
export class QuizPreviewComponent implements OnInit {

  i = 0;
  value = 0;
  constructor(private  service: QuizService, private router: Router) { }
  get question(): Question {
    if (this.service.question == null){
      this.service.question = new Question();
    }
    return this.service.question;
  }

  set question(value: Question) {
    this.service.question = value;
  }

  get questions(): Array<Question> {
    if (this.service.questions == null){
      this.service.questions = new Array<Question>();
    }
    return this.service.questions;
  }
  get selected(): Quiz {
    if (this.service.selected == null){
      this.service.selected = new Quiz();
    }
    return this.service.selected;
  }

  set selected(value: Quiz) {
    this.service.selected = value;
  }
  get reponse(): Reponse {
    if (this.service.reponse == null){
      this.service.reponse = new Reponse();
    }
    return this.service.reponse;
  }

  get reponses(): Array<Reponse> {
    if (this.service.reponses == null){
      this.service.reponses = new Array<Reponse>();
    }
    return this.service.question.reponses;
  }

  get type(): TypeDeQuestion {
    if (this.service.type == null){
      this.service.type = new TypeDeQuestion();
    }
    return this.service.question.typeDeQuestion;
  }

  get types(): Array<TypeDeQuestion> {
    if (this.service.types == null){
      this.service.types = new Array<TypeDeQuestion>();
    }
    return this.service.types;
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


  get items(): Array<Quiz> {
    if (this.service.items == null){
      this.service.items = new Array<Quiz>();
    }
    return this.service.items;
  }
  set items(value: Array<Quiz>) {
    this.service.items = value;
  }


  startTimer() {
    this.service.timer = setInterval(() => {
      this.service.seconds++;
    }, 1000);
  }
  shuffle(reponses: Array<Reponse>) {
    let currentIndex = reponses.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = reponses[currentIndex];
      reponses[currentIndex] = reponses[randomIndex];
      reponses[randomIndex] = temporaryValue;
    }
    return reponses;
  }
  Answer(n: number, rep: Question) {
    this.service.questions[this.service.qnprogress].reponses = rep.reponses;
  }

  get j(): number {
    return this.service.j;
  }

  set j(value: number) {
    this.service.j = value;
  }

  NextQuestion() {
    this.j ++;
    this.i++;
    this.service.a++;
    this.service.qnprogress++;
    this.value++;
    this.i++;
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

    this.startTimer();
    this.service.findQuiz();
    // this.service.findReponses();
    this.service.findByQuestionRef().subscribe(
        data => {
          this.question.reponses = data;
          this.NextQuestion();
        }
    );
    // this.service.findReponses1();

    // this.service.CorrectAnswer();
  }
  public getReponsesByQuestion(){
    return this.service.getReponsesByQuestion();
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
    this.router.navigate(['/pages/quiz-create']);
  }

  selectQuiz($event: Event , i: number) {
    return this.service.selectQuiz(event , i);
  }
  public finByQuizRef(quiz: Quiz) {
    return this.service.finByQuizRef(quiz);
  }

}

