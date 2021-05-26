import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../../../../controller/service/inscription.service';
import {Etudiant} from '../../../../controller/Model/etudiant.model';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private etudiantService: InscriptionService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.etudiantService.save();
  }
  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get parcours(): Parcours{
    return this.etudiantService.etudiant.parcours;
  }
  get centre(): Centre{
    return this.etudiantService.etudiant.parcours.centre;
  }
  public findAllCentre(){
    this.etudiantService.findAllCentre();
  }
  get centreList(): Array<Centre> {

    return this.etudiantService.centreList;
  }
  get parcoursList(): Array<Parcours> {
    return this.etudiantService.parcoursList;
  }
  findAllParcours() {
    this.etudiantService.findAllParcours();
  }
}
