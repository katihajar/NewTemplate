import {Injectable} from '@angular/core';
import {Reponse} from '../model/reponse.model';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {TypeDeQuestion} from '../model/type-de-question.model';
import {Quiz} from '../model/quiz.model';
import {Observable} from 'rxjs';
import {QuizConfig} from "../model/quiz-config.model";
import {ReponseEtudiant} from "../model/reponse-etudiant.model";
import {QuizEtudiant} from "../model/quiz-etudiant.model";




@Injectable({
    providedIn: 'root'
})
export class QuizService {


    private _selected: Quiz;
    private _items: Array<Quiz>;
    private _qnprogress: number;
    private _reponse: Reponse;
    private _viewDialog: boolean;
    private _timer;
    private _button: string;
    private _typeDeQuestion: TypeDeQuestion;
    private _reponses: Array<Reponse>;
    private _types: Array<TypeDeQuestion>;
    private _question: Question;
    private _questions: Array<Question>;
    public _url = 'http://localhost:8036/';
    public _urlQuestion = 'learn/question';
    private _urlReponse = 'learn/reponse';
    public _urlType = 'learn/TypeDeQuestion';
    private _urlQuiz = 'learn/quiz';
    private _j = 0;
    private _createDialog: boolean;
    private _configuration: QuizConfig;
    private _configurations: Array<QuizConfig>;
    private _seconds: number;
    private _numCorrectAnswers= 0;
    private _correctAnswers: Array<Reponse>;
    private _typeQuestion: string;
    private _typeReponse: string;




    get typeReponse(): string {
        return this._typeReponse;
    }

    set typeReponse(value: string) {
        this._typeReponse = value;
    }

    get typeQuestion(): string {
        return this._typeQuestion;
    }

    set typeQuestion(value: string) {
        this._typeQuestion = value;
    }
    get configuration(): QuizConfig {
        if (this._configuration == null){
            this._configuration = new QuizConfig();
        }
        return this._configuration;
    }

    set configuration(value: QuizConfig) {
        this._configuration = value;
    }

    get configurations(): Array<QuizConfig> {
        if (this._configurations == null){
            this._configurations = new Array<QuizConfig>();
        }
        return this._configurations;
    }

    set configurations(value: Array<QuizConfig>) {
        this._configurations = value;
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

    get correctAnswers(): Array<Reponse> {
        if (this._correctAnswers == null){
            this._correctAnswers =new Array<Reponse>();
        }
        return this._correctAnswers;
    }

    set correctAnswers(value: Array<Reponse>) {
        this._correctAnswers = value;
    }
    get type(): TypeDeQuestion {

        return this._typeDeQuestion;
    }

    set type(value: TypeDeQuestion) {
        this._typeDeQuestion = value;
    }

    get numCorrectAnswers(): number {
        return this._numCorrectAnswers;
    }

    set numCorrectAnswers(value: number) {
        this._numCorrectAnswers = value;
    }
    get reponse(): Reponse {
if (this._reponse == null){
    this._reponse = new Reponse();
}
        return this._reponse;
    }

    set reponse(value: Reponse) {
        this._reponse = value;
    }

    get reponses(): Array<Reponse> {
        if (this._reponses == null){
            this._reponses = new Array<Reponse>();
        }
        return this._reponses;
    }

    set reponses(value: Array<Reponse>) {
        this._reponses = value;
    }

    get question(): Question {
 if (this._question == null){
     this._question = new Question();
 }
        return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }

    get questions(): Array<Question> {
   if (this._questions == null){
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

        return this._types;
    }

    set types(value: Array<TypeDeQuestion>) {
        this._types = value;
    }

    get selected(): Quiz {
if (this._selected == null){
    this._selected = new Quiz();
}
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

    get button(): string {
        return this._button;
    }

    set button(value: string) {
        this._button = value;
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
    shuffleQuestion(questions: Array<Question>) {
        let currentIndex = questions.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = questions[currentIndex];
            questions[currentIndex] = questions[randomIndex];
            questions[randomIndex] = temporaryValue;
        }
        return questions;
    }
    public getReponses(): Observable<Array<Reponse>> {
        return this.http.get<any>(this._url + this._urlReponse + '/');
    }
public saveConfig() : Observable<QuizConfig>{
        return this.http.post<QuizConfig>(this._url + 'learn/quizConfig/' , this.configuration);
}
public findConfig() : Observable<Array<QuizConfig>>{
        return this.http.get<Array<QuizConfig>>(this._url + 'learn/quizConfig/');
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


    public save(): Observable<Question> {
        return this.http.post<Question>(this._url + this._urlQuestion + '/', this.question);
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
    public saveQuiz(): Observable<Quiz>{
 return this.http.post<Quiz>(this._url + this._urlQuiz + '/' ,  this.selected);
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

    public displayTime() {
        return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
    }


    public findType(): Observable<Array<TypeDeQuestion>> {
        return this.http.get<Array<TypeDeQuestion>>(this._url + this._urlType + '/');
    }

    public findQuiz() {
        this.http.get<any>(this._url + this._urlQuiz + '/').subscribe(
            data => {
                console.log(data);
                this.items = data;
            }, error1 => {
                console.log('can\'t bring data from database');
            }
        );
    }

    findAll(): void {
        this.http.get<any>(this._url + this._urlQuestion + '/').subscribe(
            data => {
                this.questions = data;
                        if(this.question.typeDeQuestion.ref == 't1')
                        {
                            this.typeReponse = 'radio';
                        }
                        else if(this.question.typeDeQuestion.ref == 't2')
                        {
                            this.typeReponse = 'checkbox';
                        }
                        /*console.log('bara' + this.selected.typeDeQuestion.ref);
                        if(data.typeDeQuestion.ref == 't1')
                        {
                          console.log('hada da5l t1');
                          document.getElementById('checkbox').style.visibility = 'hidden';
                          document.getElementById('radio').style.visibility = 'visible';
                        }
                        else if(data.typeDeQuestion.ref == 't2')
                        {
                          console.log('hada da5l t2');

                          console.log('1');
                          document.getElementById('radio').style.visibility = 'hidden';
                          console.log('1');
                        }*/

            }, error1 => {
                console.log('error finding data');
            }
        );
    }
public findFirstReponse(){
        this.j = 1 ;
    this.http.get<any>('http://localhost:8036/learn/reponse/question/numero/' + this.j).subscribe(
        data => {
            this.reponses = data;
        }
        );
    }

  public  findReponse(h: number){
        this.http.get<any>('http://localhost:8036/learn/reponse/question/numero/' + h).subscribe(
            data => {
                this.reponses = data;
            }
        );
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

    public checkedFalse(event: any) {
        if (event.target.checked) {
            this.reponse.etatReponse = 'false';
        }
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

    public findCorrectAnswers(): Observable<Array<Reponse>>
    {
        this.numCorrectAnswers = this.numCorrectAnswers + 1;
        return this.http.get<Array<Reponse>>(this._url + this._urlReponse + '/criteria/numero/' + this.numCorrectAnswers);
    }
    public findFirstQuestion(): Observable<Question>
    {
        return this.http.get<Question>(this._url + 'learn/question/numero/1');
    }
}

