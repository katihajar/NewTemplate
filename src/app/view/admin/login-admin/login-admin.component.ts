import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: LoginService) {

  }
  private _role: string;
  private _login: string;
  private _password: string;
  private _correct: boolean;


  get model(): any[] {
    return this.service.model;
  }

  set model(value: any[]) {
    this.service.model = value;
  }

  get correct(): boolean {
    return this._correct;
  }

  set correct(value: boolean) {
    this._correct = value;
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

  public findAdmin()
  {
      this.service.findAdmin(this.login, this.password).subscribe(
          data => {
            this.admin = data;
            this.prof = null;
            this.etudiant = null;
            console.log(this.admin);
            this.correct = true;
            this.model = [
                  {label: 'Manage Parcours', icon: 'pi pi-fw pi-table', routerLink: ['/pages/parcours']},
                  {label: 'Inscriptions List', icon: 'pi pi-fw pi-check-square', routerLink: ['/view/inscription']},
                  {label: 'Student List', icon: 'pi pi-fw pi-list', routerLink: ['/pages/etudiant']},
                  {label: 'Session Cours', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages/session']},
                  {label: 'Professor', icon: 'pi pi-fw pi-user', routerLink: ['/view/teacherLists']},
                  {label: 'Professor Recommendation', icon: 'pi pi-fw pi-user-plus', routerLink: ['/pages/recommendAdmin']},
                  {label: 'Paiement', icon: 'pi pi-fw pi-wallet', routerLink: ['/pages/paiement']},
                  {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-reply', routerLink: ['/pages/faq-admin']},
                  {label: 'FAQ List', icon: 'pi pi-fw pi-reply', routerLink: ['/pages/faq-admin-list']},
                  {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/news-admin']},
                  {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
            ];
            document.getElementById('log-pass').style.visibility = 'hidden';
          }, error =>
          {
            document.getElementById('log-pass').style.visibility = 'visible';
            this.correct = false;
          });
  }

  public choose()
  {
    document.getElementById('log-pass').style.visibility = 'hidden';
  }

  ngOnInit(): void {
  }

}
