/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecommendTeacher } from '../model/recommend-teacher.model';
import { Observable } from 'rxjs';
import {Prof} from '../model/prof.model';
import {Etudiant} from '../model/etudiant.model';
import {RecommendTeacherVo} from '../model/recommend-teacher-vo.model';
import {SalaryVo} from '../model/salary-vo.model';


@Injectable({
  providedIn: 'root'
})
export class RecommendTeacherService {
  private url = environment.baseUrl + 'teacher/';
  // private _recommendTeacher: RecommendTeacher;
  private _selected: RecommendTeacher;
  private _items: Array<RecommendTeacher>;
  private _itemsprof: Array<Prof>;
  private _itemsetudiant: Array<Etudiant>;
  private _itemsStudent: Array<Etudiant>;
  private _prof: Prof;
  private _item: Array<RecommendTeacher>;
  private _itemsRecommend: Array<RecommendTeacher>;
  private _selectesRecommend: Array<RecommendTeacher>;
  private _recommendVo: RecommendTeacherVo;
  private _selectes: Array<RecommendTeacher>;
  private _selectedsalaryVo: SalaryVo;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _createDialogEtud: boolean;

  constructor(private http: HttpClient) { }
  findByCriteria(): Observable<Array<RecommendTeacher>>{
    return this.http.post<Array<RecommendTeacher>>('http://localhost:8036/learn/teacher/search', this.recommendVo);
  }

  get itemsRecommend(): Array<RecommendTeacher> {
    if ( this._itemsRecommend == null){
      this._itemsRecommend = new Array<RecommendTeacher>();
    }
    return this._itemsRecommend;
  }

  set itemsRecommend(value: Array<RecommendTeacher>) {
    this._itemsRecommend = value;
  }

  get selectesRecommend(): Array<RecommendTeacher> {
    if (this._selectesRecommend == null){
      this._selectesRecommend = new Array<RecommendTeacher>();
    }
    return this._selectesRecommend;
  }

  set selectesRecommend(value: Array<RecommendTeacher>) {
    this._selectesRecommend = value;
  }

  get selectedsalaryVo(): SalaryVo {
    if (this._selectedsalaryVo ==  null){
      this._selectedsalaryVo = new SalaryVo();
    }
    return this._selectedsalaryVo;
  }

  set selectedsalaryVo(value: SalaryVo) {
    this._selectedsalaryVo = value;
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

  get itemsStudent(): Array<Etudiant> {
    if (this._itemsStudent == null){
      this._itemsStudent = new Array<Etudiant>();
    }
    return this._itemsStudent;
  }

  set itemsStudent(value: Array<Etudiant>) {
    this._itemsStudent = value;
  }

  get itemsetudiant(): Array<Etudiant> {
    if (this._itemsetudiant == null){
      this._itemsetudiant = new Array<Etudiant>();
    }
    return this._itemsetudiant;
  }

  set itemsetudiant(value: Array<Etudiant>) {
    this._itemsetudiant = value;
  }

  get itemsprof(): Array<Prof> {
    if (this._itemsprof == null){
      this._itemsprof = new Array<Prof>();
    }
    return this._itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this._itemsprof = value;
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
    if (this._items == null){
      this._items = new Array<RecommendTeacher>();
    }
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
    if (this._selectes == null){
      this._selectes = new Array<RecommendTeacher>();
    }
    return this._selectes;
  }

  set selectes(value: Array<RecommendTeacher>) {
    this._selectes = value;
  }
  public save(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/teacher/', this.selected);
  }

  get prof(): Prof {
    if (this._prof == null){
      this._prof = new Prof();
    }
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
    return this.http.get<Array<RecommendTeacher>>('http://localhost:8036/learn/teacher/Prof/id/' + this.selected.prof.id);
  }


  get item(): Array<RecommendTeacher> {
    if (this._item == null){
      this._item = new Array<RecommendTeacher>();
    }
    return this._item;
  }

  set item(value: Array<RecommendTeacher>) {
    this._item = value;
  }
  public findAllProf(): Observable<Array<Prof>> {
    return  this.http.get< Array<Prof> >('http://localhost:8036/learn/prof/');
  }
  public findAllRecommend(): Observable<Array<RecommendTeacher>> {
    return  this.http.get< Array<RecommendTeacher> >('http://localhost:8036/learn/teacher/');
  }
  public findAllEtudiantByProf(): Observable<Array<Etudiant>> {
    return  this.http.get< Array<Etudiant> >('http://localhost:8036/learn/etudiant/prof/id/' +  this.prof.id);
  }
}
