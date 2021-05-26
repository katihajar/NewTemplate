import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';

export class ScheduleProf {
    public id: number;
    public ref: string;
    public start: Date = new Date();
    public end: Date = new Date();
    public etudiant = new Etudiant();
    public prof = new Prof();
}
