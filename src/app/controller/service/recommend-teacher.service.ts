/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecommendTeacher } from '../Model/recommend-teacher.model';
import { Observable } from 'rxjs';
import {Prof} from '../Model/prof.model';
import {Etudiant} from '../Model/etudiant.model';
import {RecommendTeacherVo} from '../Model/recommend-teacher-vo.model';


@Injectable({
  providedIn: 'root'
})
export class RecommendTeacherService {
  private url = environment.baseUrl + 'teacher/';
  private _recommendTeacher: RecommendTeacher;
  private _selected: RecommendTeacher;
  private _items: Array<RecommendTeacher>;
  private _itemsprof: Array<Prof>;
  private _itemsetudiant: Array<Etudiant>;
  private _prof: Prof;
  private _item: Array<RecommendTeacher>;
  private _recommendVo: RecommendTeacherVo;
  private _selectes: Array<RecommendTeacher>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _createDialogEtud: boolean;

  constructor(private http: HttpClient) { }
  findByCriteria(){
    console.log(this.recommendVo);
    this.http.post<Array<RecommendTeacher>>('http://localhost:8036/learn/teacher/search', this.recommendVo).subscribe(
        data => {
          console.log(data);
          this.items = data;
        }, error => {
          console.log('la fonction ne fonctionne pas');
        }
    );
  }

  get createDialogEtud(): boolean {
    return this._createDialogEtud;
  }

  set createDialogEtud(value: boolean) {
    this._createDialogEtud = value;
  }

  get recommendVo(): RecommendTeacherVo {
    if (this._recommendVo == null){
      this._recommendVo = new RecommendTeacherVo();
    }
    return this._recommendVo;
  }

  set recommendVo(value: RecommendTeacherVo) {
    this._recommendVo = value;
  }

  get itemsetudiant(): Array<Etudiant> {
    return this._itemsetudiant;
  }

  set itemsetudiant(value: Array<Etudiant>) {
    this._itemsetudiant = value;
  }

  get itemsprof(): Array<Prof> {
    return this._itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this._itemsprof = value;
  }

  get recommendTeacher(): RecommendTeacher {
    if (this._recommendTeacher == null){
      this._recommendTeacher = new RecommendTeacher();
    }
    return this._recommendTeacher;
  }

  set recommendTeacher(value: RecommendTeacher) {
    this._recommendTeacher = value;
  }

  get selected(): RecommendTeacher {
    if (this._selected == null){
      this._selected = new RecommendTeacher();
    }
    return this._selected;
  }

  set selected(value: RecommendTeacher) {
    this._selected = value;
  }

  get items(): Array<RecommendTeacher> {
    return this._items;
  }

  set items(value: Array<RecommendTeacher>) {
    this._items = value;
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

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get selectes(): Array<RecommendTeacher> {
    return this._selectes;
  }

  set selectes(value: Array<RecommendTeacher>) {
    this._selectes = value;
  }
  public save(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/teacher/', this.selected);
  }

  get prof(): Prof {
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
  }
  public edit(): Observable<RecommendTeacher> {
    return this.http.put<RecommendTeacher>(this.url, this.selected);
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


  public findAll(): Observable<Array<RecommendTeacher>> {
    return this.http.get<Array<RecommendTeacher>>('http://localhost:8036/learn/teacher/');
  }


  get item(): Array<RecommendTeacher> {
    return this._item;
  }

  set item(value: Array<RecommendTeacher>) {
    this._item = value;
  }
  public findAllProf(): Observable<Array<Prof>> {
    return  this.http.get< Array<Prof> >('http://localhost:8036/learn/prof/');
  }
  public findAllEtudiantByProf(): Observable<Array<Etudiant>> {
    return  this.http.get< Array<Etudiant> >('http://localhost:8036/learn/etudiant/prof/id/15');
  }
}
