import { Injectable } from '@angular/core';
import {Etudiant} from '../model/etudiant.model';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { EtudiantVo } from '../model/etudiant-vo.model';
import { Prof } from '../model/prof.model';
import {Parcours} from "../Model/parcours.model";




@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url = environment.baseUrl + 'etudiant/';
  private _selected: Etudiant;
  private _submitted: boolean;
  private _createDialog: boolean;
  private _items: Array<Etudiant>;
  private _selectes: Array<Etudiant>;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _etudiantVo: EtudiantVo;
  private _prof: Array<Prof>;


  constructor(private http: HttpClient) { }


  get prof(): Array<Prof> {
    return this._prof;
  }

  set prof(value: Array<Prof>) {
    this._prof = value;
  }

  findByCriteria(){
    console.log(this.etudiantVo);
    this.http.post<Array<Etudiant>>('http://localhost:8036/learn/etudiant/search', this.etudiantVo).subscribe(
        data => {
          console.log(data);
          this.items = data;
        }, error => {
          console.log('la fonction ne fonctionne pas');
        }
    );
  }

  get etudiantVo(): EtudiantVo {
    if (this._etudiantVo == null){
      this._etudiantVo = new EtudiantVo();
    }
    return this._etudiantVo;
  }
  set etudiantVo(value: EtudiantVo) {
    this._etudiantVo = value;
  }

  public findAll(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(this.url);
  }
  public deleteMultipleByNom(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-nom' , this.selectes);
  }
  public deleteByNom(): Observable<number> {
    return this.http.delete<number>(this.url + 'reference/' + this.selected.nom);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }
  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  public edit(): Observable<Etudiant> {
    return this.http.put<Etudiant>(this.url, this.selected);
  }

  get selectes(): Array<Etudiant> {
    return this._selectes;
  }

  set selectes(value: Array<Etudiant>) {
    this._selectes = value;
  }

  get selected(): Etudiant {
    return this._selected;
  }

  set selected(value: Etudiant) {
    this._selected = value;
  }
  public save(): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.url, this.selected);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get items(): Array<Etudiant> {
    return this._items;
  }

  set items(value: Array<Etudiant>) {
    this._items = value;
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
}
