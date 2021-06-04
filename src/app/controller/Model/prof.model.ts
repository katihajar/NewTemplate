import {RecommendTeacher} from './recommend-teacher.model';
import {CategorieProf} from './categorie-prof.model';
import {ClassRoom} from './class-room.model';

export class Prof {
  public id: number;
  public numero: number;
  public nom: string;
  public prenom: string;
  public login: string;
  public password: string;
  public email: string;
  public ref: string;
  public  classRoomList = new Array<ClassRoom>();
  public categorieProf = new CategorieProf();
  public recommendList = new Array<RecommendTeacher>();
}
