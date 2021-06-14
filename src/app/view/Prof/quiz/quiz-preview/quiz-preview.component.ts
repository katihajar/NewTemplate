/* tslint:disable:triple-equals prefer-for-of variable-name align */
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

  private _i = 0;
  private _value = 1;
  private _selectedValue: string;
  private _button: string;
  private _noteQuiz = 0;
  private _noteCheckbox: number;




  constructor(private  service: QuizService, private router: Router) { }
  get question(): Question {
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
    return this.service.selected;
  }
  get typeReponse(): string {
    return this.service.typeReponse;
  }

  set typeReponse(value: string) {
    this.service.typeReponse = value;
  }
  get numQuestion(): number {
    return this.service.numQuestion;
  }

  set numQuestion(value: number) {
    this.service.numQuestion = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selected(value: Quiz) {
    this.service.selected = value;
  }
  get reponse(): Reponse {
    if (this.service.reponse == null){
      this.service.reponse = new Reponse();
    }
    return this.service.reponse;
  }


  get i(): number {
    return this._i;
  }

  set i(value: number) {
    this._i = value;
  }

  get noteCheckbox(): number {
    return this._noteCheckbox;
  }

  set noteCheckbox(value: number) {
    this._noteCheckbox = value;
  }


  get correctAnswers(): Array<Reponse> {
    return this.service.correctAnswers;
  }

  set correctAnswers(value: Array<Reponse>) {
    this.service.correctAnswers = value;
  }
  get selectedValue(): string {
    return this._selectedValue;
  }

  set selectedValue(value: string) {
    this._selectedValue = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get myAnswer(): Reponse {
    return this.service.myAnswer;
  }

  set myAnswer(value: Reponse) {
    this.service.myAnswer = value;
  }

  get noteQuiz(): number {
    return this._noteQuiz;
  }

  set noteQuiz(value: number) {
    this._noteQuiz = value;
  }

  get reponses(): Array<Reponse> {

    return this.service.reponses;
  }
  set reponses(value: Array<Reponse>) {
    this.service.reponses = value;
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


  get j(): number {
    return this.service.j;
  }

  set j(value: number) {
    this.service.j = value;
  }
  get typeQuestion(): string {
    return this.service.typeQuestion;
  }

  set typeQuestion(value: string) {
    this.service.typeQuestion = value;
  }


  public next()
  {
    this.service.qnprogress ++;
    this.service.findNextQuestion().subscribe(
        data => {
          this.question = data;
          if (data.typeDeQuestion.ref == 't1')
          {
            this.typeReponse = 'radio';
          }
          else if (data.typeDeQuestion.ref == 't2')
          {
            this.typeReponse = 'checkbox';
          }
          console.log(this.service.question.id);
        }
    );

    if (this.question.typeDeQuestion.ref == 't1')
    {
      this.service.findMyAnswer(this.selectedValue).subscribe(
          data => {
            this.myAnswer = data;
          }
      );
      for (let i = 0 ; i < this.correctAnswers.length ; i++)
      {

        if (this.correctAnswers[i].ref == this.selectedValue)
        {
          this.noteQuiz = this.noteQuiz + this.question.pointReponseJuste;
        }
        else {
          this.noteQuiz = this.noteQuiz + this.question.pointReponsefausse;
        }
      }

    }
    else if (this.question.typeDeQuestion.ref == 't2')
    {
      this.noteCheckbox = 0;
      for (let i = 0 ; i < this.correctAnswers.length ; i++)
      {
        for (let j = 0; j < this.reponses.length ; j++)
        {
          if (this.correctAnswers[i].ref == this.reponses[j].ref)
          {
            this.noteCheckbox = this.noteCheckbox + 1;
          }
        }
      }
      console.log('noteCheckbox = ' + this.noteCheckbox);
      if (this.noteCheckbox == this.correctAnswers.length && this.reponses.length == this.correctAnswers.length)
      {
        this.noteQuiz = this.noteQuiz + this.question.pointReponseJuste;
      }
      else
      {
        this.noteQuiz = this.noteQuiz + this.question.pointReponsefausse;
      }
      for (let j = 0; j < this.reponses.length ; j++)
      {
      }
    }


    if (this.numQuestion == this.questions.length)
    {
      this.button = 'Finish the test';
    }
    else if (this.numQuestion > this.questions.length)
    {
      if (this.noteQuiz >= this.selected.seuilReussite){
        document.getElementById('congratulations3').style.visibility = 'visible';
        document.getElementById('hard-luck3').style.visibility = 'hidden';
      }else {
        document.getElementById('congratulations3').style.visibility = 'hidden';
        document.getElementById('hard-luck3').style.visibility = 'visible';
      }
      document.getElementById('mainCard').style.visibility = 'visible';
      document.getElementById('question').remove();

    }

    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );
  }

  public start()
  {
    this.noteQuiz = 0;
    document.getElementById('start').remove();
    document.getElementById('question').style.visibility = 'visible';
    this.button = 'Next';
    this.service.findFirstQuestion().subscribe(
        data => {
          this.question = data;

          if (this.question.typeDeQuestion.ref == 't1')
          {
            this.typeReponse = 'radio';
          }
          else if (this.question.typeDeQuestion.ref == 't2')
          {
            this.typeReponse = 'checkbox';
          }
          console.log(this.service.question.id);
          this.service.findReponses().subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {

                this.reponses = data;
              }
          );
        }
    );
  }

  ngOnInit(): void {
    this.service.seconds = 0;
    this.service.qnprogress = 0;
    this.startTimer();
    this.service.findQuiz();
    this.Config();
  }
public Config(){
  if (this.service.configuration.shuffleOptions == true){
    this.service.shuffle(this.question.reponses);
  } if (this.service.configuration.shuffleQuestions == true){
    this.service.shuffleQuestion(this.questions);
  }if (this.service.configuration.allowBack == true){
    document.getElementById('backPage').style.visibility = 'visible';
  }
}
  public viewQuiz(){
    this.router.navigate(['/pages/quiz-create']);
  }
public backPage(){
    this.service.qnprogress --;
}

  public selectionChanged(reponse: Reponse): void
  {
    this.selectedValue = reponse.ref;
    for (let i = 0 ; i < this.reponses.length ; i++)
    {
      if (reponse.ref == this.reponses[i].ref)
      {
        document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#2e2e33';
        document.getElementById('div-' + this.reponses[i].ref).style.width = '320px';
        document.getElementById('div-' + this.reponses[i].ref).style.height = '43px';
      }
      else {
        document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#dcdcdc';
        document.getElementById('div-' + this.reponses[i].ref).style.width = '300px';
        document.getElementById('div-' + this.reponses[i].ref).style.height = '40px';
      }
    }
}
}
