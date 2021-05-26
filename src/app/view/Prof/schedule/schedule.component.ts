import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {FullCalendar} from "primeng/fullcalendar";
import {ScheduleProf} from "../../../controller/Model/calendrier-prof.model";
import {ScheduleService} from "../../../controller/service/schedule.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {


  constructor(private service: ScheduleService) {
  }

  get selected(): ScheduleProf {
    return this.service.selected;
  }

  set selected(value: ScheduleProf) {
    this.service.selected = value;
  }

  get items(): Array<ScheduleProf> {
    return this.service.items;
  }

  set items(value: Array<ScheduleProf>) {
    this.service.items = value;
  }

  get displayBasic(): boolean {
    return this.service.displayBasic;
  }

  set displayBasic(value: boolean) {
    this.service.displayBasic = value;
  }
  get events(): any[] {
    return this.service.events;
  }

  set events(value: any[]) {
    this.service.events = value;
  }
  get options(): any {
    return this.service.options;
  }

  set options(value: any) {
    this.service.options = value;
  }

  get header(): any {
    return this.service.header;
  }

  set header(value: any) {
    this.service.header = value;
  }

  get eventDialog(): boolean {
    return this.service.eventDialog;
  }

  set eventDialog(value: boolean) {
    this.service.eventDialog = value;
  }

  get changedEvent(): any {
    return this.service.changedEvent;
  }

  set changedEvent(value: any) {
    this.service.changedEvent = value;
  }

  get clickedEvent(): any {
    return this.service.clickedEvent;
  }

  set clickedEvent(value: any) {
    this.service.clickedEvent = value;
  }

  ngOnInit() {
    this.service.getEvents1();
    /*this.service.getEvents().then(events => {
     this.events = events;
    });*/
    this.changedEvent = {title: '', etat: '', start: null, end: '', allDay: null};
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2021-05-18',
      header: {
        left: 'prev,next',
        center: 'title ,addEventButton',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      allDaySlot: false,
      firstDay: 1,
      editable: true,
      selectable: true,
      defaultView: 'timeGridWeek',
      events: {
        rendering: 'background'
      },
      eventClick: (e) => {
        this.eventDialog = true;

        this.clickedEvent = e.event;

        this.changedEvent.title = this.clickedEvent.title;
        this.changedEvent.etat = this.changedEvent.etat;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
      }
    };
  }

  @ViewChild('fc') fc: FullCalendar;

  public getEvents1() {
    return this.service.getEvents1();
  }

  save() {
    return this.service.save();
  }

  reset() {
    return this.service.reset();
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  addEtudiant() {
    return this.service.addEtudiant();
  }
}

