import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

import {EtudiantService} from '../../../../controller/service/etudiant.service';

import {Etudiant} from '../../../../controller/model/etudiant.model';
import {Centre} from '../../../../controller/Model/centre.model';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Prof} from '../../../../controller/Model/prof.model';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.scss']
})
export class EtudiantEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtudiantService) { }

  ngOnInit(): void {
  }
  public findAllCentre(){
    this.service.findAllCentre().subscribe(data => this.centreList = data);
  }
  public findAllParcours(){
    this.service.findAllParcours().subscribe(data => this.parcoursList = data);
  }
  get itemsprof(): Array<Prof> {
    return this.service.itemsprof;
  }

  set itemsprof(value: Array<Prof>) {
    this.service.itemsprof = value;
  }
  public findAllProf(){
    this.service.findAllProf().subscribe( data => this.itemsprof = data);
  }
  get centreList(): Array<Centre> {

    return this.service.centreList;
  }
  set centreList(value: Array<Centre>) {
    this.service.centreList = value;
  }
  set parcoursList(value: Array<Parcours>) {
    this.service.parcoursList = value;
  }
  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
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
