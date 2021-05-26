import { Component, OnInit } from '@angular/core';
import {FaqService} from '../../../../controller/service/faq.service';
import {TreeNode} from 'primeng/api';
import {FaqProf} from '../../../../controller/Model/faq-prof.model';

@Component({
  selector: 'app-faq-answer',
  templateUrl: './faq-answer.component.html',
  styleUrls: ['./faq-answer.component.scss']
})
export class FaqAnswerComponent implements OnInit {

  nodes: TreeNode[];
  private _answer: string;


  get answer(): string {
    return this._answer;
  }

  set answer(value: string) {
    this._answer = value;
  }

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

  public update(ref: string)
  {
    this.service.findFaqProfByRef(ref).subscribe(
        data =>{
          this.selectedFaqProf = data;
          this.selectedFaqProf.description = this.answer;
          this.service.updateFaqrof().subscribe(
              data => {
              },error => {
                console.log('erreur');
              }
          );
        }
    );

  }

  public nodeSelect(faqProf: FaqProf)
  {
    this.selectedFaqProf = {...faqProf};
    console.log(this.selectedFaqProf.faqType);
  }

  ngOnInit(): void {
    this.service.findFaqProf().subscribe(
        data => {
          this.itemsFaqProf = data;
          this.nodes = [];
          for(let i = 0 ; i < this.itemsFaqProf.length ; i++)
          {
            this.nodes.push(
                {
                  label: this.itemsFaqProf[i].libelle, key: this.itemsFaqProf[i].ref,
                  children: [
                    {label: this.itemsFaqProf[i].description, type: 'string'}
                  ]
                }
            );
          }
        }
    );
  }

}
