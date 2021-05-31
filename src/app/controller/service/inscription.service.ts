import {Inscription} from '../model/inscription.model';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Prof} from '../model/prof.model';
import {EtatInscription} from '../model/etat-inscription.model';

import {EtudiantVo} from '../model/etudiant-vo.model';
import { Centre } from '../model/centre.model';
import { Parcours } from '../model/parcours.model';
import {Etudiant} from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url = environment.baseUrl + 'inscription/';
  private _items: Array<Inscription>;
  private _selected: Inscription;
  private _selectes: Array<Inscription>;
  private  _etatInscription: EtatInscription;
  private _etudiant: Etudiant;
  private _selectedetudiant: Etudiant;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _index: number;
  private _etudiantVo: EtudiantVo;
  private _inscription: Inscription;
  private _valideDialog: boolean;
  private _prof: Array<Prof>;
  private _etatinscriptionslist: Array<EtatInscription>;
  private _centreList: Array<Centre>;
  private _parcoursList: Array<Parcours>;

  // constructor(private messageService: MessageService,
  //             private confirmationService: ConfirmationService, private http: HttpClient) {
  // }
  constructor(private http: HttpClient) {
  }

  get selectedetudiant(): Etudiant {
    return this._selectedetudiant;
  }

  set selectedetudiant(value: Etudiant) {
    this._selectedetudiant = value;
  }

  get parcoursList(): Array<Parcours> {
    return this._parcoursList;
  }

  set parcoursList(value: Array<Parcours>) {
    this._parcoursList = value;
  }

  get centreList(): Array<Centre> {
    return this._centreList;
  }

  set centreList(value: Array<Centre>) {
    this._centreList = value;
  }

  public findAllCentre(){
    this.http.get<Array<Centre>>( 'http://localhost:8036/learn/centre/').subscribe(
        data => {
          console.log(data);
          this.centreList = data;
        }, error => {
          console.log(error);
        }
    );
  }

  get etatinscriptionslist(): Array<EtatInscription> {
    return this._etatinscriptionslist;
  }

  set etatinscriptionslist(value: Array<EtatInscription>) {
    this._etatinscriptionslist = value;
  }

  public findAllProf(){
    this.http.get<Array<Prof>>( 'http://localhost:8036/centre/prof/').subscribe(
        data => {
          this.prof = data;
        }, error => {
          console.log(error);
        }
    );
  }
  public findAllParcours(): Observable<Array<Parcours>> {
    return this.http.get< Array<Parcours> >('http://localhost:8036/E-learning/parcours/');
  }
  public findAllEtat(){
    this.http.get<Array<EtatInscription>>( 'http://localhost:8036/learn/etatInscription/').subscribe(
        data => {
          this.etatinscriptionslist = data;
        }, error => {
          console.log(error);
        }
    );
  }
  get valideDialog(): boolean {
    return this._valideDialog;
  }

  set valideDialog(value: boolean) {
    this._valideDialog = value;
  }

  public update(index: number, inscription: Inscription) {

    this._index = index;
  }
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get inscription(): Inscription {
    if (this._inscription == null){
      this._inscription = new Inscription();
    }
    return this._inscription;
  }
  public valider(): void {
    this.http.put('http://localhost:8036/learn/inscription/', this.inscription).subscribe(
        data =>  {if (data >= 0){
          this.findAll();
          console.log('succes update inscription');
        }}, eror => {
          console.log('error update inscription');
        }
    );
    this._inscription = null;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set inscription(value: Inscription) {
    this._inscription = value;
  }

  get etudiantVo(): EtudiantVo {
    return this._etudiantVo;
  }

  set etudiantVo(value: EtudiantVo) {
    this._etudiantVo = value;
  }

  public findAll(): Observable<Array<Inscription>> {
    return this.http.get<Array<Inscription>>(this.url);
  }

  public save(): Observable<Inscription> {
    return this.http.post<Inscription>(this.url, this.selected);
  }

  public edit(): Observable<Inscription> {
    return this.http.put<Inscription>(this.url, this.selected);
  }

  public deleteByNumeroInscription(): Observable<number> {
    return this.http.delete<number>(this.url + 'numeroInscription/' + this.selected.numeroInscription);
  }

  public deleteMultipleByNumeroInscription(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-numeroInscription' , this.selectes);
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

  get items(): Array<Inscription> {
    return this._items;
  }

  set items(value: Array<Inscription>) {
    this._items = value;
  }

  get selected(): Inscription {
    return this._selected;
  }

  set selected(value: Inscription) {
    this._selected = value;
  }

  get selectes(): Array<Inscription> {
    return this._selectes;
  }

  set selectes(value: Array<Inscription>) {
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


  get prof(): Array<Prof> {
    // @ts-ignore
    return this._prof;
  }

  set prof(value: Array<Prof>) {
    // @ts-ignore
    this._prof = value;
  }

  get etatInscription(): EtatInscription {
    return this._etatInscription;
  }

  set etatInscription(value: EtatInscription) {
    this._etatInscription = value;
  }

  get etudiant(): Etudiant {
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }
}
