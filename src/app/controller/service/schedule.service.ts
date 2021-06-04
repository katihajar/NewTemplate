import {Injectable} from '@angular/core';
import {ScheduleProf} from "../model/calendrier-prof.model";
import {HttpClient} from "@angular/common/http";
import {ScheduleVo} from "../Model/schedule-vo.model";

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {


    private _selected: ScheduleProf;
    private _items: Array<ScheduleProf>;
    private _selectedVo: ScheduleVo;
    private _itemsVo: Array<ScheduleVo>;
    private _displayBasic: boolean;
    private _events: any[];
    private _options: any;
    private _header: any;
    private _eventDialog: boolean;
    private _changedEvent: any;
    private _clickedEvent = null;
    private _createDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient) {
    }

    get selected(): ScheduleProf {
        return this._selected;
    }

    set selected(value: ScheduleProf) {
        this._selected = value;
    }

    get items(): Array<ScheduleProf> {
        return this._items;
    }

    set items(value: Array<ScheduleProf>) {
        this._items = value;
    }

    get selectedVo(): ScheduleVo {
        return this._selectedVo;
    }

    set selectedVo(value: ScheduleVo) {
        this._selectedVo = value;
    }

    get itemsVo(): Array<ScheduleVo> {
        return this._itemsVo;
    }

    set itemsVo(value: Array<ScheduleVo>) {
        this._itemsVo = value;
    }

    get displayBasic(): boolean {
        return this._displayBasic;
    }

    set displayBasic(value: boolean) {
        this._displayBasic = value;
    }

    get events(): any[] {
        return this._events;
    }

    set events(value: any[]) {
        this._events = value;
    }

    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }
    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get header(): any {
        return this._header;
    }

    set header(value: any) {
        this._header = value;
    }

    get eventDialog(): boolean {
        return this._eventDialog;
    }

    set eventDialog(value: boolean) {
        this._eventDialog = value;
    }

    get changedEvent(): any {
        return this._changedEvent;
    }

    set changedEvent(value: any) {
        this._changedEvent = value;
    }

    get clickedEvent(): any {
        return this._clickedEvent;
    }

    set clickedEvent(value: any) {
        this._clickedEvent = value;
    }

    public findAll() {

        return this.http.get<any>('http://localhost:8036/learn/scheduleProf/vo/').subscribe(data => {
            this.itemsVo = data;
            console.log(this.itemsVo);
        });
    }



    save() {
        this.eventDialog = false;

        this.clickedEvent.setProp('title', this.changedEvent.title);
        this.clickedEvent.setStart(this.changedEvent.start);
        this.clickedEvent.setEnd(this.changedEvent.end);
        this.clickedEvent.setAllDay(this.changedEvent.allDay);

        this.changedEvent = {title: '', start: null, end: '', allDay: null};
    }


    reset() {
        this.changedEvent.title = this.clickedEvent.title;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
    }
    public  addEvent(){
        return this.http.post<ScheduleProf>('http://localhost:8036/learn/scheduleProf/', this.selected);
    }





}
