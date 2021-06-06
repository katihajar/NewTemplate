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
}
