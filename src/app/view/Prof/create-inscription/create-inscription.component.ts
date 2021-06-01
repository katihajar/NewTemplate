import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InscriptionService} from '../../../controller/service/inscription.service';
import {Inscription} from '../../../controller/Model/inscription.model';
import {Etudiant} from '../../../controller/Model/etudiant.model';
import {Parcours} from '../../../controller/Model/parcours.model';
import {Centre} from '../../../controller/Model/centre.model';

@Component({
  selector: 'app-create-inscription',
  templateUrl: './create-inscription.component.html',
  styleUrls: ['./create-inscription.component.scss']
})
export class CreateInscriptionComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: InscriptionService ) { }
  ngOnInit(): void {
  }
  get selected(): Inscription {
    return this.service.selected;
  }

  set selected(value: Inscription) {
    this.service.selected = value;
  }

  get selectes(): Array<Inscription> {
    return this.service.selectes;
  }

  set selectes(value: Array<Inscription>) {
    this.service.selectes = value;
  }
  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }
  get selectedetudiant(): Etudiant {
    return this.service.selectedetudiant;
  }

  set selectedetudiant(value: Etudiant) {
    this.service.selectedetudiant = value;
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.service.save();
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  get etudiant(): Etudiant {
    return this.service.etudiant;
  }
  get parcours(): Parcours{
    return this.service.etudiant.parcours;
  }
  get centre(): Centre{
    return this.service.etudiant.parcours.centre;
  }
  public findAllCentre(){
    this.service.findAllCentre().subscribe(data => this.centreList = data);
  }
  public findAllParcours(){
    this.service.findAllParcours().subscribe(data => this.parcoursList = data);
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


}
