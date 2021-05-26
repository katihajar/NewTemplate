import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../Model/news.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = 'http://localhost:8036/learn/news/';
  private _items: Array<News>;
  private _selected: News;
  private _selectes: Array<News>;

  private _createDialogNews: boolean;
  private _editDialogNews: boolean;
  private _viewDialogNews: boolean;
  private _submittedNews: boolean;


  get selectes(): Array<News> {
    return this._selectes;
  }

  set selectes(value: Array<News>) {
    this._selectes = value;
  }

  get createDialogNews(): boolean {
    return this._createDialogNews;
  }

  set createDialogNews(value: boolean) {
    this._createDialogNews = value;
  }

  get editDialogNews(): boolean {
    return this._editDialogNews;
  }

  set editDialogNews(value: boolean) {
    this._editDialogNews = value;
  }

  get submittedNews(): boolean {
    return this._submittedNews;
  }

  set submittedNews(value: boolean) {
    this._submittedNews = value;
  }

  get items(): Array<News> {
    return this._items;
  }

  set items(value: Array<News>) {
    this._items = value;
  }

  get selected(): News {
    return this._selected;
  }

  set selected(value: News) {
    this._selected = value;
  }

  get viewDialogNews(): boolean {
    return this._viewDialogNews;
  }

  set viewDialogNews(value: boolean) {
    this._viewDialogNews = value;
  }

  public findAll(): Observable<Array<News>> {
    return this.http.get<Array<News>>(this.url);
  }

  public findByRef(): Observable<News> {
    return this.http.get<News>(this.url + 'ref/' + this.selected.ref);
  }

  public save(): Observable<News>
  {
    return this.http.post<News>(this.url , this.selected);
  }

  public edit(): Observable<News> {
    return this.http.put<News>(this.url, this.selected);
  }

  public deleteByReference(): Observable<number> {
    return this.http.delete<number>(this.url + 'ref/' + this.selected.ref);
  }

  /*public deleteMultipleByReference(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selectes);
  }*/

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

  constructor(private http: HttpClient) { }
}
