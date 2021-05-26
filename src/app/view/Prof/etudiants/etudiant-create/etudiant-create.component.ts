import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtudiantService} from '../../../../controller/service/etudiant.service';
import {Etudiant} from '../../../../controller/model/etudiant.model';



@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.scss']
})
export class EtudiantCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtudiantService) { }

  ngOnInit(): void {
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public save() {
    this.submitted = true;
    if (this.selected.nom.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Etudiant Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new Etudiant();
    }
  }
  get selected(): Etudiant {
    return this.service.selected;
  }

  set selected(value: Etudiant) {
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

  get items(): Array<Etudiant> {
    return this.service.items;
  }

  set items(value: Array<Etudiant>) {
    this.service.items = value;
  }



}
