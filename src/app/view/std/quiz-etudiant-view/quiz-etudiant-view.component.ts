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



  ngOnInit(): void {


  }

}
