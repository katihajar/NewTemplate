import { Component, OnInit } from '@angular/core';
import {Paiement} from '../../../../controller/model/paiement.model';
import {ProfessorService} from '../../../../controller/service/professor.service';
import {Prof} from '../../../../controller/Model/prof.model';
import {SessionCoursService} from '../../../../controller/service/session-cours.service';
import {SessionCours} from '../../../../controller/Model/session-cours.model';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.scss']
})
export class PaiementListComponent implements OnInit {

  displayModal: boolean=false;
  val:number;
  profs: Prof[];
  prof: Prof;
  duree = 0;


  get paiement(): Paiement {
    return this.service.paiement;
  }

  set paiement(value: Paiement) {
    this.service.paiement = value;
  }

  showModalDialog() {
    this.displayModal = true;
    console.log(this.selectedItems);
    this.duree = 0;
    for(let i = 0 ; i < this.selectedItems.length ; i++)
    {
      this.duree = this.duree + this.selectedItems[i].duree;
    }
  }

  public selectProf()
  {
    this.profs = [];
    this.service.findAll().subscribe(
        data => {
          for(let i = 0 ; i < data.length ; i++)
          {
            this.profs.push({
              nom: data[i].nom, id: data[i].id, categorieProf: data[i].categorieProf, classRoomList: data[i].classRoomList, prenom: data[i].prenom, addresse: data[i].addresse, email: data[i].email, image: data[i].image, login: data[i].login, numero: data[i].numero, password: data[i].password, recommendList: data[i].recommendList, ref : data[i].ref})
            this.sessionService.findAll().subscribe(
                data => {
                  this.items = data;
                }
            );
          }
        }
    );
  }


  constructor(private service: ProfessorService, private sessionService: SessionCoursService) {
  }

  get items(): Array<SessionCours> {
    return this.sessionService.items;
  }

  set items(value: Array<SessionCours>) {
    this.sessionService.items = value;
  }

  get selectedItems(): Array<SessionCours> {
    return this.sessionService.selectedItems;
  }

  set selectedItems(value: Array<SessionCours>) {
    this.sessionService.selectedItems = value;
  }

  get selected(): SessionCours {
    return this.sessionService.selected;
  }

  set selected(value: SessionCours) {
    this.sessionService.selected = value;
  }



  public payer()
  {
    this.paiement.montant = this.duree * this.prof.categorieProf.lessonRate;
    this.paiement.nbrSeceance = this.selectedItems.length;
    this.paiement.nonPaye = this.items.length - this.selectedItems.length;
    this.paiement.totalHeure = this.duree;
    this.paiement.dateDebut = null;
    this.paiement.dateFin = null;
    this.paiement.prof = this.prof;
    this.paiement.id = 1;
    console.log(this.paiement);
    this.service.payer(this.paiement).subscribe(
        data => {
          console.log(this.paiement);
        }
    );
    for (let i = 0 ; i < this.selectedItems.length ; i++)
    {
      this.selectedItems[i].payer = 'true';
      this.sessionService.update(this.selectedItems[i]).subscribe(
          data => {
            this.service.findSessionNonPayer(this.prof.id).subscribe(
                data => {
                  this.items = data;
                }
            );
          }
      );
    }
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(
        data => {
          this.prof = data[0];
          for(let i = 0 ; i < data.length ; i++)
          {
            this.profs.push({
              nom: data[i].nom, id: data[i].id, categorieProf: data[i].categorieProf, classRoomList: data[i].classRoomList, prenom: data[i].prenom, addresse: data[i].addresse, email: data[i].email, image: data[i].image, login: data[i].login, numero: data[i].numero, password: data[i].password, recommendList: data[i].recommendList, ref : data[i].ref})
                this.sessionService.findAll().subscribe(
                    data => {
                      this.items = data;
                    }
                );
              }
            });

    this.service.paiementProf().subscribe(data => this.itemsPaiement = data);
    this.profs = [];
    this.service.findSessionNonPayer(this.prof.id).subscribe(
        data => {
          this.items = data;
        }
    );
  }

  get itemsPaiement(): Array<Paiement> {
    return this.service.itemsPaiement;
  }

  set itemsPaiement(value: Array<Paiement>) {
    this.service.itemsPaiement = value;
  }

  get selectedPaiement(): Paiement {

    return this.service.selectedPaiement;
  }

  set selectedPaiement(value: Paiement) {
    this.service.selectedPaiement = value;
  }

}
