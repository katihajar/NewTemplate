import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../../../../controller/service/inscription.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Etudiant } from 'src/app/controller/model/etudiant.model';
import { Parcours } from 'src/app/controller/model/parcours.model';
import { Centre } from 'src/app/controller/model/centre.model';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {


  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: InscriptionService ) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.service.save();
  }
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
    this.service.findAllCentre();
  }
  get centreList(): Array<Centre> {

    return this.service.centreList;
  }
  get parcoursList(): Array<Parcours> {
    return this.service.parcoursList;
  }
}




