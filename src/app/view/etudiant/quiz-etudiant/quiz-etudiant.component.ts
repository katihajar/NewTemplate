import { Component, OnInit } from '@angular/core';
import {QuizEtudiant} from '../../../controller/Model/quiz-etudiant.model';
import {Reponse} from '../../../controller/Model/reponse.model';
import {Question} from '../../../controller/Model/question.model';
import {ReponseEtudiant} from '../../../controller/Model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/Model/etudiant.model';
import {Quiz} from '../../../controller/Model/quiz.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {TypeDeQuestion} from '../../../controller/Model/type-de-question.model';

@Component({
  selector: 'app-quiz-etudiant',
  templateUrl: './quiz-etudiant.component.html',
  styleUrls: ['./quiz-etudiant.component.scss']
})
export class QuizEtudiantComponent implements OnInit {

  constructor(private service: QuizEtudiantService) { }

  ngOnInit(): void {
    this.service.findAllQuizs().subscribe(data => this.quizs = data);

    this.service.findFirstQuestion().subscribe(data => {
      this.question = data;
    });

    this.service.findReponses();

    this.service.findQuizRef().subscribe(data => {
      this.quiz = data;
    });

    this.service.findAllQuizEtudiant().subscribe(
        data => {
          this.quizEtudiants = data;
          this.q = data.length;
        }
    );

    this.service.findAllReponseEtudiant().subscribe(
        data =>{
          this.reponsesEtudiant = data;
          this.r = data.length;
        }
    );

    this.service.CorrectAnswer().subscribe(
        data => {
          this.reponsesCorrect = data;
        }
    );

    this.service.findEtudiant().subscribe(
        data => {
          this.etudiant = data;
        }
    )
  }

  get etudiant(): Etudiant {
    return this.service.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }

  get questions(): Array<Question> {
    return this.service.questions;
  }

  set questions(value: Array<Question>) {
    this.service.questions = value;
  }

  get questionsAll(): Array<Question> {
    return this.service.questionsAll;
  }

  set questionsAll(value: Array<Question>) {
    this.service.questionsAll = value;
  }

  get question(): Question {
    return this.service.question;
  }

  set question(value: Question) {
    this.service.question = value;
  }

  get reponses(): Array<Reponse> {
    return this.service.reponses;
  }

  set reponses(value: Array<Reponse>) {
    this.service.reponses = value;
  }

  get reponsesCorrect(): Array<Reponse> {
    return this.service.reponsesCorrect;
  }

  set reponsesCorrect(value: Array<Reponse>) {
    this.service.reponsesCorrect = value;
  }

  get quizs(): Array<Quiz> {
    return this.service.quizs;
  }

  set quizs(value: Array<Quiz>) {
    this.service.quizs = value;
  }

  get reponse(): Reponse {
    return this.service.reponse;
  }

  set reponse(value: Reponse) {
    this.service.reponse = value;
  }

  get reponseCorr(): Reponse {
    return this.service.reponseCorr;
  }

  set reponseCorr(value: Reponse) {
    this.service.reponseCorr = value;
  }

  get numQuestion(): number {
    return this.service.numQuestion;
  }

  set numQuestion(value: number) {
    this.service.numQuestion = value;
  }

  get numResponses(): number {
    return this.service.numResponses;
  }

  set numResponses(value: number) {
    this.service.numResponses = value;
  }

  get a(): number {
    return this.service.a;
  }

  set a(value: number) {
    this.service.a = value;
  }

  get k(): number {
    return this.service.k;
  }

  set k(value: number) {
    this.service.k = value;
  }

  get n(): number {
    return this.service.n;
  }

  set n(value: number) {
    this.service.n = value;
  }

  get note(): number {
    return this.service.note;
  }

  set note(value: number) {
    this.service.note = value;
  }

  get q(): number {
    return this.service.q;
  }

  set q(value: number) {
    this.service.q = value;
  }

  get r(): number {
    return this.service.r;
  }

  set r(value: number) {
    this.service.r = value;
  }

  get typeQst(): string {
    return this.service.typeQst;
  }

  set typeQst(value: string) {
    this.service.typeQst = value;
  }

  get button(): string {
    return this.service.button;
  }

  set button(value: string) {
    this.service.button = value;
  }

  get nbrRep(): string {
    return this.service.nbrRep;
  }

  set nbrRep(value: string) {
    this.service.nbrRep = value;
  }

  get selectedItemsRadio(): Array<Reponse> {
    return this.service.selectedItemsRadio;
  }

  set selectedItemsRadio(value: Array<Reponse>) {
    this.service.selectedItemsRadio = value;
  }

  get selectedItemsCheckBox(): Array<Reponse> {
    return this.service.selectedItemsCheckBox;
  }

  set selectedItemsCheckBox(value: Array<Reponse>) {
    this.service.selectedItemsCheckBox = value;
  }

  get nombreQuestion(): number {
    return this.service.nombreQuestion;
  }

  set nombreQuestion(value: number) {
    this.service.nombreQuestion = value;
  }

  get quiz(): Quiz {
    return this.service.quiz;
  }

  set quiz(value: Quiz) {
    this.service.quiz = value;
  }

  get quizEtudiant(): QuizEtudiant {
    return this.service.quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this.service.quizEtudiant = value;
  }

  get type(): TypeDeQuestion {
    return this.service.type;
  }

  set type(value: TypeDeQuestion) {
    this.service.type = value;
  }

  get types(): Array<TypeDeQuestion> {
    return this.service.types;
  }

  set types(value: Array<TypeDeQuestion>) {
    this.service.types = value;
  }

  get quizEtudiants(): Array<QuizEtudiant> {
    return this.service.quizEtudiants;
  }

  set quizEtudiants(value: Array<QuizEtudiant>) {
    this.service.quizEtudiants = value;
  }

  get quizEtudiantsInsert(): Array<QuizEtudiant> {
    return this.service.quizEtudiantsInsert;
  }

  set quizEtudiantsInsert(value: Array<QuizEtudiant>) {
    this.service.quizEtudiantsInsert = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this.service.reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this.service.reponseEtudiant = value;
  }

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiant = value;
  }

  get reponsesEtudiantNote(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiantNote;
  }

  set reponsesEtudiantNote(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiantNote = value;
  }

  public findAllQuestions(){
    this.service.findAllQuestions().subscribe(
        data=>{
          this.questionsAll = data;
          this.nombreQuestion = data.length;
        }
    );
  }

  public findNextQuestion(){
    this.numQuestion = this.numQuestion + 1;
    this.service.findNextQuestion().subscribe(
        data => {
          this.question = data;
          this.typeQst = data.typeDeQuestion.ref;
          //this.answerNext();
        }
    );
  }

  public findReponses(){
    this.numQuestion = this.numQuestion + 1;
    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );
  }

  public check(){
    this.service.check().subscribe(data => {});
  }

  public findQuiz(){
    this.service.findQuiz().subscribe(data => {
      this.quiz = data;
    });
  }

  public checkInput(rep){
    this.service.checkInput(rep).subscribe(data => {});
  }

  public insertQuizEtudiant()
  {
    this.service.insertQuizEtudiant().subscribe(data => {});
  }

  public findQuizEtudiant()
  {
    //this.findAllQuizEtudiant();
    this.service.findQuizEtudiant().subscribe(
        data => {
          this.quizEtudiant = data;
        }
    );
  }

  public insertReponseEtudiant(z: number, rep: string){
    //this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    this.service.insertReponseEtudiant(z,rep).subscribe(
        data =>{
          //this.findAllQuizEtudiant();
          this.reponseEtudiant = null;
          this.r = this.r + 1;
        }
    );
  }

  public answer(){
    this.insertQuizEtudiant();
    return this.service.answer();
  }

  public answerNext(){
    return this.service.answerNext();
  }

  public getAnswerRadio(event: any,ref: Reponse)
  {
    return this.service.getAnswerRadio(event, ref);
  }

}
