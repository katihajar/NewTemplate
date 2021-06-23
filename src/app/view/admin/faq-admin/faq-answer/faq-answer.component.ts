import { Component, OnInit } from '@angular/core';
import {FaqService} from '../../../../controller/service/faq.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {FaqProf} from '../../../../controller/Model/faq-prof.model';
import {FaqType} from '../../../../controller/Model/faq-type.model';
import {Faq} from '../../../../controller/Model/faq.model';
import {LoginService} from '../../../../controller/service/login.service';

@Component({
  selector: 'app-faq-answer',
  templateUrl: './faq-answer.component.html',
  styleUrls: ['./faq-answer.component.scss']
})
export class FaqAnswerComponent implements OnInit {


  answer: string;
  nodes: TreeNode[];
  menu: MenuItem[];

  constructor(private service: FaqService, private login: LoginService) { }

  get selectedFaqProf(): FaqProf {
    return this.service.selectedFaqProf;
  }

  set selectedFaqProf(value: FaqProf) {
    this.service.selectedFaqProf = value;
  }

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
  public update(libelle: string)
  {
    this.service.findFaqProfByLibelle(libelle).subscribe(
        data =>{
          this.selectedFaqProf = data;
          console.log(this.selectedFaqProf);
          this.selectedFaqProf.description = this.answer;
          this.selectedFaqProf.admin = this.login.admin;
          this.service.updateFaqrof(this.selectedFaqProf).subscribe(
              data => {
              },error => {
                console.log('erreur');
              }
          );
        }
    );

  }
  public init()
  {
    this.menu = [
      {label: 'Teacher'},
      {label: 'Student'},
    ];
    this.service.findFaqProf().subscribe(data => {
      this.items = data;
      this.nodes = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < this.items.length ; i++)
      {
        this.nodes.push(
            {
              label: this.items[i].libelle, key: this.items[i].libelle,
              children: [
                {label: this.items[i].description, type: 'string'}
              ]
            }
        );
      }
    });
  }
  ngOnInit(): void {
    this.init();
  }

}
