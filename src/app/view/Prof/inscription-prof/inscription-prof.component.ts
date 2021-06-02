import { Component, OnInit } from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';

import {ProfService} from '../../../controller/service/prof.service';
import { Prof } from 'src/app/controller/Model/prof.model';
import {CategorieProf} from '../../../controller/Model/categorie-prof.model';

@Component({
  selector: 'app-inscription-prof',
  templateUrl: './inscription-prof.component.html',
  styleUrls: ['./inscription-prof.component.scss']
})
export class InscriptionProfComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ProfService) { }

  ngOnInit(): void {
  }
  public save() {
    this.selectedProf.categorieProf.id = 89;
    this.service.save().subscribe(data => {
      console.log(this.selectedProf);
      console.log('meryem');
    });
  }
  get selectedProf(): Prof {
    return this.service.selectedProf;
  }

  set selectedProf(value: Prof) {
    this.service.selectedProf = value;
  }
  findAllCategorieProf() {
    this.service.findAllCategorieProf().subscribe(data => {
      this.service.itemsCategorieProf = data;
    });
  }
  get itemsCategorieProf(): Array<CategorieProf> {
    return this.service.itemsCategorieProf;
  }

  set itemsCategorieProf(value: Array<CategorieProf>) {
    this.service.itemsCategorieProf = value;
  }

}
