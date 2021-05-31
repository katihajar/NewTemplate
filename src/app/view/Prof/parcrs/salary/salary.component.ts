import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';
import {SalaryVo} from '../../../../controller/Model/salary-vo.model';



@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  data: any;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClassRoomService) {this.data = {
    labels: ['Lesson profit', 'bonus', 'Plan shortage'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF8C69',
          '#43CD60',
          '#3A5FCD'
        ],
        hoverBackgroundColor: [
          '#FF8C69',
          '#43CD60',
          '#3A5FCD'
        ]
      }]
  }; }
  items: MenuItem[];

  activeItem: MenuItem;
  get selectedsalaryVo(): SalaryVo {
    return this.service.selectedsalaryVo;
  }

  set selectedsalaryVo(value: SalaryVo) {
    this.service.selectedsalaryVo = value;
  }

  get itemssalaryVo(): Array<SalaryVo> {
    return this.service.itemssalaryVo;
  }

  set itemssalaryVo(value: Array<SalaryVo>) {
    this.service.itemssalaryVo = value;
  }

  get selectessalaryVo(): Array<SalaryVo> {
    return this.service.selectessalaryVo;
  }

  set selectessalaryVo(value: Array<SalaryVo>) {
    this.service.selectessalaryVo = value;
  }
  public findSalaryByDate(mois: Date, annee: Date ){
    this.service.findSalaryByDate(mois , annee).subscribe(data =>
    {
      this.selectessalaryVo = data;
      this.itemssalaryVo = this.selectessalaryVo;
      console.log(this.itemssalaryVo);
    });
  }
  public findSalary(){
    this.service.findSalary().subscribe(data =>
    {
      this.selectessalaryVo = data;
      this.itemssalaryVo = this.selectessalaryVo;
      console.log(this.selectessalaryVo);
    });
  }
  ngOnInit() {
    this.findSalary();
    this.items = [
      {label: '30 lesson Complete'},
      {label: '0$  workload bonus'},
      {label: '0$ lifeTime bonus'},
      {label:  '0$ Class Average bonus'},
    ];
    this.activeItem = this.items[0];
  }
  public view() {
    this.viewDialogCategorie = true;
  }
  set viewDialogCategorie(value: boolean) {
    this.service.viewDialogCategorie = value;
  }

  get viewDialogCategorie(): boolean {
    return this.service.viewDialogCategorie;
  }

 public Console() {
    console.log(this.itemssalaryVo);
  }
}
