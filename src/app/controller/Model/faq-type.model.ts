import {Faq} from './faq.model';

export class FaqType {
    public id: number;
    public ref: string;
    public libelle: string;
    public faq = new Array<Faq>();
}
