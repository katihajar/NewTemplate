import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {SessionCoursService} from "../../../../controller/service/session-cours.service";
import {SessionCours} from "../../../../controller/Model/session-cours.model";

@Component({
  selector: 'app-session-cours-edit',
  templateUrl: './session-cours-edit.component.html',
  styleUrls: ['./session-cours-edit.component.scss']
})
export class SessionCoursEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: SessionCoursService) {
   }

   ngOnInit(): void {
   }

   public edit() {
     this.submitted = true;
     if (this.selected.reference.trim()) {
       if (this.selected.id) {
         this.items[this.service.findIndexById(this.selected.id)] = this.selected;
         this.service.edit().subscribe(data => {
           this.selected = data;
           this.messageService.add({
             severity: 'success',
             summary: 'Successful',
             detail: 'Session Updated',
             life: 3000
           });
         });
       }
       this.editDialog = false;
       this.selected = new SessionCours();
     }
   }

   public hideEditDialog() {
     this.editDialog = false;
   }
   get selected(): SessionCours {
     return this.service.selected;
   }

   set selected(value: SessionCours) {
     this.service.selected = value;
   }

   get editDialog(): boolean {
     return this.service.editDialog;
   }

   set editDialog(value: boolean) {
     this.service.editDialog = value;
   }

   get submitted(): boolean {
     return this.service.submitted;
   }

   set submitted(value: boolean) {
     this.service.submitted = value;
   }

   get items(): Array<SessionCours> {
     return this.service.items;
   }

   set items(value: Array<SessionCours>) {
     this.service.items = value;
   }

}
