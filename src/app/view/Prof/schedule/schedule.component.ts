import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';
import {ScheduleProf} from '../../../controller/model/calendrier-prof.model';
import {ScheduleService} from '../../../controller/service/schedule.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ScheduleVo} from '../../../controller/model/schedule-vo.model';
import {EtatInscription} from "../../../controller/Model/etat-inscription.model";
import {Etudiant} from "../../../controller/Model/etudiant.model";
import {EtatEtudiantSchedule} from "../../../controller/Model/etat-etudiant-schedule.model";
import {Prof} from '../../../controller/Model/prof.model';
import {Calendar} from "primeng/calendar";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ScheduleComponent implements OnInit {
  constructor(private service: ScheduleService, private messageService: MessageService,private confirmationService: ConfirmationService) {
  }
 calendar: FullCalendar;
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
  get etatEtudiantSchedule(): Array<EtatEtudiantSchedule> {
    return this.service.etatEtudiantSchedule;
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
  get etudiant(): Etudiant {
    return this.service.etudiant;
  }
  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
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


  ngOnInit() {

    this.service.findAll();
    this.service.findEtat().subscribe(data => this.service.etatEtudiantSchedule = data);
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
        this.service.findAll();
        this.service.findEtat().subscribe(data => this.service.etatEtudiantSchedule = data);
        this.changedEvent.title = this.clickedEvent.title;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
      }
    };
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
    this.submitted = false;
    this.createDialog = true;
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public addStudent() {
      this.service.addStudent().subscribe(data => {
        this.items.push({...data});
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
  public delete(selected: ScheduleProf) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.delete().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.itemsVo = this.itemsVo.filter(val => val.id !== this.selected.id);
          this.selected = new ScheduleProf();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Student Deleted',
            life: 3000
          });
        });
      }
    });
     this.calendar.getCalendar().getEvents().forEach(event => event.remove());
    this.eventDialog = false ;
  }

}
