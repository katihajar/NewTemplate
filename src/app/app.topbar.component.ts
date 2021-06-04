import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import {MenuItem} from 'primeng/api';
import {style} from '@angular/animations';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    items: MenuItem[];
    constructor(public app: AppComponent, public appMain: AppMainComponent) {}
    public menu(){
        this.items = [
            {
                style: {
                    background: '#026da7',
                    color: '#f6f8f8',
                },
                label: 'Space Admin',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-admin']
                    },
                    {
                        label: 'Sign up',
                        icon: 'pi pi-fw pi-trash',
                        routerLink: ['/inscriptionAdmin']
                    },
                ]
            },
            {
                style: {
                    background: '#026da7',
                    color: '#DCF7F8'
                },
                label: 'Space Teacher',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-prof']
                    },
                    {
                        label: 'Sign up',
                        icon: 'pi pi-fw pi-align-right',
                        routerLink: ['/inscriptionTeacher']
                    },
                ]
            },
            {
                style: {
                    background: '#026da7',
                    color: '#DCF7F8'
                },
                label: 'Space Student',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-etudiant'],
                    },
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-minus',
                        routerLink: ['/inscriptionEtudiant'],
                    },
                ]
            },

        ];
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        // @ts-ignore
        this.items = [
            {
                style: {
                    background: '#026da7',
                    color: '#f6f8f8',
                },
                label: 'Space Admin',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-admin']
                    },
                    {
                        label: 'Sign up',
                        icon: 'pi pi-fw pi-trash',
                        routerLink: ['/inscriptionAdmin']
                    },
                ]
            },
            {
                style: {
                    background: '#026da7',
                    color: '#DCF7F8'
                },
                label: 'Space Teacher',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-prof']
                    },
                    {
                        label: 'Sign up',
                        icon: 'pi pi-fw pi-align-right',
                        routerLink: ['/inscriptionTeacher']
                    },
                ]
            },
            {
                style: {
                    background: '#026da7',
                    color: '#DCF7F8'
                },
                label: 'Space Student',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['/pages/login-etudiant'],
                    },
                    {
                        label: 'Sign in',
                        icon: 'pi pi-fw pi-user-minus',
                        routerLink: ['/inscriptionEtudiant'],
                    },
                ]
            },

        ];
    }
}
