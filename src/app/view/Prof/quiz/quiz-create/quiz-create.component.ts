import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Quiz} from "../../../../controller/Model/quiz.model";
import {Reponse} from "../../../../controller/Model/reponse.model";
import {Question} from "../../../../controller/Model/question.model";
import {TypeDeQuestion} from "../../../../controller/Model/type-de-question.model";
import {QuizService} from "../../../../controller/service/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class QuizCreateComponent implements OnInit {

  constructor(private service: QuizService,private messageService: MessageService,private confirmationService: ConfirmationService,private router: Router) { }
  cols: any[];
  get question(): Question {
    return   this.service.question;
  }

  set question(value: Question) {
    this.service.question = value;
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

  private _newQuestion = new Question();
  get newQuestion(): Question {
    return this._newQuestion;
  }

  public saveQuiz() {
    this.service.saveQuiz();
    this.question.quiz.ref = this.selected?.ref;
  }

  set newQuestion(value: Question) {
    this._newQuestion = value;
  }
  ngOnInit(): void {
    this.service.findType().subscribe(
        data => {
          console.log(data);
          this.service.types = data;
        }, error1 => {
          console.log('can\'t bring data from database');
        }
    );
    // @ts-ignore
    this.questions.push(this.appendQuestion);
    this.service.findQuiz();
  }

  defaultchecked() {
    return this.service.defaultchecked();
  }

  addCard1() {
    return this.service.addCard1();
  }


  checked(event) {
    return this.service.checked(event);
  }

  public checkedFalse(event: any) {
    return this.service.checkedFalse(event);
  }

  public choixSelected(): void {
    this.service.choixSelected();
  }

  public quizSelected(): void {
    this.service.quizSelected();
  }

  public addCard() {
    return this.service.addCard();
  }

  get quizs(): Array<Quiz> {
    return this.service.items;
  }

  public addFormule() {
 let question = new Question();
    this.questions.push(question);
  }

  public save() {
    return this.service.save().subscribe(
        data => {
          console.log(this.questions);
          this.questions.push(this.clone(this.question));
          this.question = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Quiz Created',
            life: 3000
          });
        }
    );
  }

  public edit() {
    if (this.question.id) {
      this.questions[this.service.findIndexById(this.question.id)] = this.question;
      this.service.edit().subscribe(data => {
        this.question = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Question Updated',
          life: 3000
        });
      });
      this.question = new Question();
    }
  }

  public addTable() {
    return this.service.addTable();
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  public deleteCard(index: number) {
    return this.service.deleteCard(index);
  }
  get items(): Array<Quiz> {
    return this.service.items;
  }
  set items(value: Array<Quiz>) {
    this.service.items = value;
  }
  private clone(question: Question) {
    return this.service.clone(question);
  }
  public addReponse() {
    return this.service.addReponse();
  }
  delete(index: number) {
    this.service.delete(index);
  }
  public openConfig(){
    this.createDialog = true;
  }
  /*open(content): void {
      this.modalService.open(content);
  }*/

  shuffle(reponses: Array<Reponse>) {
    return this.service.shuffle(reponses);
  }
  getSafe(fn) {
    try {
      return fn();
    } catch (e) {

    }
  }
  public itemChecked(event: any) {
    return this.service.itemChecked(event);
  }
  private initCol() {
    this.cols = [
      {field: 'lib', header: 'Libelle Reponse'},
      {field: 'etatReponse', header: 'Correct'},
    ];
  }
  get selected(): Quiz {
    return this.service.selected;
  }

  set selected(value: Quiz) {
    this.service.selected = value;
  }
  validateForm() {
    return this.service.validateForm();
  }

  openPreview() {
    this.router.navigate(['/view/quiz-preview']);
  }
}
