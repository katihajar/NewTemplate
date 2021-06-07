import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SessionCours} from '../model/session-cours.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionCoursService {

private url = environment.baseUrl + 'session/';
  private _items: Array<SessionCours>;
  private _selected: SessionCours;
  private _selectes: Array<SessionCours>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  // constructor(private messageService: MessageService,
  //             private confirmationService: ConfirmationService, private http: HttpClient) {
  // }
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<SessionCours>> {
    return this.http.get<Array<SessionCours>>(this.url);
  }

  public save(): Observable<SessionCours> {
    return this.http.post<SessionCours>(this.url, this.selected);
  }

  public edit(): Observable<SessionCours> {
    return this.http.put<SessionCours>(this.url, this.selected);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'reference/' + this.selected.reference);
  }

  public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selectes);
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }

  get items(): Array<SessionCours> {
    if (this._items == null){
      this._items = new Array<SessionCours>();
    }
    return this._items;
  }

  set items(value: Array<SessionCours>) {
    this._items = value;
  }

  get selected(): SessionCours {
    if (this._selected == null){
      this._selected = new SessionCours();
    }
    return this._selected;
  }

  set selected(value: SessionCours) {
    this._selected = value;
  }

  get selectes(): Array<SessionCours> {
    if (this._selectes == null){
      this._selectes = new Array<SessionCours>();
    }
    return this._selectes;
  }

  set selectes(value: Array<SessionCours>) {
    this._selectes = value;
  }


  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
}
