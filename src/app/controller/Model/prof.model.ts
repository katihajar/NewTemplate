
import {Etudiant} from './etudiant.model';
import {ClassRoom} from './class-room.model';
import {CategorieProf} from './categorie-prof.model';
import {RecommendTeacher} from './recommend-teacher.model';

export class Prof {
  public id: number;
  public numero: number;
  public nom: string;
  public prenom: string;
  public login: string;
  public password: string;
  public email: string;
  public ref: string;
  public lessonComplete: number;
  public salary: number;
  public  classRoomList = new Array<ClassRoom>();
  public categorieProf = new CategorieProf();
  public recommendList = new Array<RecommendTeacher>();
}
