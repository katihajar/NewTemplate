import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClassRoomService} from '../controller/service/class-room.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {
  }
  get submittedProf(): boolean {
    return this.service.submittedProf;
  }

  set submittedProf(value: boolean) {
    this.service.submittedProf = value;
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
}
