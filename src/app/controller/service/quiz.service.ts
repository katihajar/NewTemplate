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
    private _buildQuestion: any;




    private _timer;
    private _k = -1;
    private _button: string;
    private _typeDeQuestion: TypeDeQuestion;
    private _reponses: Array<Reponse>;
    private _types: Array<TypeDeQuestion>;
    private _items: Array<Quiz>;
    private _question: Question;
    private _reponsesCorrect: Array<Reponse>;
    private _a: number;
    private _m: number;
    private _n: number;
    private _i = 1;
    private _count = 0;
    private _note: number;
    private _questions: Array<Question>;
    public _url = 'http://localhost:8036/';
    public _urlQuestion = 'learn/question';
    private _urlReponse = 'learn/reponse';
    public _urlType = 'learn/TypeDeQuestion';
    private _urlQuiz = 'learn/quiz';
    private _j = 0;
    private _nbrRep: string;
    private _selectedItemsCheckBox: Array<Reponse>;
    private _createDialog: boolean;
    private _configuration: QuizConfig;
    private _configurations: Array<QuizConfig>;
    private _seconds: number;





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
    get buildQuestion(): any {
        return this._buildQuestion;
    }

    set buildQuestion(value: any) {
        this._buildQuestion = value;
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

        return this._typeDeQuestion;
    }

    set type(value: TypeDeQuestion) {
        this._typeDeQuestion = value;
    }

    get reponse(): Reponse {

        return this._reponse;
    }

    set reponse(value: Reponse) {
        this._reponse = value;
    }

    get reponses(): Array<Reponse> {

        return this._reponses;
    }

    set reponses(value: Array<Reponse>) {
        this._reponses = value;
    }

    get question(): Question {

        return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }

    get questions(): Array<Question> {

        return this._questions;
    }

    set questions(value: Array<Question>) {
        this._questions = value;
    }

    constructor(private http: HttpClient) {
    }

    get types(): Array<TypeDeQuestion> {

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


    get items(): Array<Quiz> {
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



    get reponsesCorrect(): Array<Reponse> {
        return this._reponsesCorrect;
    }

    set reponsesCorrect(value: Array<Reponse>) {
        this._reponsesCorrect = value;
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
        this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/criteria/numero/' + this.k).subscribe(
            data => {
                this.reponsesCorrect = data;
            }
        );
    }
    public getAnswers(id, choice) {
        this.reponses = choice;
    }


    shuffle(reponses: Array<Reponse>) {
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

    public itemChecked(event: any) {
        if (event.target.checked) {
            this.shuffle(this.question.reponses);
        }
    }

    public newType() {
        const x = document.getElementById('id-radio');
        const v = document.getElementById('id-checkbox');
        if (this.question.typeDeQuestion.ref == 't1') {
            if (v.style.display === 'none') {
                v.style.display = 'block';
            }
        } else if (this.question.typeDeQuestion.ref == 't2') {
            if (x.style.display === 'none') {
                x.style.display = 'block';
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
    public saveQuiz() {
        this.http.post<any>(this._url + this._urlQuiz + '/', this.selected).subscribe(
            data => {
                if (data > 0) {
                    const cloneQuiz = JSON.parse(JSON.stringify(this.selected));
                    this.items.push(cloneQuiz);
                } else {
                    console.log('error quiz');
                }
            }
        );
    }

    validateForm() {
        // @ts-ignore
        const x = document.forms.myForm.fname.value;

        if (x == '' || x == null) {
            alert('Name must be filled out');
            return false;
        }
    }

    public addReponse() {
        const cloneReponse = JSON.parse(JSON.stringify(this.reponse));
        this.question.reponses.push(cloneReponse);
        this.reponse = null;
    }




    public findReponses() {
        this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/' ).subscribe(
            data => {
                this.question.reponses = data;
            }, error1 => {
                console.log('error loading reponses from questionRef');
            }
        );
    } public findReponses1() {
        this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/' ).subscribe(
            data => {
                this.reponses = data;
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
        this.http.get<Question>('http://localhost:8036/learn/question/numero/1').subscribe(
            data => {
                this.question = data;
            }
        );
    }
    public findByQuestionRef() : Observable<Array<Reponse>>{
        this.j = 1;
        return  this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/question/numero/' + this.j);
    }
    public getReponsesByQuestion(){
        this.question.numero = 1;
        this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/question/numero/' + this.question.numero).subscribe(
            data =>{
                this.question.reponses = data;
            }
        );
    }
    public displayTime() {
        return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
    }
    public findByNumeroNext() {
        this.i = this.i + 1;
        this.http.get<Question>('http://localhost:8036/learn/question/numero/' + this.i).subscribe(
            data => {
                this.question = data;
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
                this.items = data;
            }, error1 => {
                console.log('can\'t bring data from database');
            }
        );
    }
    public getQuiz(): Observable<Array<Quiz>>{
        return this.http.get<Array<Quiz>>(this._url + this._urlQuiz + '/');
    }
    public getQuizIndex(i:number){
        return this.http.get<Array<Quiz>>(this._url + this._urlQuiz + '/').subscribe(
            data =>{
                this.items[i] = data[i];
            }
        );
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

    findReponseIndex(){
        this.http.get<Array<Reponse>>('http://localhost:8036/learn/reponse/question/numero/' + this.j).subscribe(
            data => {
                this.question.reponses = data;
            }
        );
    }
    public addTable() {
        const x = document.getElementById('tableRep');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'block';
        }
    }

    public choixSelected(): void {
        console.log(this.types);
        for (let i = 0; i < this.types.length; i++) {
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

    public deleteCard(index: number) {
        this.questions.splice(index, 1);
    }

    delete(index: number) {
        const reponse = this.reponse[index];
        this.question.reponses.splice(index, 1);
    }


    ProgressBar(event: any) {
        let p = document.getElementById('progressBar');
        if (event.target.checked){
            p.style.visibility = 'visible';
        }else {
            p && p.style.visibility == 'hidden';
        }
    }

    selectQuiz(event: any , i : number) {
        this.findQuiz();
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].lib == this.question.quiz.lib) {
                this.question.quiz = {...this.items[i]};
                console.log(this.question.quiz.lib);
            }
            if (event.target.checked){
                this.findReponseIndex();
                this.getQuizIndex(i);
            }
        }
    }
    public finByQuizRef(quiz : Quiz){
        this.http.get<any>(this._url + this._urlQuestion + '/quiz/ref/' + quiz.ref).subscribe(
            data => {
                this.questions = data;
                console.log(this.questions);
            });

    }


}

