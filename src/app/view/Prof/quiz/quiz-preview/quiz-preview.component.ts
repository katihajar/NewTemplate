import { Component, OnInit } from '@angular/core';
import {Question} from "../../../../controller/Model/question.model";
import {Quiz} from "../../../../controller/Model/quiz.model";
import {TypeDeQuestion} from "../../../../controller/Model/type-de-question.model";
import {Reponse} from "../../../../controller/Model/reponse.model";
import {QuizService} from "../../../../controller/service/quiz.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../../../controller/Model/etudiant.model";
import {EtudiantService} from "../../../../controller/service/etudiant.service";
import {QuizEtudiant} from "../../../../controller/Model/quiz-etudiant.model";
import {QuizEtudiantService} from "../../../../controller/service/quiz-etudiant.service";
import {ReponseEtudiant} from "../../../../controller/Model/reponse-etudiant.model";

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.scss']
})
export class QuizPreviewComponent implements OnInit {

  private _i: number = 0;
  private _value: number = 1;
  private _selectedValue: string;
  private _button: string;
  private _numQuestion= 1;
  private _noteQuiz: number;






  constructor(private  service: QuizService, private router: Router , private etudiantService: QuizEtudiantService) { }
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

  set selected(value: Quiz) {
    this.service.selected = value;
  }
  get reponse(): Reponse {
    if (this.service.reponse == null){
      this.service.reponse = new Reponse();
    }
    return this.service.reponse;
  }
  get numQuestion(): number {
    return this._numQuestion;
  }

  set numQuestion(value: number) {
    this._numQuestion = value;
  }

  get i(): number {
    return this._i;
  }

  set i(value: number) {
    this._i = value;
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



  get noteQuiz(): number {
    return this._noteQuiz;
  }

  set noteQuiz(value: number) {
    this._noteQuiz = value;
  }

  get reponses(): Array<Reponse> {
    if (this.service.reponses == null){
      this.service.reponses = new Array<Reponse>();
    }
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
 /* shuffle(reponses: Array<Reponse>) {
    let currentIndex = reponses.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = reponses[currentIndex];
      reponses[currentIndex] = reponses[randomIndex];
      reponses[randomIndex] = temporaryValue;
    }
    return reponses;
  }*/
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
    console.log(this.selectedValue);
    this._value++;
    this.service.findReponse(this._value);
    this.service.qnprogress++;
    this.numQuestion++;
    if (this.numQuestion == this.service.questions.length) {
      this.button = 'Finish the Quiz';
    }else if (this.numQuestion > this.service.questions.length){
      document.getElementById('container').style.visibility = 'hidden';
      document.getElementById('mainCard').style.visibility = 'visible';
      if (this.noteQuiz >= this.selected.seuilReussite){
        document.getElementById('congratulations3').style.visibility = 'visible';
        document.getElementById('hard-luck3').style.visibility = 'hidden';
      }else {
        document.getElementById('congratulations3').style.visibility = 'hidden';
        document.getElementById('hard-luck3').style.visibility = 'visible';
      }
      clearInterval(this.service.timer);
    }
    this.service.findCorrectAnswers().subscribe(
        data => {
          this.correctAnswers = data;
        }
    );
    for (let i = 0 ; i < this.correctAnswers.length ; i++)
    {
      if (this.correctAnswers[i].ref == this.selectedValue)
      {
        this.noteQuiz ++;
      }
      else {
        this.noteQuiz = this.noteQuiz + this.question.pointReponsefausse;
      }
    }
  }

  ngOnInit(): void {
    this.service.findFirstReponse();
    this.service.seconds = 0;
    this.service.qnprogress = 0;
    this.service.findAll();
    this.button = 'Next';
    this.startTimer();
    this.service.findQuiz();
  }


  public viewQuiz(){
    this.router.navigate(['/pages/quiz-create']);
  }




}
