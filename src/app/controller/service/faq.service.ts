import { Injectable } from '@angular/core';
import {Faq} from '../model/faq.model';
import {FaqType} from '../model/faq-type.model';
import {FaqProf} from '../model/faq-prof.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private url = 'http://localhost:8036/learn/';
  private _items: Array<Faq>;
  private _selected: Faq;
  private _itemsType: Array<FaqType>;
  private _selectedType: FaqType;
  private _ref: string;
  private _viewDialogFaqContact: boolean;
  private _selectedFaqProf: FaqProf;
  private _itemsFaqProf: Array<FaqProf>;


  get selectedFaqProf(): FaqProf {
    return this._selectedFaqProf;
  }

  set selectedFaqProf(value: FaqProf) {
    this._selectedFaqProf = value;
  }

  get itemsFaqProf(): Array<FaqProf> {
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

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get items(): Array<Faq> {
    return this._items;
  }

  set items(value: Array<Faq>) {
    this._items = value;
  }

  get selected(): Faq {
    return this._selected;
  }

  set selected(value: Faq) {
    this._selected = value;
  }

  public findFirstFaq(): Observable<Array<Faq>> {
    return this.http.get<Array<Faq>>(this.url + 'faq/faqType/ref/ft1');
  }

  public findByFaqType(ref: string): Observable<Array<Faq>> {
    console.log(ref);
    return this.http.get<Array<Faq>>(this.url + 'faq/faqType/ref/' + ref);
  }

  public findByRef(): Observable<Faq> {
    return this.http.get<Faq>(this.url + 'faq/ref/' + this.selected.ref);
  }


  get itemsType(): Array<FaqType> {
    return this._itemsType;
  }

  set itemsType(value: Array<FaqType>) {
    this._itemsType = value;
  }

  get selectedType(): FaqType {
    return this._selectedType;
  }

  set selectedType(value: FaqType) {
    this._selectedType = value;
  }

  public findAll(): Observable<Array<FaqType>> {
    return this.http.get<Array<FaqType>>(this.url + 'faqType/');
  }

  public findFaqProf(): Observable<Array<FaqProf>>
  {
    return this.http.get<Array<FaqProf>>(this.url + 'faqProf/');
  }

  public saveFaqProf(): Observable<FaqProf>
  {
    return this.http.post<FaqProf>(this.url + 'faqProf/' , this.selectedFaqProf);
  }

  public findFirstFaqProf(): Observable<FaqProf>
  {
    return this.http.get<FaqProf>(this.url + '/faqProf/ref/fp1');
  }

  public findFaqProfByRef(ref: string): Observable<FaqProf>
  {
    return this.http.get<FaqProf>(this.url + '/faqProf/ref/' + ref);
  }

  public updateFaqrof(): Observable<FaqProf>
  {
    return this.http.put<FaqProf>(this.url + 'faqProf/' , this.selectedFaqProf);
  }
  /*public findByRef(): Observable<FaqType> {
    return this.http.get<FaqType>(this.url + 'ref/' + this.selected.ref);
  }*/

  constructor(private http: HttpClient) { }
}
