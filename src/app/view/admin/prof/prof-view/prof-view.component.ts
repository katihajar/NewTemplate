import { Component, OnInit } from '@angular/core';
import {ProfessorService} from "../../../../controller/service/professor.service";
import {MessageService} from "primeng/api";
import {Prof} from "../../../../controller/Model/prof.model";

@Component({
  selector: 'app-prof-view',
  templateUrl: './prof-view.component.html',
  styleUrls: ['./prof-view.component.scss']
})
export class ProfViewComponent implements OnInit {


  constructor(private messageService: MessageService, private service: ProfessorService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Prof {
    return this.service.selected;
  }

  set selected(value: Prof) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
