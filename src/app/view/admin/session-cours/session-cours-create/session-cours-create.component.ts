import { Component, OnInit } from '@angular/core';
import {SessionCours} from "../../../../controller/Model/session-cours.model";
import {MessageService} from "primeng/api";
import {SessionCoursService} from "../../../../controller/service/session-cours.service";

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
     if (this.selected.reference.trim()) {
       this.service.save().subscribe(data => {
         this.items.push({...data});
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
