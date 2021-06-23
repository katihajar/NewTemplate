import { Injectable } from '@angular/core';
import {Faq} from '../Model/faq.model';
import {FaqType} from '../Model/faq-type.model';
import {FaqProf} from '../model/faq-prof.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FaqEtudiant} from '../model/faq-etudiant.modele';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private url = 'http://localhost:8036/learn/';
  private _items: Array<Faq>;
  private _selected: Faq;
  private _itemsType: Array<FaqType>;
  private _selectedType: FaqType;
  private _id: number;
  private _viewDialogFaqContact: boolean;
  private _viewDialogFaqEtudiantContact: boolean;
  private _selectedFaqProf: FaqProf;
  private _itemsFaqProf: Array<FaqProf>;
  private _selectedFaqEtudiant: FaqEtudiant;
  private _itemsFaqEtudiant: Array<FaqEtudiant>;


  get viewDialogFaqEtudiantContact(): boolean {
    return this._viewDialogFaqEtudiantContact;
  }

  set viewDialogFaqEtudiantContact(value: boolean) {
    this._viewDialogFaqEtudiantContact = value;
  }

  get selectedFaqEtudiant(): FaqEtudiant {
    if(this._selectedFaqEtudiant == null)
    {
      this._selectedFaqEtudiant = new FaqEtudiant();
    }
    return this._selectedFaqEtudiant;
  }

  set selectedFaqEtudiant(value: FaqEtudiant) {
    this._selectedFaqEtudiant = value;
  }

  get itemsFaqEtudiant(): Array<FaqEtudiant> {
    if(this._itemsFaqEtudiant == null)
    {
      this._itemsFaqEtudiant = new Array<FaqEtudiant>();
    }
    return this._itemsFaqEtudiant;
  }

  set itemsFaqEtudiant(value: Array<FaqEtudiant>) {
    this._itemsFaqEtudiant = value;
  }

  get selectedFaqProf(): FaqProf {
    if(this._selectedFaqProf == null)
    {
      this._selectedFaqProf = new FaqProf();
    }
    return this._selectedFaqProf;
  }

  set selectedFaqProf(value: FaqProf) {
    this._selectedFaqProf = value;
  }

  get itemsFaqProf(): Array<FaqProf> {
    if(this._itemsFaqProf == null)
    {
      this._itemsFaqProf = new Array<FaqProf>();
    }
    return this._itemsFaqProf;
  }

  set itemsFaqProf(value: Array<FaqProf>) {
    this._itemsFaqProf = value;
  }

  get viewDialogFaqContact(): boolean {
    return this._viewDialogFaqContact;
  }

  set viewDialogFaqContact(value: boolean) {
    this._viewDialogFaqContact = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get items(): Array<Faq> {
    if(this._items == null)
    {
      this._items = new Array<Faq>();
    }
    return this._items;
  }

  set items(value: Array<Faq>) {
    this._items = value;
  }

  get selected(): Faq {
    if(this._selected == null)
    {
      this._selected = new Faq();
    }
    return this._selected;
  }

  set selected(value: Faq) {
    this._selected = value;
  }

  get itemsType(): Array<FaqType> {
    if(this._itemsType == null)
    {
      this._itemsType = new Array<FaqType>();
    }
    return this._itemsType;
  }

  set itemsType(value: Array<FaqType>) {
    this._itemsType = value;
  }

  get selectedType(): FaqType {
    if(this._selectedType == null)
    {
      this._selectedType = new FaqType();
    }
    return this._selectedType;
  }

  set selectedType(value: FaqType) {
    this._selectedType = value;
  }

  public findTypes(destinataire): Observable<Array<FaqType>> {
    return this.http.get<Array<FaqType>>(this.url + 'faqType/destinataire/' + destinataire);
  }

  public findFirstFaq(): Observable<Array<Faq>> {
    return this.http.get<Array<Faq>>(this.url + 'faq/faqType/ref/ft1');
  }

  public findByFaqType(id: number): Observable<Array<Faq>> {
    return this.http.get<Array<Faq>>(this.url + 'faq/faqType/id/' + id);
  }

  public findFaqProf(): Observable<Array<FaqProf>>
  {
    return this.http.get<Array<FaqProf>>(this.url + 'faqProf/');
  }

  public saveFaqProf(faqProf: FaqProf): Observable<FaqProf>
  {
    return this.http.post<FaqProf>(this.url + 'faqProf/' , faqProf);
  }

  public findMyQuestions(prof: number, type: number): Observable<Array<FaqProf>>
  {
    return this.http.get<Array<FaqProf>>(this.url + 'faqProf/critere/prof/' + prof + '/type/' + type);
  }
  public updateFaqrof(faqProf: FaqProf): Observable<FaqProf>
  {
    return this.http.put<FaqProf>(this.url + 'faqProf/' , faqProf);
  }

  public findFaqProfById(id: number): Observable<FaqProf> {
    return this.http.get<FaqProf>(this.url + 'faqProf/id/' + id);
  }

  public findFaqProfByLibelle(libelle: string): Observable<FaqProf> {
    return this.http.get<FaqProf>(this.url + 'faqProf/libelle/' + libelle);
  }
  //////////

  public saveFaqEtudiant(faqEtudiant: FaqEtudiant): Observable<FaqProf>
  {
    return this.http.post<FaqProf>(this.url + 'faqEtudiant/' , faqEtudiant);
  }

  public findMyQuestionsEtudiant(etudiant: number, type: number): Observable<Array<FaqEtudiant>>
  {
    return this.http.get<Array<FaqEtudiant>>(this.url + 'faqEtudiant/critere/etudiant/' + etudiant + '/type/' + type);
  }
  public updateFaqEtudiant(faqEtudiant: FaqEtudiant): Observable<FaqProf>
  {
    return this.http.put<FaqProf>(this.url + 'faqEtudiant/' , faqEtudiant);
  }

  public findFaqEtudiantById(id: number): Observable<FaqProf> {
    return this.http.get<FaqProf>(this.url + 'faqEtudiant/id/' + id);
  }

  public findFaqEtudiantByLibelle(libelle: string): Observable<FaqProf> {
    return this.http.get<FaqProf>(this.url + 'faqEtudiant/libelle/' + libelle);
  }
  /*public findByRef(): Observable<FaqType> {
    return this.http.get<FaqType>(this.url + 'ref/' + this.selected.ref);
  }*/

  public save(faq: Faq): Observable<Faq>
  {
    return this.http.post<Faq>(this.url + 'faq/' , faq);
  }
  constructor(private http: HttpClient) { }
}
