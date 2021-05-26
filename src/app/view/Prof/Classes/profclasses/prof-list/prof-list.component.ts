import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Prof} from '../../../../../controller/Model/prof.model';
import {ClassRoom} from '../../../../../controller/Model/class-room.model';
import {QuizClassRoom} from '../../../../../controller/Model/quiz-class-room.model';
import {EtudiantClassRoom} from '../../../../../controller/Model/etudiant-class-room.model';
import {ClassRoomService} from '../../../../../controller/service/class-room.service';






@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.scss']
})
export class ProfListComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  public FindClass(profs: Prof) {
    this.selectedprof = profs;
    this.service.afficheClass().subscribe(
        data => {
          this.itemsclassRoom = data;
        });
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'numero', header: 'Numero'},
      {field: 'nom', header: 'Nom'},
      {field: 'prenom', header: 'Prenom'},
      {field: 'etudiantList', header: 'EtudiantList'},
      {field: 'classRoomList', header: 'ClassRoomList'}
    ];
  }
  ngOnInit(): void {
    this.initCol();
    this.service.findAllProf().subscribe(data => this.itemsprof = data);
  }
  get selectedetudiantClassRoom(): EtudiantClassRoom {
    return this.service.selectedetudiantClassRoom;
  }

  set selectedetudiantClassRoom(value: EtudiantClassRoom) {
    this.service.selectedetudiantClassRoom = value;
  }

  get selectedquizClassRoom(): QuizClassRoom {
    return this.service.selectedquizClassRoom;
  }

  set selectedquizClassRoom(value: QuizClassRoom) {
    this.service.selectedquizClassRoom = value;
  }

  get itemsetudiantClassRoom(): Array<EtudiantClassRoom> {
    return this.service.itemsetudiantClassRoom;
  }

  set itemsetudiantClassRoom(value: Array<EtudiantClassRoom>) {
    this.service.itemsetudiantClassRoom = value;
  }

  get itemsquizClassRoom(): Array<QuizClassRoom> {
    return this.service.itemsquizClassRoom;
  }

  set itemsquizClassRoom(value: Array<QuizClassRoom>) {
    this.service.itemsquizClassRoom = value;
  }

  get selectedclassRoom(): ClassRoom {
    return this.service.selectedclassRoom;
  }

  set selectedclassRoom(value: ClassRoom) {
    this.service.selectedclassRoom = value;
  }

  get itemsclassRoom(): Array<ClassRoom> {
    return this.service.itemsclassRoom;
  }

  set itemsclassRoom(value: Array<ClassRoom>) {
    this.service.itemsclassRoom = value;
  }


  get selectedprof(): Prof {
    return this.service.selectedprof;
  }

  set selectedprof(value: Prof) {
    this.service.selectedprof = value;
  }

  get itemsprof(): Array<Prof> {
    return this.service.itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this.service.itemsprof = value;
  }
  get selectesprof(): Array<Prof> {
    return this.service.selectesprof;
  }

  set selectesprof(value: Array<Prof>) {
    this.service.selectesprof = value;
  }
}
