import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Section} from '../Model/section.model';
import {Vocabulary} from '../Model/vocabulary.model';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor(private http: HttpClient) { }
    private _sectionSelected: Section;
    private _sectionSelected2: Section;
    private _selected: Vocabulary;
    private _selected2: Vocabulary;
private _items: Array<Vocabulary>;
    private _submitted: boolean;
    private _numVocabulary = 1;
    private _idSection: number;
    private _nombreVocab: number;


    get nombreVocab(): number {
        return this._nombreVocab;
    }

    set nombreVocab(value: number) {
        this._nombreVocab = value;
    }

    get idSection(): number {
        return this._idSection;
    }

    set idSection(value: number) {
        this._idSection = value;
    }

    get numVocabulary(): number {
        return this._numVocabulary;
    }

    set numVocabulary(value: number) {
        this._numVocabulary = value;
    }

    get selected2(): Vocabulary {
        if ( this._selected2 == null){
            this._selected2 = new Vocabulary();
        }
        return this._selected2;
    }

    set selected2(value: Vocabulary) {
        this._selected2 = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get items(): Array<Vocabulary> {
        if (this._items == null){
            this._items = new Array<Vocabulary>();
        }
        return this._items;
    }

    set items(value: Array<Vocabulary>) {
        this._items = value;
    }

    get selected(): Vocabulary {
        if (this._selected == null){
            this._selected = new Vocabulary();
        }

        return this._selected;
    }

    set selected(value: Vocabulary) {
        this._selected = value;
    }


    public save(): Observable<Vocabulary>{
        return this.http.post<Vocabulary>('http://localhost:8036/learn/vocabulary/save/', this.selected);
    }
    public findAll(): Observable<Array<Vocabulary>> {
        return this.http.get<Array<Vocabulary>>('http://localhost:8036/learn/vocabulary/');
    }
    public findAllVocabSection(): Observable<Array<Vocabulary>> {
        return this.http.get<Array<Vocabulary>>('http://localhost:8036/learn/vocabulary/section/id/' + this.idSection );
    }
    public findVocabularybySection(): Observable<Array<Vocabulary>> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Array<Vocabulary>>('http://localhost:8036/learn/vocabulary/numero/' + this.numVocabulary + '/section/id/' + this.idSection);
    }
public findByFirstNumero(): Observable<Vocabulary>{
        return this.http.get<Vocabulary>('http://localhost:8036/learn/vocabulary/numero/1');
}
public findByNextNumero(): Observable<Vocabulary>{
        this.numVocabulary = this.numVocabulary + 1;
        return this.http.get<Vocabulary>('http://localhost:8036/learn/vocabulary/numero/' + this.numVocabulary);

}
    public findByNextNumeroSection(): Observable<Array<Vocabulary>>{
        this.numVocabulary = this.numVocabulary + 1;
        // tslint:disable-next-line:max-line-length
        return this.http.get<Array<Vocabulary>>('http://localhost:8036/learn/vocabulary/numero/' + this.numVocabulary + '/section/id/' + this.idSection);
    }
public findByRef(selected: Vocabulary): Observable<Vocabulary>{
        return this.http.get<Vocabulary>('http://localhost:8036/learn/vocabulary/ref/' + selected.ref);
}
    public edit(): Observable<Vocabulary> {
        return this.http.put<Vocabulary>('http://localhost:8036/learn/vocabulary/', this.selected);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>('http://localhost:8036/learn/vocabulary/ref/' + this.selected.ref);
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

    get sectionSelected2(): Section {
        if (this._sectionSelected2 == null){
            this._sectionSelected2 =  new Section();
        }
        return this._sectionSelected2;
    }

    set sectionSelected2(value: Section) {
        this._sectionSelected2 = value;
    }
    get sectionSelected(): Section {
        if (this._sectionSelected == null){
            this._sectionSelected =  new Section();
        }
        return this._sectionSelected;
    }

    set sectionSelected(value: Section) {
        this._sectionSelected = value;
    }
}
