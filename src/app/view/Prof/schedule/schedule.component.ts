import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';
import {ScheduleProf} from '../../../controller/model/calendrier-prof.model';
import {ScheduleService} from '../../../controller/service/schedule.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ScheduleVo} from '../../../controller/model/schedule-vo.model';
import {EtatInscription} from '../../../controller/Model/etat-inscription.model';
import {Etudiant} from '../../../controller/Model/etudiant.model';
import {EtatEtudiantSchedule} from '../../../controller/Model/etat-etudiant-schedule.model';
import {EtudiantService} from '../../../controller/service/etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/Model/prof.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ScheduleComponent implements OnInit {
  constructor(private service: ScheduleService, private messageService: MessageService, private etudiantService: EtudiantService, private loginService: LoginService) {
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

  get prof(): Prof {
    return this.loginService.prof;
  }

  set prof(value: Prof) {
    this.loginService.prof = value;
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
  // tslint:disable-next-line:adjacent-overload-signatures
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

        this.changedEvent.title = this.clickedEvent.title;
        this.changedEvent.etat = this.clickedEvent.etat;
        this.changedEvent.start = this.clickedEvent.start;
        this.changedEvent.end = this.clickedEvent.end;
      }
    };
  }

  get etudiantByProf(): Array<Etudiant> {
    return this.etudiantService.etudiantByProf;
  }

  set etudiantByProf(value: Array<Etudiant>) {
    this.etudiantService.etudiantByProf = value;
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

  public findAllEtudiant() {
    this.etudiantService.findetudiantProf().subscribe(
        data => {
          this.etudiantByProf = data;
        }
    );
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public addStudent() {
    this.submitted = true;
    this.selected.prof = this.loginService.prof;
    this.selected.id = 1000;
    console.log('id' + this.selected.id);
    console.log('ref' + this.selected.ref);
    console.log('prof' + this.selected.prof.id);
    console.log('etudiant' + this.selected.etudiant.id);
    console.log(this.selected.dateDebut);
    console.log(this.selected.dateFin);
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
}

