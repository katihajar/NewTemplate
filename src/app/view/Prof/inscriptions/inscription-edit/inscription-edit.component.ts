import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


import {InscriptionService} from '../../../../controller/service/inscription.service';
import {Inscription} from '../../../../controller/model/inscription.model';

@Component({
  selector: 'app-inscription-edit',
  templateUrl: './inscription-edit.component.html',
  styleUrls: ['./inscription-edit.component.scss']
})
export class InscriptionEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: InscriptionService) { }

  ngOnInit(): void {
  }
  findAllProf(): void {
      this.service.findAllProf();
  }
  findAllEtat(): void {
    this.service.findAllEtat();
  }
  public edit() {
    this.submitted = true;
    if (this.selected.numeroInscription != null) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'InscriptionUpdated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Inscription();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Inscription {
    return this.service.selected;
  }

  set selected(value: Inscription) {
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

  get items(): Array<Inscription> {
    return this.service.items;
  }

  set items(value: Array<Inscription>) {
    this.service.items = value;
  }


}
