import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Parcours} from '../../../../controller/Model/parcours.model';
import {Centre} from '../../../../controller/Model/centre.model';

@Component({
  selector: 'app-parcours-create',
  templateUrl: './parcours-create.component.html',
  styleUrls: ['./parcours-create.component.scss']
})
export class ParcoursCreateComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService ) { }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selectedparcours.id == null) {
      this.service.save().subscribe(data => {
        // @ts-ignore
        this.itemsparcours.push({...data});
        // tslint:disable-next-line:no-shadowed-variable
        this.service.init().subscribe(data => this.itemsparcours = data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Created',
          life: 3000
        });
      });
      this.service.init().subscribe(data => this.itemsparcours = data);
      this.createDialog = false;
      this.selectedparcours = new Parcours();
    }
  }
  get itemscentre(): Array<Centre> {
    return this.service.itemscentre;
  }
  get selectedparcours(): Parcours {
    return this.service.selectedparcours;
  }
  set selectedparcours(value: Parcours) {
    this.service.selectedparcours = value;
  }
  findAllCentre() {
    this.service.findAllCentre().subscribe(data => {
      this.itemscentre = data;
    });
  }
  get itemsparcours(): Array<Parcours> {
    return this.service.itemsparcours;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscentre(value: Array<Centre>) {
    this.service.itemscentre = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemsparcours(value: Array<Parcours>) {
    this.service.itemsparcours = value;
  }
}
