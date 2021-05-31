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

  private _questions: Array<Question>;
  private _questionsAll: Array<Question>;
  private _question: Question;
  private _reponses: Array<Reponse>;
  private _reponsesCorrect: Array<Reponse>;
  private _quizs: Array<Quiz>;
  private _reponse: Reponse;
  private _reponseCorr: Reponse;
  private _numQuestion = 1;
  private _numResponses = 0;
  private _a: number;
  private _k = -1;
  private _n: number;
  private _note: number;
  private _q = 0;
  private _r = 0;
  private _typeQst :string;
  private _button :string;
  private _nbrRep :string;
  private _selectedItemsRadio : Array<Reponse>;
  private _selectedItemsCheckBox : Array<Reponse>;
  private _nombreQuestion = 0;

  private _quiz: Quiz;
  private _quizEtudiant: QuizEtudiant;
  private _type: TypeDeQuestion;
  private _types: Array<TypeDeQuestion>;
  private _quizEtudiants: Array<QuizEtudiant>;
  private _quizEtudiantsInsert: Array<QuizEtudiant>;
  private _reponseEtudiant: ReponseEtudiant;
  private _reponsesEtudiant: Array<ReponseEtudiant>;
  private _reponsesEtudiantNote: Array<ReponseEtudiant>;
  private _etudiant: Etudiant;


  get etudiant(): Etudiant {
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  get questions(): Array<Question> {
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }

  get questionsAll(): Array<Question> {
    return this._questionsAll;
  }

  set questionsAll(value: Array<Question>) {
    this._questionsAll = value;
  }

  get question(): Question {
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get reponses(): Array<Reponse> {
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }

  get reponsesCorrect(): Array<Reponse> {
    return this._reponsesCorrect;
  }

  set reponsesCorrect(value: Array<Reponse>) {
    this._reponsesCorrect = value;
  }

  get quizs(): Array<Quiz> {
    return this._quizs;
  }

  set quizs(value: Array<Quiz>) {
    this._quizs = value;
  }

  get reponse(): Reponse {
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get reponseCorr(): Reponse {
    return this._reponseCorr;
  }

  set reponseCorr(value: Reponse) {
    this._reponseCorr = value;
  }

  get numQuestion(): number {
    return this._numQuestion;
  }

  set numQuestion(value: number) {
    this._numQuestion = value;
  }

  get numResponses(): number {
    return this._numResponses;
  }

  set numResponses(value: number) {
    this._numResponses = value;
  }

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get k(): number {
    return this._k;
  }

  set k(value: number) {
    this._k = value;
  }

  get n(): number {
    return this._n;
  }

  set n(value: number) {
    this._n = value;
  }

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get q(): number {
    return this._q;
  }

  set q(value: number) {
    this._q = value;
  }

  get r(): number {
    return this._r;
  }

  set r(value: number) {
    this._r = value;
  }

  get typeQst(): string {
    return this._typeQst;
  }

  set typeQst(value: string) {
    this._typeQst = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get nbrRep(): string {
    return this._nbrRep;
  }

  set nbrRep(value: string) {
    this._nbrRep = value;
  }

  get selectedItemsRadio(): Array<Reponse> {
    return this._selectedItemsRadio;
  }

  set selectedItemsRadio(value: Array<Reponse>) {
    this._selectedItemsRadio = value;
  }

  get selectedItemsCheckBox(): Array<Reponse> {
    return this._selectedItemsCheckBox;
  }

  set selectedItemsCheckBox(value: Array<Reponse>) {
    this._selectedItemsCheckBox = value;
  }

  get nombreQuestion(): number {
    return this._nombreQuestion;
  }

  set nombreQuestion(value: number) {
    this._nombreQuestion = value;
  }

  get quiz(): Quiz {
    return this._quiz;
  }

  set quiz(value: Quiz) {
    this._quiz = value;
  }

  get quizEtudiant(): QuizEtudiant {
    return this._quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this._quizEtudiant = value;
  }

  get type(): TypeDeQuestion {
    return this._type;
  }

  set type(value: TypeDeQuestion) {
    this._type = value;
  }

  get types(): Array<TypeDeQuestion> {
    return this._types;
  }

  set types(value: Array<TypeDeQuestion>) {
    this._types = value;
  }

  get quizEtudiants(): Array<QuizEtudiant> {
    return this._quizEtudiants;
  }

  set quizEtudiants(value: Array<QuizEtudiant>) {
    this._quizEtudiants = value;
  }

  get quizEtudiantsInsert(): Array<QuizEtudiant> {
    return this._quizEtudiantsInsert;
  }

  set quizEtudiantsInsert(value: Array<QuizEtudiant>) {
    this._quizEtudiantsInsert = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this._reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this._reponseEtudiant = value;
  }

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this._reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this._reponsesEtudiant = value;
  }

  get reponsesEtudiantNote(): Array<ReponseEtudiant> {
    return this._reponsesEtudiantNote;
  }

  set reponsesEtudiantNote(value: Array<ReponseEtudiant>) {
    this._reponsesEtudiantNote = value;
  }

  public findAllQuizs(): Observable<Array<Quiz>>
  {
    return this.http.get<Array<Quiz>>('http://localhost:8036/centre/quiz/' );
  }

  public findQuiz(): Observable<Quiz>
  {
    return this.http.get<Quiz>('http://localhost:8036/centre/quiz/ref/quiz1' );
  }

  public findAllQuestions(): Observable<Array<Question>>{
    return this.http.get<Array<Question>>('http://localhost:8036/centre/question/');
  }

  public findFirstQuestion(): Observable<Question>
  {
    return this.http.get<Question>('http://localhost:8036/centre/question/numero/1');
  }

  public findNextQuestion(): Observable<Question>{
    this.numQuestion = this.numQuestion + 1;
    return this.http.get<Question>('http://localhost:8036/centre/question/numero/' + this.numQuestion);
  }

  public findReponses(): Observable<Array<Reponse>>{
    this.numResponses = this.numResponses + 1;
    return this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/question/numero/' + this.numResponses);
  }

  public check(): Observable<QuizEtudiant>{
    if(this.numQuestion  == this._nombreQuestion-1)
    {
      this.button = 'Finish the test';
    }
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.a = 0;
      for (this.n = 0 ; this.n < this.selectedItemsRadio.length ; this.n = this.n + 1)
      {
        for (let m = 0 ; m < this.reponsesCorrect.length ; m++)
        {
          if(this.reponsesCorrect[m].ref == this.selectedItemsRadio[this.n].ref)
          {
            this.a = this.a + 1;
          }
        }
      }
      if(this.a == 1)
      {
        this.insertReponseEtudiant(this.question.pointReponseJuste, '');
        this.note = this.note + this.question.pointReponseJuste;
      }
      else
      {
        this.insertReponseEtudiant(this.question.pointReponsefausse, '');
        this.note = this.note + this.question.pointReponsefausse;
      }
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      this.a = 0;
      for (this.n = 0 ; this.n < this.selectedItemsCheckBox.length ; this.n = this.n + 1)
      {
        for (let m = 0 ; m < this.reponsesCorrect.length ; m++)
        {
          if(this.reponsesCorrect[m].ref == this.selectedItemsCheckBox[this.n].ref)
          {
            this.a = this.a + 1;
          }
        }
      }
      if(this.a == this.reponsesCorrect.length && this.selectedItemsCheckBox.length == this.reponsesCorrect.length)
      {
        this.insertReponseEtudiant(this.question.pointReponseJuste, '');
        this.note = this.note + this.question.pointReponseJuste;
      }
      else
      {
        this.insertReponseEtudiant(this.question.pointReponsefausse, '');
        this.note = this.note + this.question.pointReponsefausse;
      }
      //this.answerNext();
    }
    if(this.numQuestion  == this._nombreQuestion)
    {
      this.button = 'Finish the test';
      this.quizEtudiant.id = this.quizEtudiants.length;
      this.quizEtudiant.note = this.note;
      if(this.quizEtudiant.note >= this.quiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
        document.getElementById ('congratulations').style.visibility = 'visible';
        document.getElementById ('hard-luck').remove();
      }
      else {
        this.quizEtudiant.resultat = 'non validé';
        document.getElementById ('congratulations').remove();
        document.getElementById ('hard-luck').style.visibility = 'visible';
      }
      document.getElementById ('finish').style.visibility = 'visible';
      document.getElementById ('question').remove();
      document.getElementById ('quiz').style.backgroundColor = '#90eef0';
      document.getElementById ('countdown').style.visibility = 'hidden';
      document.getElementById ('progression').style.visibility = 'hidden';
      document.getElementById ('file').style.visibility = 'hidden';
      return this.http.put<QuizEtudiant>('http://localhost:8036/centre/quizEtudiant/' , this.quizEtudiant);
    }
    else
    {
      this.CorrectAnswer();
      this.findNextQuestion();
      this.findReponses();
    }
  }

  public checkInput(rep): Observable<QuizEtudiant> {
    if(this.numQuestion  == this._nombreQuestion-1)
    {
      this.button = 'Finish the test';
    }
    this.insertReponseEtudiant(0,rep);
    this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    if(this.numQuestion  == this._nombreQuestion)
    {
      this.quizEtudiant.id = this.quizEtudiants.length;
      this.quizEtudiant.note = this.note;
      if(this.quizEtudiant.note >= this.quiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
      }
      else {
        this.quizEtudiant.resultat = 'non validé';
      }
      document.getElementById ('finish').style.visibility = 'visible';
      document.getElementById ('quiz').remove();
      return this.http.put<QuizEtudiant>('http://localhost:8036/centre/quizEtudiant/' , this.quizEtudiant);
    }
    else
    {
      this.CorrectAnswer();
      this.findNextQuestion();
      this.findReponses();
    }
  }

  public findQuizRef(): Observable<Quiz>
  {
    return this.http.get<Quiz>('http://localhost:8036/centre/quiz/ref/quiz1');
  }

  public findAllQuizEtudiant(): Observable<Array<QuizEtudiant>>
  {
    return this.http.get<Array<QuizEtudiant>>('http://localhost:8036/centre/quizEtudiant/');
  }

  public findAllReponseEtudiant(): Observable<Array<ReponseEtudiant>>
  {
    return this.http.get<Array<ReponseEtudiant>>('http://localhost:8036/centre/reponseEtudiant/');
  }

  public insertQuizEtudiant(): Observable<QuizEtudiant>
  {
    this.findAllQuizEtudiant();
    this.quizEtudiant.etudiant = this.etudiant;
    this.findQuiz();
    this.quizEtudiant.quiz = this.quiz;
    this.quizEtudiant.dateDebut = null;
    this.quizEtudiant.dateFin = null;
    this.quizEtudiant.id = (this.q + 1);
    this.quizEtudiant.note = 0;
    this.quizEtudiant.ref = 'qe' + (this.q + 1);
    this.quizEtudiant.resultat = null;

    return this.http.post<QuizEtudiant>('http://localhost:8036/centre/quizEtudiant/', this.quizEtudiant);
    this.findAllQuizEtudiant();
  }

  public findQuizEtudiant(): Observable<QuizEtudiant>
  {
    this.findAllQuizEtudiant();
    return this.http.get<QuizEtudiant>('http://localhost:8036/centre/quizEtudiant/ref/qe' + this.q);
  }

  public insertReponseEtudiant(z: number, rep: string): Observable<QuizEtudiant>{
    this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    if (this.question.typeDeQuestion.ref == 't1') {
      for (this.n = 0; this.n < this.selectedItemsRadio.length; this.n = this.n + 1) {
        this.reponseEtudiant.id = 1;
        this.reponseEtudiant.note = z;
        this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        this.reponseEtudiant.ref = 're' + (this.r + 1);
        this.reponseEtudiant.reponse = this.selectedItemsRadio[this.n];

        return this.http.post<QuizEtudiant>('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant);
      }
    }
    else if (this.question.typeDeQuestion.ref == 't2') {
      for (this.n = 0 ; this.n < this.selectedItemsCheckBox.length ; this.n = this.n + 1)
      {
        this.findAllQuizEtudiant();
        this.findQuizEtudiant();
        this.reponseEtudiant.id = 1;
        this.reponseEtudiant.note = (z/this.selectedItemsCheckBox.length);
        this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        this.reponseEtudiant.ref = 're' + (this.r + 1 + this.n);
        this.reponseEtudiant.reponse = this.selectedItemsCheckBox[this.n];

        return this.http.post<QuizEtudiant>('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant);
      }
    }
    else if (this.question.typeDeQuestion.ref == 't3') {
      this.a = 0;
      for (let m = 0 ; m < this.reponsesCorrect.length ; m++) {
        if (this.reponsesCorrect[m].lib == rep) {
          this.a = this.a + this.question.pointReponseJuste;
          this.note = this.note + this.question.pointReponseJuste;
        }
        this.reponseEtudiant.id = 1;
        this.reponseEtudiant.note = this.a;
        this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        this.reponseEtudiant.ref = 're' + (this.r + 1);
        this.reponseEtudiant.reponse = this.reponsesCorrect[m];

        return this.http.post<QuizEtudiant>('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant);
        /*this.findAllQuizEtudiant();
        this.reponseEtudiant = null;
        this.r = this.r + 1;*/
      }
    }
  }

  public answer(){
    this.findAllReponseEtudiant();
    this.note = 0;
    //this.insertQuizEtudiant();
    this.CorrectAnswer();
    this.button = 'Next';
    document.getElementById ('start').remove();
    document.getElementById ('question').style.visibility = 'visible';
    document.getElementById ('countdown').style.visibility = 'visible';
    document.getElementById ('progression').style.visibility = 'visible';
    document.getElementById ('file').style.visibility = 'visible';
    document.getElementById ('quiz').style.backgroundColor = 'white';
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.typeQst = 'radio';
      document.getElementById ('nbrRep').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      this.typeQst = 'checkbox';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
      document.getElementById ('nbrRep').style.visibility = 'visible';
      this.nbrRep = 'multiple choice';
    }
    else if(this.question.typeDeQuestion.ref == 't3')
    {
      document.getElementById ('nbrRep').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.height = '10px';
      document.getElementById ('reponse-text').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.marginTop = '-200px';
    }
  }

  public answerNext(){
    document.getElementById ('question').style.visibility = 'visible';
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.typeQst = 'radio';
      document.getElementById ('nbrRep').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      document.getElementById ('nbrRep').style.visibility = 'visible';
      this.typeQst = 'checkbox';
      this.nbrRep = 'multiple choice';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.typeQst == 't3')
    {
      document.getElementById ('nbrRep').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.visibility = 'hidden';
      document.getElementById ('reponse-radio').style.height = '50px';
      document.getElementById ('reponse-text').style.visibility = 'visible';
      this.typeQst = 'text';
    }
  }

  public CorrectAnswer()
  {
    this.k = this.k + 1;
    return this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/criteria/numero/' + this.k);
  }

  public getAnswerRadio(event: any,ref: Reponse)
  {
    if(this.question.typeDeQuestion.ref == 't1')
    {
      if(event.target.checked) {
        this._selectedItemsRadio.push(ref);
        this._selectedItemsRadio = this._selectedItemsRadio.filter(m => m == ref);
      }
      for(let i=0 ; i < this.reponses.length ; i++)
      {
        if(ref.ref == this.reponses[i].ref)
        {
          document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#268a9e';
          document.getElementById('div-' + this.reponses[i].ref).style.width = '320px';
          document.getElementById('div-' + this.reponses[i].ref).style.height = '43px';
        }
        else {
          document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#90eef0';
          document.getElementById('div-' + this.reponses[i].ref).style.width = '300px';
          document.getElementById('div-' + this.reponses[i].ref).style.height = '40px';
        }
      }
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      if(event.target.checked)
      {
        this._selectedItemsCheckBox.push(ref);
        document.getElementById('div-' + ref.ref).style.backgroundColor = '#268a9e';
        document.getElementById('div-' + ref.ref).style.width = '320px';
        document.getElementById('div-' + ref.ref).style.height = '43px';
      }
      else {
        this._selectedItemsCheckBox = this._selectedItemsCheckBox.filter(m=>m!=ref);
        document.getElementById('div-' + ref.ref).style.backgroundColor = '#90eef0';
        document.getElementById('div-' + ref.ref).style.width = '300px';
        document.getElementById('div-' + ref.ref).style.height = '40px';
      }
    }
  }

  public findEtudiant(): Observable<Etudiant>
  {
    return this.http.get<Etudiant>('http://localhost:8036/learn/etudiant/ref/e1');
  }

  constructor(private http: HttpClient) { }
}
