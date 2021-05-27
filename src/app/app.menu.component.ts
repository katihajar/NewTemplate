import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import {LoginService} from './controller/service/login.service';
import {Prof} from './controller/Model/prof.model';
import {Admin} from './controller/Model/admin.model';
import {Etudiant} from './controller/Model/etudiant.model';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent, private service: LoginService) { }

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
    ngOnInit() {

        console.log(this.prof);
        console.log(this.admin);
        console.log(this.etudiant);
        if(this.prof != null)
        {
            this.model = [];
            console.log('hada prof');
            this.model = [

                        {label: 'Recommend A teacher', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/recommend']},
                        {label: 'Home', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/home']},
                        {label: 'Salary', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/salary']},
                        {label: 'Parcours', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/courses']},
                        {label: 'Classes', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/classes']},
                        {label: 'Schedule', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/view/schedule']},
                        {label: 'NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['pages/news-teacher']},
                        {label: 'FAQ', icon: 'pi pi-fw pi-calendar-times', routerLink: ['pages/faq-teacher']},


            ];
        }
        else if(this.etudiant != null){
            this.model = [];
            this.model = [
                {label: 'Courses ', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/etudiantcours']},
            ];
        }


        else if(this.admin != null)
        {
            this.model = [];
            this.model = [
                {label: 'Formular Inscriptions', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/Inscrit']},
                {label: 'Inscriptions List', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/inscription']},
                {label: 'Student List', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/etudiant']},
                {label: 'Quiz-Create', icon: 'pi pi-fw pi-pencil', routerLink: ['/view/quiz-create']},
                {label: 'Manage Parcours', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/parcours']},
                {label: 'FAQ ANSWER', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/faq-admin']},
                {label: 'CREATE NEWS', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/pages/news-admin']},
            ];
        }

    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
