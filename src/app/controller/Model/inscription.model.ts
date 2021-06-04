
import {Etudiant} from './etudiant.model';
import {EtatInscription} from './etat-inscription.model';
import {Prof} from './prof.model';

export class Inscription {
  public id: number;
  public numeroInscription: string;
  public datedebutinscription: string;
  public datefininscription: string;
  public prof = new Prof();
  public etudiant = new Etudiant();
  public etatInscription = new EtatInscription();
}
