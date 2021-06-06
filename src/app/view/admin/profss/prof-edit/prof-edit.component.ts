import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Prof} from '../../../../controller/model/prof.model';
import {ProfessorService} from '../../../../controller/service/professor.service';

@Component({
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.scss']
})
export class ProfEditComponent implements OnInit {

 constructor(private messageService: MessageService, private service: ProfessorService) {
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
             detail: 'Prof Updated',
             life: 3000
           });
         });
       }
       this.editDialog = false;
       this.selected = new Prof();
     }
   }

   public hideEditDialog() {
     this.editDialog = false;
   }
   get selected(): Prof {
     return this.service.selected;
   }

   set selected(value: Prof) {
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

   get items(): Array<Prof> {
     return this.service.items;
   }

   set items(value: Array<Prof>) {
     this.service.items = value;
   }


}
