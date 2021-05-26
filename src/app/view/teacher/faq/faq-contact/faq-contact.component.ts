import { Component, OnInit } from '@angular/core';
import {FaqType} from '../../../../controller/Model/faq-type.model';
import {MenuItem, TreeNode} from 'primeng/api';
import {FaqService} from '../../../../controller/service/faq.service';
import {FaqProf} from '../../../../controller/Model/faq-prof.model';

@Component({
  selector: 'app-faq-contact',
  templateUrl: './faq-contact.component.html',
  styleUrls: ['./faq-contact.component.scss']
})
export class FaqContactComponent implements OnInit {

  types: Array<FaqType>;
  selectedType: FaqType;
  menu: MenuItem[];
  nodes: TreeNode[];
  question: string;

  constructor(private service: FaqService) { }

  get selectedFaqProf(): FaqProf {
    return this.service.selectedFaqProf;
  }

  set selectedFaqProf(value: FaqProf) {
    this.service.selectedFaqProf = value;
  }

  get itemsFaqProf(): Array<FaqProf> {
    return this.service.itemsFaqProf;
  }

  set itemsFaqProf(value: Array<FaqProf>) {
    this.service.itemsFaqProf = value;
  }

  get viewDialogFaqContact(): boolean {
    return this.service.viewDialogFaqContact;
  }

  set viewDialogFaqContact(value: boolean) {
    this.service.viewDialogFaqContact = value;
  }

  public hideViewDialog() {
    this.viewDialogFaqContact = false;
  }

  get itemsType(): Array<FaqType> {
    return this.service.itemsType;
  }

  set itemsType(value: Array<FaqType>) {
    this.service.itemsType = value;
  }

  public initType()
  {
    this.service.findAll().subscribe(data => {
      this.itemsType = data;
      this.types = [
      ];
      for( let i = 0 ; i < this.itemsType.length ; i++)
      {
        this.types.push({libelle: this.itemsType[i].libelle, ref: this.itemsType[i].ref, id: this.itemsType[i].id, faq: this.itemsType[i].faq});
      }
    });
  }

  public save() {
    this.service.findFirstFaqProf().subscribe(
        data => {
          this.selectedFaqProf = data;

          this.selectedFaqProf.faqType = this.selectedType;
          this.selectedFaqProf.libelle = this.question;
          this.selectedFaqProf.admin = null;
          this.selectedFaqProf.prof = null;
          this.selectedFaqProf.ref = 'fp' + (this.itemsFaqProf.length + 1);
          this.selectedFaqProf.description = null;
          this.selectedFaqProf.id = this.selectedFaqProf.id + (this.itemsFaqProf.length + 1) ;
          console.log(this.selectedFaqProf);
          this.service.saveFaqProf().subscribe(data => {
            this.itemsFaqProf.push({...data});
          },error => {
            console.log('erreuuuuuuuuuur');
          });
        }
    )
    this.selectedFaqProf = new FaqProf();
  }

  public findFaqProf()
  {
    this.service.findFaqProf().subscribe(
        data => {
          this.itemsFaqProf = data;
          this.nodes = [];
          for(let i = 0 ; i < this.itemsFaqProf.length ; i++)
          {
            if(this.itemsFaqProf[i].description == null)
            {
              this.itemsFaqProf[i].description = 'Pas encore repondu';
            }
            this.nodes.push(
                {
                  label: this.itemsFaqProf[i].libelle,
                  children: [
                    {label: this.itemsFaqProf[i].description, type: 'string'}
                  ]
                }
            );
          }
        }
    );
  }

  ngOnInit(): void {
    this.initType();
    this.menu = [
      {label: 'New Question', icon: 'pi pi-plus-circle', command: (event) => {
          document.getElementById('new-question').style.visibility = 'visible';
          document.getElementById('new-question').style.height = '150px';
          document.getElementById('my-questions').style.visibility = 'hidden';
          document.getElementById('my-questions').style.height = '10px';
        }},
      {label: 'My Questions', icon: 'pi pi-envelope', command: (event) => {
          document.getElementById('new-question').style.visibility = 'hidden';
          document.getElementById('new-question').style.height = '10px';
          document.getElementById('my-questions').style.visibility = 'visible';
          document.getElementById('my-questions').style.height = '100px';
          this.findFaqProf();
        }}
    ];
    this.findFaqProf();
  }

}
