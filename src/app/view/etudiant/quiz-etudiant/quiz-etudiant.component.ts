import { Component, OnInit } from '@angular/core';
import {QuizEtudiant} from '../../../controller/Model/quiz-etudiant.model';
import {Reponse} from '../../../controller/Model/reponse.model';
import {Question} from '../../../controller/Model/question.model';
import {ReponseEtudiant} from '../../../controller/Model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/Model/etudiant.model';
import {Quiz} from '../../../controller/Model/quiz.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {TypeDeQuestion} from '../../../controller/Model/type-de-question.model';
import {LoginService} from '../../../controller/service/login.service';

@Component({
  selector: 'app-quiz-etudiant',
  templateUrl: './quiz-etudiant.component.html',
  styleUrls: ['./quiz-etudiant.component.scss']
})
export class QuizEtudiantComponent implements OnInit {

  constructor(private service: QuizEtudiantService, private login: LoginService) { }

  private selectedValue: string;
  private _button: string;
  private _radio: string;
  private _checkbox: string;
  private _noteQst: number;
  private _noteQuiz: number;

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiant = value;
  }

  get myAnswer(): Reponse {
    return this.service.myAnswer;
  }

  set myAnswer(value: Reponse) {
    this.service.myAnswer = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this.service.reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this.service.reponseEtudiant = value;
  }

  get noteQst(): number {
    return this._noteQst;
  }

  set noteQst(value: number) {
    this._noteQst = value;
  }

  get noteQuiz(): number {
    return this._noteQuiz;
  }

  set noteQuiz(value: number) {
    this._noteQuiz = value;
  }

  get correctAnswers(): Array<Reponse> {
    return this.service.correctAnswers;
  }

  set correctAnswers(value: Array<Reponse>) {
    this.service.correctAnswers = value;
  }

  get checkbox(): string {
    return this._checkbox;
  }

  set checkbox(value: string) {
    this._checkbox = value;
  }

  get radio(): string {
    return this._radio;
  }

  set radio(value: string) {
    this._radio = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get etudiant(): Etudiant {
    return this.service.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }

  get quiz(): Quiz {
    return this.service.quiz;
  }

  set quiz(value: Quiz) {
    this.service.quiz = value;
  }

  get items(): Array<Question> {
    return this.service.items;
  }

  set items(value: Array<Question>) {
    this.service.items = value;
  }

  get selected(): Question {
    return this.service.selected;
  }

  set selected(value: Question) {
    this.service.selected = value;
  }

  get reponses(): Array<Reponse> {
    return this.service.reponses;
  }

  set reponses(value: Array<Reponse>) {
    this.service.reponses = value;
  }

  get numReponses(): number {
    return this.service.numReponses;
  }

  set numReponses(value: number) {
    this.service.numReponses = value;
  }

  get numQuestion(): number {
    return this.service.numQuestion;
  }

  set numQuestion(value: number) {
    this.service.numQuestion = value;
  }

  get quizsEtudiant(): Array<QuizEtudiant> {
    return this.service.quizsEtudiant;
  }

  set quizsEtudiant(value: Array<QuizEtudiant>) {
    this.service.quizsEtudiant = value;
  }

  get quizEtudiant(): QuizEtudiant {
    return this.service.quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this.service.quizEtudiant = value;
  }

  ///////////////////////////// Next() //////////////////////
  public next()
  {
    this.service.findNextQuestion().subscribe(
        data => {
          this.selected = data;
        }
    );
      // tslint:disable-next-line:triple-equals
    if (this.numQuestion == this.items.length)
    {
      this.button = 'Finish the test';
    }
    else if (this.numQuestion > this.items.length)
    {
      document.getElementById('finish').style.visibility = 'visible';
      document.getElementById('btn-next').style.visibility = 'hidden';
      document.getElementById('question').remove();

      this.quizEtudiant.note = this.noteQuiz;
      if (this.noteQuiz >= this.quiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
      }
      else if (this.noteQuiz < this.quiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'non validé';
      }
      this.service.updateQuizEtudiant().subscribe(
          data => {
          }
      );
    }

    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );

    this.service.findCorrectAnswers().subscribe(
        data => {
          this.correctAnswers = data;
        }
    );
      // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.correctAnswers.length ; i++)
    {
        // tslint:disable-next-line:triple-equals
      if (this.correctAnswers[i].ref == this.selectedValue)
      {
        this.noteQst = this.selected.pointReponseJuste;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
      }
      else {
        this.noteQst = this.selected.pointReponsefausse;
        this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
      }
    }
    this.service.findAllReponseEtudiant().subscribe(
        data => {
          this.reponsesEtudiant = data;

          this.service.findMyAnswer(this.selectedValue).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {

                this.myAnswer = data;

                this.service.findFirstReponseEtudiant().subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                      this.reponseEtudiant = data;
                      this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
                      this.reponseEtudiant.note = this.noteQst;
                      this.reponseEtudiant.reponse = this.myAnswer;
                      this.reponseEtudiant.ref = 're' + (this.reponsesEtudiant.length + 1);
                      this.reponseEtudiant.id = this.reponseEtudiant.id + (this.reponsesEtudiant.length + 1);
                      this.service.insertReponseEtudiant().subscribe(
                          // tslint:disable-next-line:no-shadowed-variable
                           data => {
                          }
                      );
                    }
                );
              }
          );
        }
    );
  }

  ///////////////////////////// Start() ///////////////////
  public start()
  {
    this.noteQuiz = 0;
    document.getElementById('start').remove();
    document.getElementById('question').style.visibility = 'visible';
    document.getElementById('quiz').style.backgroundColor = 'white';
    document.getElementById('btn-next').style.visibility = 'visible';
    this.button = 'Next';
    this.service.findAllQuizEtudiant().subscribe(
        data => {
          this.quizsEtudiant = data;

          this.service.findFirstQuizEtudiant().subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {

                this.quizEtudiant = data;

                this.quizEtudiant.quiz = this.quiz;
                this.quizEtudiant.etudiant = this.etudiant;
                this.quizEtudiant.resultat = null;
                this.quizEtudiant.note = 0;
                this.quizEtudiant.id = (this.quizsEtudiant.length + 1);
                this.quizEtudiant.dateFin = null;
                this.quizEtudiant.dateDebut = null;
                this.quizEtudiant.ref = 'qe' + (this.quizsEtudiant.length + 1);

                this.service.insertQuizEtudiant().subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {

                    }
                );
              }
          );
        }
    );
    this.service.findFirstQuestion().subscribe(
        data => {
          this.selected = data;
          /*if(this.selected.typeDeQuestion.ref = 't1')
          {
            this.radio = 'visible';
            this.checkbox = 'hidden';
          }
          else if(this.selected.typeDeQuestion.ref = 't2')
          {
            this.radio = 'hidden';
            this.checkbox = 'visible';
          }*/
        }
    );

    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );
    this.service.findCorrectAnswers().subscribe(
        data => {
          this.correctAnswers = data;
        }
    );

  }

  public selectionChanged(): void
  {
    /*for(let i=0 ; i < this.reponses.length ; i++)
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
    }*/
  }

  ngOnInit(): void {
    /*this.service.findEtudiant().subscribe(
        data => {
          this.etudiant = data;
        }
    );*/
      this.etudiant = this.login.etudiant;
    this.service.findQuiz().subscribe(
        data => {
          this.quiz = data;
        }
    );
    this.service.findAllQuestions().subscribe(
        data => {
          this.items = data;
        }
    );
  }

}
