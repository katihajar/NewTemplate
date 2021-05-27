import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../controller/service/login.service';
import {Prof} from '../controller/Model/prof.model';
import {Admin} from '../controller/Model/admin.model';
import {Etudiant} from '../controller/Model/etudiant.model';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: LoginService) {

  }
  private _role: string;
  private _login: string;
  private _password: string;
  private _routeurLink: string;
  private _viewDialogRole: boolean;


  get viewDialogRole(): boolean {
    return this._viewDialogRole;
  }

  set viewDialogRole(value: boolean) {
    this._viewDialogRole = value;
  }

  get routeurLink(): string {
    return this._routeurLink;
  }

  set routeurLink(value: string) {
    this._routeurLink = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get prof(): Prof {
    return this.service.prof;
  }

  set prof(value: Prof) {
    this.service.prof = value;
  }

  get admin(): Admin {
    return this.service.admin;
  }

  set admin(value: Admin) {
    this.service.admin = value;
  }

  get etudiant(): Etudiant {
    return this.service.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }

  public findPersonne() {
    // tslint:disable-next-line:triple-equals
    if (this.role == 'prof') {
      this.service.findProf(this.login, this.password).subscribe(
          data => {
            this.prof = data;
            // this.routeurLink = '[\'/view/schedule\']';
            console.log(this.prof);
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Commandes Deleted',
              life: 3000
            });
          });
    }
    // tslint:disable-next-line:triple-equals
    else if (this.role == 'etudiant')
    {
      this.service.findEtudiant(this.login, this.password).subscribe(
          data => {
            this.etudiant = data;
            console.log(this.etudiant);
          });
    }
    // tslint:disable-next-line:triple-equals
    else if (this.role == 'admin')
    {
      this.service.findAdmin(this.login, this.password).subscribe(
          data => {
            this.admin = data;
            console.log(this.admin);
          });
    }
  }
  public hideViewDialog(){
    this.viewDialogRole = false;
  }
  public openVideDialog() {
    this.viewDialogRole = true;
  }
}
