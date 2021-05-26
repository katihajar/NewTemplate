import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

import {EtudiantService} from '../../../../controller/service/etudiant.service';

import {Etudiant} from '../../../../controller/model/etudiant.model';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.scss']
})
export class EtudiantEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtudiantService) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    if (this.selected.nom.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Etudiant Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Etudiant();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Etudiant{
    return this.service.selected;
  }

  set selected(value: Etudiant) {
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

  get items(): Array<Etudiant> {
    return this.service.items;
  }

  set items(value: Array<Etudiant>) {
    this.service.items = value;
  }


}
