import { Component, OnInit } from '@angular/core';
import {FaqType} from '../../../../controller/Model/faq-type.model';
import {Faq} from '../../../../controller/Model/faq.model';
import {FaqService} from '../../../../controller/service/faq.service';
import {MenuItem, TreeNode} from 'primeng/api';

@Component({
  selector: 'app-faq-admin-list',
  templateUrl: './faq-admin-list.component.html',
  styleUrls: ['./faq-admin-list.component.scss']
})
export class FaqAdminListComponent implements OnInit {
  utilisateurs: any[];
  utilisateur: string;
  nodes: TreeNode[];
  menu: MenuItem[];

  constructor(private service: FaqService) { }

  get viewDialogFaqContact(): boolean {
    return this.service.viewDialogFaqContact;
  }

  set viewDialogFaqContact(value: boolean) {
    this.service.viewDialogFaqContact = value;
  }

  get id(): number {
    return this.service.id;
  }

  set id(value: number) {
    this.service.id = value;
  }

  get selectedType(): FaqType {
    return this.service.selectedType;
  }

  set selectedType(value: FaqType) {
    this.service.selectedType = value;
  }

  get items(): Array<Faq> {
    return this.service.items;
  }

  set items(value: Array<Faq>) {
    this.service.items = value;
  }

  get selected(): Faq {
    return this.service.selected;
  }

  set selected(value: Faq) {
    this.service.selected = value;
  }

  get itemsType(): Array<FaqType> {
    return this.service.itemsType;
  }

  set itemsType(value: Array<FaqType>) {
    this.service.itemsType = value;
  }

  public findTypes()
  {
    this.initType();
    this.init();
    this.findFirstFaq();
  }
  public initType()
  {
    for(let j = 0 ; j < this.utilisateurs.length ; j++) {
      if (this.utilisateur == this.utilisateurs[j]) {
        this.service.findTypes(this.utilisateurs[j].label).subscribe(data => {
          this.itemsType = data;
          this.menu = [];
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.itemsType.length; i++) {
            this.menu.push({
              label: this.itemsType[i].libelle, command: (event) => {
                this.selectedType = this.itemsType[i];
                this.id = this.itemsType[i].id;
              }
            });
          }
        }, error => console.log('erreur'));
      }
    }
  }
  public init()
  {
    this.service.findByFaqType(this.id).subscribe(data => {
      this.items = data;
      this.nodes = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < this.items.length ; i++)
      {
        this.nodes.push(
            {
              label: this.items[i].libelle,
              children: [
                {label: this.items[i].description, type: 'string'}
              ]
            }
        );
      }
    });
  }
  public findFirstFaq()
  {
    for(let j = 0 ; j < this.utilisateurs.length ; j++) {
      if (this.utilisateur == this.utilisateurs[j]) {
        this.service.findTypes(this.utilisateurs[j].label).subscribe(data => {
          this.itemsType = data;
          this.service.findByFaqType(this.itemsType[0].id).subscribe(data => {
            this.items = data;
            this.nodes = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0 ; i < this.items.length ; i++)
            {
              this.nodes.push(
                  {
                    label: this.items[i].libelle,
                    children: [
                      {label: this.items[i].description, type: 'string'}
                    ]
                  }
              );
            }
          });
        }, error => console.log('erreur'));
      }
    }
  }
  ngOnInit(): void {

    this.utilisateurs = [
      {label: 'teacher'},
      {label: 'student'},
    ];
    this.utilisateur = this.utilisateurs[0];
    this.initType();
    this.findFirstFaq();
  }

}
