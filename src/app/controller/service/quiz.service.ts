import {Injectable} from '@angular/core';
import {Reponse} from '../model/reponse.model';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {TypeDeQuestion} from '../model/type-de-question.model';
import {Quiz} from '../model/quiz.model';
import {Observable} from 'rxjs';
import {QuizConfig} from "../model/quiz-config.model";
import {ScheduleProf} from "../model/calendrier-prof.model";



@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private _qnprogress: number;
    private _correctAnswerCount: number;
    private _resultat: string;
    private _reponse: Reponse;
    private _selected: Quiz;
    private _viewDialog: boolean;


    private _timer;
    private _k = -1;
    private _button: string;
    private _typeDeQuestion: TypeDeQuestion;
    private _reponses: Array<Reponse>;
    private _typeQst: string;
    private _questionsAll: Array<Question>;
    private _types: Array<TypeDeQuestion>;
    private _items: Array<Quiz>;
    private _question: Question;
    private _selectedItemsRadio: Array<Reponse>;
    private _reponsesCorrect: Array<Reponse>;
    private _a: number;
    private _m: number;
    private _n: number;
    private _i = 1;
    private _count = 0;
    private _note: number;
    private _questions: Array<Question>;
    public _url = 'http://localhost:8036/';
    public _urlQuestion = 'centre/question';
    private _urlReponse = 'centre/reponse';
    public _urlType = 'centre/TypeDeQuestion';
    private _urlQuiz = 'centre/quiz';
    private _j = 0;
    private _nbrRep: string;
    private _selectedItemsCheckBox: Array<Reponse>;
    private _createDialog: boolean;
    private _configuration: QuizConfig;
    private _configurations: Array<QuizConfig>;


    get configuration(): QuizConfig {
        return this._configuration;
    }

    set configuration(value: QuizConfig) {
        this._configuration = value;
    }

    get configurations(): Array<QuizConfig> {
        return this._configurations;
    }

    set configurations(value: Array<QuizConfig>) {
        this._configurations = value;
    }

    get resultat(): string {
        return this._resultat;
    }

    set resultat(value: string) {
        this._resultat = value;
    }
    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }
    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }
    get type(): TypeDeQuestion {
        // this.http.get(this._urlBase + this._urlType + '/');
        if (this._typeDeQuestion == null) {
            this._typeDeQuestion = new TypeDeQuestion();
        }
        return this._typeDeQuestion;
    }

    set type(value: TypeDeQuestion) {
        this._typeDeQuestion = value;
    }

    get reponse(): Reponse {
        if (this._reponse == null) {
            this._reponse = new Reponse();
        }
        return this._reponse;
    }

    set reponse(value: Reponse) {
        this._reponse = value;
    }

    get reponses(): Array<Reponse> {
        if (this._reponses == null) {
            this._reponses = new Array<Reponse>();
        }
        return this._reponses;
    }

    set reponses(value: Array<Reponse>) {
        this._reponses = value;
    }

    get question(): Question {
        if (this._question == null) {
            this._question = new Question();
        }
        return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }

    get questions(): Array<Question> {
        if (this._questions == null) {
            this._questions = new Array<Question>();
        }
        return this._questions;
    }

    set questions(value: Array<Question>) {
        this._questions = value;
    }

    constructor(private http: HttpClient) {
    }

    get types(): Array<TypeDeQuestion> {
        if (this._types == null) {
            this._types = new Array<TypeDeQuestion>();
        }
        return this._types;
    }

    set types(value: Array<TypeDeQuestion>) {
        this._types = value;
    }

    get selected(): Quiz {
        return this._selected;
    }

    set selected(value: Quiz) {
        this._selected = value;
    }

    get typeQst(): string {
        return this._typeQst;
    }

    set typeQst(value: string) {
        this._typeQst = value;
    }

    get items(): Array<Quiz> {
        if (this._items == null) {
            this._items = new Array<Quiz>();
        }
        return this._items;
    }

    set items(value: Array<Quiz>) {
        this._items = value;
    }

    get j(): number {
        return this._j;
    }

    set j(value: number) {
        this._j = value;
    }

    get k(): number {
        return this._k;
    }

    set k(value: number) {
        this._k = value;
    }

    get questionsAll(): Array<Question> {
        if (this._questionsAll == null) {
            this._questionsAll = new Array<Question>();
        }
        return this._questionsAll;
    }

    set questionsAll(value: Array<Question>) {
        this._questionsAll = value;
    }

    get reponsesCorrect(): Array<Reponse> {
        return this._reponsesCorrect;
    }

    set reponsesCorrect(value: Array<Reponse>) {
        this._reponsesCorrect = value;
    }

    get selectedItemsRadio(): Array<Reponse> {
        return this._selectedItemsRadio;
    }

    set selectedItemsRadio(value: Array<Reponse>) {
        this._selectedItemsRadio = value;
    }

    get m(): number {
        return this._m;
    }

    set m(value: number) {
        this._m = value;
    }

    get n(): number {
        return this._n;
    }

    set n(value: number) {
        this._n = value;
    }

    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
    }

    get note(): number {
        return this._note;
    }

    set note(value: number) {
        this._note = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get i(): number {
        return this._i;
    }

    set i(value: number) {
        this._i = value;
    }

    get nbrRep(): string {
        return this._nbrRep;
    }

    get correctAnswerCount(): number {
        return this._correctAnswerCount;
    }

    set correctAnswerCount(value: number) {
        this._correctAnswerCount = value;
    }
    get qnprogress(): number {
        return this._qnprogress;
    }

    set qnprogress(value: number) {
        this._qnprogress = value;
    }

    // tslint:disable-next-line:typedef
    get timer() {
        return this._timer;
    }

    set timer(value) {
        this._timer = value;
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }

    // tslint:disable-next-line:variable-name
    private _seconds: number;

    // tslint:disable-next-line:adjacent-overload-signatures
    set nbrRep(value: string) {
        this._nbrRep = value;
    }

    get selectedItemsCheckBox(): Array<Reponse> {
        return this._selectedItemsCheckBox;
    }

    set selectedItemsCheckBox(value: Array<Reponse>) {
        this._selectedItemsCheckBox = value;
    }
    public CorrectAnswer() {
        this.k = this.k + 1;
        this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/criteria/numero/' + this.k).subscribe(
            data => {
                this.reponsesCorrect = data;
            }
        );
    }

    saveConfig() {
    }
// tslint:disable-next-line:typedef
    public getAnswers(id, choice) {
        this.reponses = choice;
    }

    // tslint:disable-next-line:typedef
    public answer() {
        this.CorrectAnswer();
        this.button = 'Next';
        document.getElementById('start').remove();
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('countdown').style.visibility = 'visible';
        document.getElementById('progression').style.visibility = 'visible';
        document.getElementById('file').style.visibility = 'visible';
        document.getElementById('quiz').style.backgroundColor = 'white';
        // tslint:disable-next-line:triple-equals
        if (this.question.typeDeQuestion.ref == 't1') {
            this.typeQst = 'radio';
            document.getElementById('nbrRep').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.visibility = 'visible';
            document.getElementById('reponse-text').style.visibility = 'hidden';
            // tslint:disable-next-line:triple-equals
        } else if (this.question.typeDeQuestion.ref == 't2') {
            this.typeQst = 'checkbox';
            document.getElementById('reponse-radio').style.visibility = 'visible';
            document.getElementById('reponse-text').style.visibility = 'hidden';
            document.getElementById('nbrRep').style.visibility = 'visible';
            this.nbrRep = 'multiple choice';
            // tslint:disable-next-line:triple-equals
        } else if (this.question.typeDeQuestion.ref == 't3') {
            document.getElementById('nbrRep').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.height = '10px';
            document.getElementById('reponse-text').style.visibility = 'visible';
            document.getElementById('reponse-text').style.marginTop = '-200px';
        }
    }

    // tslint:disable-next-line:typedef
    shuffle(reponses: Array<Reponse>) {
        // tslint:disable-next-line:one-variable-per-declaration
        let currentIndex = reponses.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = reponses[currentIndex];
            reponses[currentIndex] = reponses[randomIndex];
            reponses[randomIndex] = temporaryValue;
        }
        return reponses;
    }

    public getReponses(): Observable<Array<Reponse>> {
        return this.http.get<any>(this._url + this._urlReponse + '/');
    }

// tslint:disable-next-line:typedef
    public itemChecked(event: any) {
        if (event.target.checked) {
            this.shuffle(this.reponses);
        }
    }

    public newType() {
        const x = document.getElementById('id-radio');
        const v = document.getElementById('id-checkbox');
        if (this.question.typeDeQuestion.ref = 't1') {
            if (v.style.display === 'none') {
                v.style.display = 'block';
            }
            // tslint:disable-next-line:no-conditional-assignment
        } else if (this.question.typeDeQuestion.ref = 't2') {
            if (x.style.display === 'none') {
                x.style.display = 'block';
            }
        }
    }

    public Next() {
        this.a = 0;
        for (this.n = 0; this.n < this.selectedItemsRadio.length; this.n = this.n + 1) {
            for (this.m = 0; this.m < this.reponsesCorrect.length; this.m = this.m + 1) {
                // tslint:disable-next-line:triple-equals
                if (this.reponsesCorrect[this.m].ref == this.selectedItemsRadio[this.n].ref) {
                    this.a = this.a + 1;
                }
            }
        }
    }

    public save(): Observable<number> {
        return this.http.post<number>(this._url + this._urlQuestion + '/', this.question);
    }

    public edit(): Observable<Question> {
        return this.http.put<Question>(this._url + this._urlQuestion + '/', this.question);
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    // tslint:disable-next-line:typedef
    public saveQuiz() {
        this.http.post<any>(this._url + this._urlQuiz + '/', this.selected).subscribe(
            data => {
                if (data > 0) {
                    this.items.push(this.cloneQuiz(this.selected));
                } else {
                    console.log('error quiz');
                }
            }
        );
    }

    validateForm() {
        // @ts-ignore
        const x = document.forms.myForm.fname.value;
        // tslint:disable-next-line:triple-equals
        if (x == '' || x == null) {
            alert('Name must be filled out');
            return false;
        }
    }

    public addReponse() {
        this.question.reponses.push(this.cloneRep(this.reponse));
        this.reponse = null;
        /*this.question.pointReponseJuste = null;
        this.question.pointReponsefausse = null;*/

    }
    public questionType() {
        if (this.question.typeDeQuestion.ref == 't1') {
            this.typeQst = 'checkbox';
            document.getElementById('id-checkbox').style.visibility = 'visible';
            document.getElementById('id-radio').style.visibility = 'hidden';
            document.getElementById('id-text').style.visibility = 'hidden';
        } else if (this.question.typeDeQuestion.ref == 't2') {
            this.typeQst = 'radio';
            document.getElementById('id-checkbox').style.visibility = 'hidden';
            document.getElementById('id-radio').style.visibility = 'visible';
            document.getElementById('id-text').style.visibility = 'hidden';
        } else if (this.question.typeDeQuestion.ref == 'C3') {
            this.typeQst = 'text';
            document.getElementById('id-checkbox').style.visibility = 'hidden';
            document.getElementById('id-radio').style.visibility = 'hidden';
            document.getElementById('id-text').style.visibility = 'visible';
        }
    }
    public clone(question: Question) {
        const myQuestion = new Question();
        myQuestion.quiz = question.quiz;
        myQuestion.id = question.id;
        myQuestion.numero = question.numero;
        myQuestion.ref = question.ref;
        myQuestion.libelle = question.libelle;
        myQuestion.typeDeQuestion = question.typeDeQuestion;
        myQuestion.pointReponsefausse = question.pointReponsefausse;
        myQuestion.pointReponseJuste = question.pointReponseJuste;
        myQuestion.reponses = question.reponses;
        return myQuestion;
    }

    public cloneQuiz(quiz: Quiz) {
        const myQuiz = new Quiz();
        myQuiz.id = quiz.id;
        myQuiz.lib = quiz.lib;
        myQuiz.numero = quiz.numero;
        myQuiz.ref = quiz.ref;
        myQuiz.dateDebut = quiz.dateDebut;
        myQuiz.dateFin = quiz.dateFin;
        myQuiz.seuilReussite = quiz.seuilReussite;
        myQuiz.questions = quiz.questions;
        return myQuiz;
    }

    public findRepByQuestion(question: Question) {
        this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/question/numero/' + question.numero).subscribe(
            data => {
                this.question.reponses = data;
            }, error1 => {
                console.log('error loading reponses from questionRef');
            }
        );
    }

    public getReponseByQuestion(question: Question): Observable<Array<Reponse>> {
        return this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/question/numero/' + question.numero);
    }

    public findByNumero() {
        this.findType();
        this.http.get<Question>('http://localhost:8036/centre/question/numero/1').subscribe(
            data => {
                this.question = data;
            }
        );
    }

    public findByQuestionRef() {
        this.j = 1;
        this.j = this.j + 1;
        this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/question/numero/' + this.j).subscribe(
            data => {
                this.question.reponses = data;
            }
        );
    }
public getReponsesByQuestion(question: Question){
        this.a = 1;
        question.numero = this.a;
        this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/question/numero/' + question.numero).subscribe(
            data =>{
                this.question.reponses = data;
            }
        );
}
    public displayTime() {
        return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
    }

    public answerNext() {
        document.getElementById('question').style.visibility = 'visible';
        // tslint:disable-next-line:triple-equals
        if (this.question.typeDeQuestion.ref == 't1') {
            this.typeQst = 'radio';
            document.getElementById('nbrRep').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.visibility = 'visible';
            document.getElementById('reponse-text').style.visibility = 'hidden';
            // tslint:disable-next-line:triple-equals
        } else if (this.question.typeDeQuestion.ref == 't2') {
            document.getElementById('nbrRep').style.visibility = 'visible';
            this.typeQst = 'checkbox';
            this.nbrRep = 'multiple choice';
            document.getElementById('reponse-radio').style.visibility = 'visible';
            document.getElementById('reponse-text').style.visibility = 'hidden';
            // tslint:disable-next-line:triple-equals
        } else if (this.typeQst == 't3') {
            document.getElementById('nbrRep').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.visibility = 'hidden';
            document.getElementById('reponse-radio').style.height = '50px';
            document.getElementById('reponse-text').style.visibility = 'visible';
            this.typeQst = 'text';
        }
    }

    public findByNumeroNext() {
        this.i = this.i + 1;
        this.http.get<Question>('http://localhost:8036/centre/question/numero/' + this.i).subscribe(
            data => {
                this.question = data;
            }
        );
    }

    public findQuizRef() {
        this.http.get<Quiz>('http://localhost:8036/centre/quiz/ref/Q4').subscribe(
            data => {
                this.selected = data;
            }
        );
    }

    public QuizChoose(quiz: Quiz) {
        this.http.get<Array<Question>>(this._url + this._urlQuestion + '/quiz/ref/' + quiz.ref).subscribe(
            data => {
                this.selected.questions = data;
            }, error1 => {
                console.log('error loading questions from quizRef');
            }
        );
    }

    public findType(): Observable<Array<TypeDeQuestion>> {
        return this.http.get<Array<TypeDeQuestion>>(this._url + this._urlType + '/');
    }

    public findQuiz() {
      this.http.get<Array<Quiz>>(this._url + this._urlQuiz + '/').subscribe(
            data => {
                console.log(data);
                // @ts-ignore
                this.items = data;
            }, error1 => {
                console.log('can\'t bring data from database');
            }
        );
    }
public getQuiz(): Observable<Array<Quiz>>{
        return this.http.get<Array<Quiz>>(this._url + this._urlQuiz + '/');
}
    public cloneRep(reponse: Reponse) {
        const mycloneRep = new Reponse();
        mycloneRep.id = reponse.id;
        // @ts-ignore
        mycloneRep.lib = reponse.lib;
        mycloneRep.etatReponse = reponse.etatReponse;
        mycloneRep.ref = reponse.ref;
        // mycloneRep.question = reponse.question;
        return mycloneRep;
    }

    findAll(): void {
        this.http.get<any>(this._url + this._urlQuestion + '/').subscribe(
            data => {
                this.questions = data;
            }, error1 => {
                console.log('error finding data');
            }
        );
    }

    public addTable() {
        const x = document.getElementById('tableRep');
        // @ts-ignore
        if (x.style.display === 'none') {
            // @ts-ignore
            x.style.display = 'block';
        } else {
            // @ts-ignore
            x.style.display = 'block';
        }
    }

    public choixSelected(): void {
        console.log(this.types);
        for (let i = 0; i < this.types.length; i++) {
            // tslint:disable-next-line:triple-equals
            if (this.types[i].lib == this.question.typeDeQuestion.lib) {
                // @ts-ignore
                this.question.typeDeQuestion = this.clone(this.types[i]);
                console.log(this.question.typeDeQuestion.lib);
            }
        }
        console.log(this.question);
        console.log(this.types);
    }

    public quizSelected(): void {
        console.log(this.items);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].ref == this.question.quiz.ref) {
                // @ts-ignore
                this.question.quiz = this.clone(this.items[i]);
                console.log(this.question.quiz.ref);
            }
        }
        console.log(this.question);
        console.log(this.items);
    }

    public defaultchecked() {
        this.reponse.etatReponse = 'Vrai';
    }

    // tslint:disable-next-line:typedef
    public TypeQuestion() {

        if (this.question.typeDeQuestion.ref == 'C1') {
            this.typeQst = 'checkbox';

        } else if (this.question.typeDeQuestion.ref == 'C2') {
            this.typeQst = 'radio';

        } else if (this.question.typeDeQuestion.ref == 'C3') {
            this.typeQst = 'text';
        }
    }

    checked(event: any) {
        if (event.target.checked) {
            this.reponse.etatReponse = 'true';
        }
    }
    public addCard1() {
        const x = document.getElementById('secondCard');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        }
    }
    public checkedFalse(event: any) {
        if (event.target.checked) {
            this.reponse.etatReponse = 'false';
        }
    }
    public addCard(){
        var myDiv = document.getElementById('formCard');
        var myDivClone = myDiv.cloneNode(true);
        document.body.appendChild(myDivClone);
    }
   /* public addCard() {
        const elem = document.getElementById('addCard');
        const elemclone = elem.cloneNode(true);
        elem.appendChild(elemclone);
    }*/
    public deleteCard(index: number) {
        this.questions.splice(index, 1);
    }

    delete(index: number) {
        const reponse = this.reponse[index];
        this.question.reponses.splice(index, 1);
    }


}

