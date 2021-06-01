import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {QuizEtudiant} from '../Model/quiz-etudiant.model';
import {Reponse} from '../Model/reponse.model';
import {HttpClient} from '@angular/common/http';
import {ReponseEtudiant} from '../Model/reponse-etudiant.model';
import {Question} from '../Model/question.model';
import {Quiz} from '../Model/quiz.model';
import {Etudiant} from '../Model/etudiant.model';
import {TypeDeQuestion} from '../Model/type-de-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizEtudiantService {

  private url = 'http://localhost:8036/learn/';
  private _etudiant: Etudiant;
  private _quiz: Quiz;
  private _items: Array<Question>;
  private _selected: Question;
  private _reponses: Array<Reponse>;
  private _quizsEtudiant: Array<QuizEtudiant>;
  private _quizEtudiant: QuizEtudiant;
  private _correctAnswers: Array<Reponse>;
  private _reponseEtudiant: ReponseEtudiant;
  private _reponsesEtudiant: Array<ReponseEtudiant>;
  private _myAnswer: Reponse;
  private _numReponses= 0;
  private _numCorrectAnswers= 0;
  private _numQuestion= 1;


  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this._reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this._reponsesEtudiant = value;
  }

  get myAnswer(): Reponse {
    return this._myAnswer;
  }

  set myAnswer(value: Reponse) {
    this._myAnswer = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this._reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this._reponseEtudiant = value;
  }

  get numCorrectAnswers(): number {
    return this._numCorrectAnswers;
  }

  set numCorrectAnswers(value: number) {
    this._numCorrectAnswers = value;
  }

  get correctAnswers(): Array<Reponse> {
    return this._correctAnswers;
  }

  set correctAnswers(value: Array<Reponse>) {
    this._correctAnswers = value;
  }

  get quizsEtudiant(): Array<QuizEtudiant> {
    return this._quizsEtudiant;
  }

  set quizsEtudiant(value: Array<QuizEtudiant>) {
    this._quizsEtudiant = value;
  }

  get quizEtudiant(): QuizEtudiant {
    return this._quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this._quizEtudiant = value;
  }

  get numQuestion(): number {
    return this._numQuestion;
  }

  set numQuestion(value: number) {
    this._numQuestion = value;
  }

  get numReponses(): number {
    return this._numReponses;
  }

  set numReponses(value: number) {
    this._numReponses = value;
  }

  get reponses(): Array<Reponse> {
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }

  get items(): Array<Question> {
    return this._items;
  }

  set items(value: Array<Question>) {
    this._items = value;
  }

  get selected(): Question {
    return this._selected;
  }

  set selected(value: Question) {
    this._selected = value;
  }

  get etudiant(): Etudiant {
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }


  get quiz(): Quiz {
    return this._quiz;
  }

  set quiz(value: Quiz) {
    this._quiz = value;
  }

  public findEtudiant(): Observable<Etudiant>
  {
    return this.http.get<Etudiant>(this.url + 'etudiant/ref/e1');
  }

  public findQuiz(): Observable<Quiz>
  {
    return this.http.get<Quiz>(this.url + 'quiz/ref/quiz1');
  }

  public findFirstQuestion(): Observable<Question>
  {
    return this.http.get<Question>(this.url + 'question/numero/1');
  }

  public findNextQuestion(): Observable<Question>
  {
    this.numQuestion = this.numQuestion + 1;
    return this.http.get<Question>(this.url + 'question/numero/' + this.numQuestion);
  }

  public findAllQuestions(): Observable<Array<Question>>
  {
    return this.http.get<Array<Question>>(this.url + 'question/');
  }

  public findReponses(): Observable<Array<Reponse>>
  {
    this.numReponses = this.numReponses + 1;
    return this.http.get<Array<Reponse>>(this.url + 'reponse/question/numero/' + this.numReponses);
  }

  public findCorrectAnswers(): Observable<Array<Reponse>>
  {
    this.numCorrectAnswers = this.numCorrectAnswers + 1;
    return this.http.get<Array<Reponse>>(this.url + 'reponse/criteria/numero/' + this.numCorrectAnswers);
  }

  public findAllQuizEtudiant(): Observable<Array<QuizEtudiant>>
  {
    return this.http.get<Array<QuizEtudiant>>(this.url + 'quizEtudiant/');
  }

  public findFirstQuizEtudiant(): Observable<QuizEtudiant>
  {
    return this.http.get<QuizEtudiant>(this.url + 'quizEtudiant/ref/qe1');
  }

  public insertQuizEtudiant(): Observable<QuizEtudiant>
  {
    return this.http.post<QuizEtudiant>(this.url + 'quizEtudiant/' , this.quizEtudiant);
  }

  public insertReponseEtudiant(): Observable<ReponseEtudiant>
  {
    return this.http.post<ReponseEtudiant>(this.url + 'reponseEtudiant/' , this.reponseEtudiant);
  }

  public findAllReponseEtudiant(): Observable<Array<ReponseEtudiant>>
  {
    return this.http.get<Array<ReponseEtudiant>>(this.url + 'reponseEtudiant/');
  }

  public findFirstReponseEtudiant(): Observable<ReponseEtudiant>
  {
    return this.http.get<ReponseEtudiant>(this.url + 'reponseEtudiant/ref/re1');
  }

  public findMyAnswer(ref: string): Observable<Reponse>
  {
    return this.http.get<Reponse>(this.url + 'reponse/ref/' + ref);
  }

  public updateQuizEtudiant(): Observable<QuizEtudiant>
  {
    return this.http.put<QuizEtudiant>(this.url + 'quizEtudiant/' , this.quizEtudiant);
  }

  constructor(private http: HttpClient) { }
}
