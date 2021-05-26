import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ClassRoomService} from '../../../../controller/service/class-room.service';



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

  ngOnInit() {
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
}
