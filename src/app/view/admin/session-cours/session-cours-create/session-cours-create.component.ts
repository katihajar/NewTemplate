import { Component, OnInit } from '@angular/core';
import {SessionCours} from '../../../../controller/model/session-cours.model';
import {MessageService} from 'primeng/api';
import {SessionCoursService} from '../../../../controller/service/session-cours.service';
import {Prof} from '../../../../controller/model/prof.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';

@Component({
  selector: 'app-session-cours-create',
  templateUrl: './session-cours-create.component.html',
  styleUrls: ['./session-cours-create.component.scss']
})
export class SessionCoursCreateComponent implements OnInit {

 constructor(private messageService: MessageService, private service: SessionCoursService) {
   }

   ngOnInit(): void {
   }

   public hideCreateDialog() {
     this.createDialog = false;
     this.submitted = false;
   }

   public save() {
     this.submitted = true;
     this.service.save().subscribe(data => {
         this.items.push({...data});
         // tslint:disable-next-line:no-shadowed-variable
         this.service.findAll().subscribe(data => this.items = data);
         this.messageService.add({
           severity: 'success',
           summary: 'Successful',
           detail: 'session Created',
           life: 3000
         });
       });
     this.createDialog = false;
     this.selected = new SessionCours();
   }
   get selected(): SessionCours {
     return this.service.selected;
   }

   set selected(value: SessionCours) {
     this.service.selected = value;
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

   public  findAllProf(){
   this.service.findAllProf().subscribe( data => this.itemsProf = data);
   }
  public  findAllEtudiant(){
    this.service.findAllEtudiant().subscribe( data => this.itemsEtudiant = data);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
   set submitted(value: boolean) {
     this.service.submitted = value;
   }
  get itemsProf(): Array<Prof> {
    return this.service.itemsProf;
  }

  set itemsProf(value: Array<Prof>) {
    this.service.itemsProf = value;
  }

  get itemsEtudiant(): Array<Etudiant> {
    return this.service.itemsEtudiant;
  }

  set itemsEtudiant(value: Array<Etudiant>) {
    this.service.itemsEtudiant = value;
  }
   get items(): Array<SessionCours> {
     return this.service.items;
   }

   set items(value: Array<SessionCours>) {
     this.service.items = value;
   }

}
