import {Etudiant} from './etudiant.model';
import {Prof} from './prof.model';
import {EtatInscription} from './etat-inscription.model';

export class ScheduleProf {
    public id: number;
    public ref: string;
    public dateDebut: Date = new Date();
    public dateFin: Date = new Date();
    public etudiant = new Etudiant();
    public prof = new Prof();
}
