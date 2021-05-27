import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FaqService} from '../../../../controller/service/faq.service';
import {FaqType} from '../../../../controller/Model/faq-type.model';
import {Faq} from '../../../../controller/Model/faq.model';
import {MenuItem, TreeNode} from 'primeng/api';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  nodes: TreeNode[];
  menu: MenuItem[];

  constructor(private http: HttpClient, private service: FaqService) { }

  get viewDialogFaqContact(): boolean {
    return this.service.viewDialogFaqContact;
  }

  set viewDialogFaqContact(value: boolean) {
    this.service.viewDialogFaqContact = value;
  }

  get ref(): string {
    return this.service.ref;
  }

  set ref(value: string) {
    this.service.ref = value;
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


  public view(faqType: FaqType) {
    this.selectedType = {...faqType};

  }

  public viewContact() {
    this.viewDialogFaqContact = true ;
  }


  public initType()
  {
    this.service.findAll().subscribe(data => {
      this.itemsType = data;
      this.menu = [
      ];
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0 ; i < this.itemsType.length ; i++)
      {
        this.menu.push({label: this.itemsType[i].libelle, command: (event) => {
            this.selectedType = this.itemsType[i];
            this.ref = this.itemsType[i].ref;
          }});
      }
    }, error => console.log('erreur'));
  }
  public init()
  {
    this.service.findByFaqType(this.ref).subscribe(data => {
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
    this.service.findFirstFaq().subscribe(data => {
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

  ngOnInit(): void {
    this.initType();
    this.findFirstFaq();
  }

}
