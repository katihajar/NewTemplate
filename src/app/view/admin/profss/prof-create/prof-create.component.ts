import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Prof} from '../../../../controller/model/prof.model';
import {ProfessorService} from '../../../../controller/service/professor.service';


@Component({
    selector: 'app-prof-create',
    templateUrl: './prof-create.component.html',
    styleUrls: ['./prof-create.component.scss']
})
export class ProfCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: ProfessorService) {
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.reference.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Prof Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Prof();
        }
    }

    get selected(): Prof {
        return this.service.selected;
    }

    set selected(value: Prof) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Prof> {
        return this.service.items;
    }

    set items(value: Array<Prof>) {
        this.service.items = value;
    }


}
