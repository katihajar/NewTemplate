import { Component, OnInit } from '@angular/core';
import {QuizEtudiant} from '../../../controller/Model/quiz-etudiant.model';
import {EtudiantClassRoom} from '../../../controller/Model/etudiant-class-room.model';
import {QuizClassRoom} from '../../../controller/Model/quiz-class-room.model';
import {Quiz} from '../../../controller/Model/quiz.model';
import {ReponseEtudiant} from '../../../controller/Model/reponse-etudiant.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Question} from '../../../controller/Model/question.model';
import {Reponse} from '../../../controller/Model/reponse.model';

@Component({
  selector: 'app-quiz-etudiant-view',
  templateUrl: './quiz-etudiant-view.component.html',
  styleUrls: ['./quiz-etudiant-view.component.scss']
})
export class QuizEtudiantViewComponent implements OnInit {

  cols: any[];
  private _numero = 0;


  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get quizEtudiantList(): QuizEtudiant {
    return this.service.quizEtudiantList;
  }
  set quizEtudiantList(value: QuizEtudiant) {
    this.service.quizEtudiantList = value;
  }

  get etudiantsClassroom(): Array<EtudiantClassRoom> {
    return this.service.etudiantsClassroom;
  }

  set etudiantsClassroom(value: Array<EtudiantClassRoom>) {
    this.service.etudiantsClassroom = value;
  }

  get quizsClassroom(): Array<QuizClassRoom> {
    return this.service.quizsClassroom;
  }

  set quizsClassroom(value: Array<QuizClassRoom>) {
    this.service.quizsClassroom = value;
  }

  get selectedQuiz(): Quiz {
    return this.service.selectedQuiz;
  }

  set selectedQuiz(value: Quiz) {
    this.service.selectedQuiz = value;
  }

  get viewDialogQuiz(): boolean {
    return this.service.viewDialogQuiz;
  }

  set viewDialogQuiz(value: boolean) {
    this.service.viewDialogQuiz = value;
  }

  get selectedQuizClassroom(): QuizClassRoom {
    return this.service.selectedQuizClassroom;
  }

  set selectedQuizClassroom(value: QuizClassRoom) {
    this.service.selectedQuizClassroom = value;
  }

  get reponsesEtudiantList(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiantList;
  }

  set reponsesEtudiantList(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiantList = value;
  }

  get questionView(): Question {
    return this.service.questionView;
  }

  set questionView(value: Question) {
    this.service.questionView = value;
  }

  get reponsesView(): Array<Reponse> {
    return this.service.reponsesView;
  }

  set reponsesView(value: Array<Reponse>) {
    this.service.reponsesView = value;
  }

  get reponsesEtudiantView(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiantView;
  }

  set reponsesEtudiantView(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiantView = value;
  }

  get items(): Array<Question> {
    return this.service.items;
  }

  set items(value: Array<Question>) {
    this.service.items = value;
  }

  get correctAnswerView(): Array<Reponse> {
    return this.service.correctAnswerView;
  }

  set correctAnswerView(value: Array<Reponse>) {
    this.service.correctAnswerView = value;
  }

  constructor(private service: QuizEtudiantService, private login: LoginService) { }

  public hideViewDialog() {
    this.viewDialogQuiz = false;
  }

  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'note', header: 'Note'},
      {field: 'ref', header: 'Reference'},
      {field: 'quizEtudiant', header: 'Quiz Etudiant'},
      {field: 'reponse', header: 'Reponse'}
    ];
  }

  public next()
  {
    this.service.findAllQuestions().subscribe(
        data => {
          this.numero = this.numero + 1;
          if(this.numero == 1)
          {
            document.getElementById('btn-previous').style.visibility = 'hidden';
          }
          else
          {
            document.getElementById('btn-previous').style.visibility = 'visible';
          }
          if(this.numero == data.length)
          {
            document.getElementById('btn-next').style.visibility = 'hidden';
          }
          else
          {
            document.getElementById('btn-next').style.visibility = 'visible';
          }
          this.service.findQuestionByNumero(this.numero).subscribe(
              data => {
                this.questionView = data;
              }
          );
          this.service.findReponseByNumero(this.numero).subscribe(
              data => {
                this.reponsesView = data;
              }
          );
          this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
              data => {
                this.quizEtudiantList = data;
                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                      this.reponsesEtudiantList = data;
                      console.log(this.reponsesEtudiantList);
                      console.log(this.reponsesEtudiantList.length);
                      for(let i = 0 ; i < this.reponsesEtudiantList.length ; i++)
                      {
                        console.log(this.reponsesEtudiantList);
                        if(this.reponsesEtudiantList[i].note > 0)
                        {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#a5ee8f';
                        }
                        else {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#ee8f8f';
                          this.service.findCorrectAnswersByNumero(this.numero).subscribe(
                              data => {
                                this.correctAnswerView = data;
                                for (let j = 0; j < this.correctAnswerView.length; j++)
                                {
                                  document.getElementById('rep-' + this.correctAnswerView[i].ref).style.backgroundColor = '#a5ee8f';
                                }
                              }
                          );
                        }
                      }
                    }
                );
              });
        }
  );
  }

  public previous()
  {
    this.service.findAllQuestions().subscribe(
        data => {
          this.numero = this.numero - 1;
          if (this.numero == 1) {
            document.getElementById('btn-previous').style.visibility = 'hidden';
          } else {
            document.getElementById('btn-previous').style.visibility = 'visible';
          }
          if(this.numero == data.length)
          {
            document.getElementById('btn-next').style.visibility = 'hidden';
          }
          else
          {
            document.getElementById('btn-next').style.visibility = 'visible';
          }
          this.service.findQuestionByNumero(this.numero).subscribe(
              data => {
                this.questionView = data;
              }
          );
          this.service.findReponseByNumero(this.numero).subscribe(
              data => {
                this.reponsesView = data;
              }
          );
          this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
              data => {
                this.quizEtudiantList = data;
                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                      this.reponsesEtudiantList = data;
                      console.log(this.reponsesEtudiantList);
                      console.log(this.reponsesEtudiantList.length);
                      for(let i = 0 ; i < this.reponsesEtudiantList.length ; i++)
                      {
                        console.log(this.reponsesEtudiantList);
                        if(this.reponsesEtudiantList[i].note > 0)
                        {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#a5ee8f';
                        }
                        else {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#ee8f8f';
                          this.service.findCorrectAnswersByNumero(this.numero).subscribe(
                              data => {
                                this.correctAnswerView = data;
                                for (let j = 0; j < this.correctAnswerView.length; j++)
                                {
                                  document.getElementById('rep-' + this.correctAnswerView[i].ref).style.backgroundColor = '#a5ee8f';
                                }
                              }
                          );
                        }
                      }
                    }
                );
              });
        });
  }
  public findAllQuestions()
  {
    this.service.findAllQuestions().subscribe(
        data => {
          this.items = data;
        }
    );
    this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
        data => {
          this.quizEtudiantList = data;
          this.service.findReponseEtudiant(this.quizEtudiantList).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {
                this.reponsesEtudiantList = data;
                for(let i=0 ; i < this.reponsesEtudiantList.length ; i++)
                {
                  if(this.reponsesEtudiantList[i].note > 0)
                  {
                    document.getElementById('btn-' + this.reponsesEtudiantList[i].reponse.question.ref).style.backgroundColor = '#a5ee8f';
                  }
                  else {
                    document.getElementById('btn-' + this.reponsesEtudiantList[i].reponse.question.ref).style.backgroundColor = '#ee8f8f';
                  }
                }
              }
          );
        });
  }

  public choose(numero: number)
  {
    this.service.findAllQuestions().subscribe(
        data => {
          this.numero = numero;
          if(this.numero == 1)
          {
            document.getElementById('btn-previous').style.visibility = 'hidden';
          }
          else
          {
            document.getElementById('btn-previous').style.visibility = 'visible';
          }
          if(this.numero == data.length)
          {
            document.getElementById('btn-next').style.visibility = 'hidden';
          }
          else
          {
            document.getElementById('btn-next').style.visibility = 'visible';
          }
          this.service.findQuestionByNumero(this.numero).subscribe(
              data => {
                this.questionView = data;
              }
          );
          this.service.findReponseByNumero(this.numero).subscribe(
              data => {
                this.reponsesView = data;
              }
          );
          this.service.findQuizEtudiant(this.login.etudiant, this.service.selectedQuizClassroom.quiz).subscribe(
              data => {
                this.quizEtudiantList = data;
                this.service.findReponseEtudiantByNumero(this.quizEtudiantList, this.numero).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                      this.reponsesEtudiantList = data;
                      console.log(this.reponsesEtudiantList);
                      console.log(this.reponsesEtudiantList.length);
                      for(let i = 0 ; i < this.reponsesEtudiantList.length ; i++)
                      {
                        console.log(this.reponsesEtudiantList);
                        if(this.reponsesEtudiantList[i].note > 0)
                        {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#a5ee8f';
                        }
                        else {
                          document.getElementById('rep-' + this.reponsesEtudiantList[i].reponse.ref).style.backgroundColor = '#ee8f8f';
                          this.service.findCorrectAnswersByNumero(this.numero).subscribe(
                              data => {
                                this.correctAnswerView = data;
                                for (let j = 0; j < this.correctAnswerView.length; j++)
                                {
                                  document.getElementById('rep-' + this.correctAnswerView[i].ref).style.backgroundColor = '#a5ee8f';
                                }
                              }
                          );
                        }
                      }
                    }
                );
              });
        }
    );
  }

  ngOnInit(): void {
    this.next();
    this.findAllQuestions();
    this.initCol();

  }

}
