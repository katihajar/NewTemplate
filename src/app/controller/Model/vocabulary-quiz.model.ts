import {Vocabulary} from "./vocabulary.model";
import {Section} from "./section.model";

export class VocabularyQuiz {
    public id: number;
    public ref: string;
    public  libelle: string;
    public dateDebut: Date = new Date();
    public dateFin: Date = new Date();
    public vocabularies = new Array<Vocabulary>();


}
