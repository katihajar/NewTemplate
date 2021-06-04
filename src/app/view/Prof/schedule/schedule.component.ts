import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';
import {ScheduleProf} from '../../../controller/model/calendrier-prof.model';
import {ScheduleService} from '../../../controller/service/schedule.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ScheduleVo} from '../../../controller/model/schedule-vo.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ScheduleComponent implements OnInit {
  constructor(private service: ScheduleService, private messageService: MessageService) {
  }

  get selected(): ScheduleProf {
    if (this.service.selected == null){
      this.service.selected = new ScheduleProf();
    }
    return this.service.selected;
  }

  set selected(value: ScheduleProf) {
    this.service.selected = value;
  }

  get items(): Array<ScheduleProf> {
    if (this.service.items == null){
      this.service.items = new Array<ScheduleProf>();
    }
    return this.service.items;
  }

  set items(value: Array<ScheduleProf>) {
    this.service.items = value;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
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
  get itemsVo(): Array<ScheduleVo> {
    return this.service.itemsVo;
  }

  set itemsVo(value: Array<ScheduleVo>) {
    this.service.itemsVo = value;
  }
  get selectedVo(): ScheduleVo {
    return this.service.selectedVo;
  }

  set selectedVo(value: ScheduleVo) {
    this.service.selectedVo = value;
  }

  @ViewChild('fc') fc: FullCalendar;

  ngOnInit() {
    this.service.findAll();
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
        this.changedEvent.etat = this.clickedEvent.etat;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
      }
    };
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
  public openCreate() {
    this.selected = new ScheduleProf();
    this.submitted = false;
    this.createDialog = true;
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public addEvent() {
    this.submitted = true;
    if (this.selected.ref.trim()) {
      this.service.addEvent().subscribe(data => {
        const cloneSchedules = JSON.parse(JSON.stringify(this.selected));
        this.items.push(cloneSchedules);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new ScheduleProf();
    }
  }
}

