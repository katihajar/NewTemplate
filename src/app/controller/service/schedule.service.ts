import {Injectable} from '@angular/core';
import {ScheduleProf} from "../model/calendrier-prof.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {

    private _selected: ScheduleProf;
    private _items: Array<ScheduleProf>;
    private _displayBasic: boolean;
    private _events: any[];
    private _options: any;
    private _header: any;
    private _eventDialog: boolean;
    private _changedEvent: any;
    private _clickedEvent = null;



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

    public getEvents1() {

        return this.http.get<any>('http://localhost:8036/centre/scheduleProf/').subscribe(data => {
            this.items = data;
        });
    }
   /* public getEvents() {
        return this.http.get<any>('assets/demo/data/package.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);

    }*/

    addEtudiant() {
        let dateStr = prompt('Enter a date in YYYY-MM-DD format');
        let date = new Date(dateStr + 'T00:00:00');
        if (!isNaN(date.valueOf())) {
            this.options.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
            });
            alert('Great. Now, update your database...');
        } else {
            alert('Invalid date.');
        }
        this.options.render();

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


}
