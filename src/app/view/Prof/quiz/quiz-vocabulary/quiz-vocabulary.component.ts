import { Component, OnInit } from '@angular/core';
import {VocabularyService} from "../../../../controller/service/vocabulary.service";
import {Vocabulary} from "../../../../controller/model/vocabulary.model";

@Component({
  selector: 'app-quiz-vocabulary',
  templateUrl: './quiz-vocabulary.component.html',
  styleUrls: ['./quiz-vocabulary.component.scss']
})
export class QuizVocabularyComponent implements OnInit {

  constructor(private service: VocabularyService) { }
  private _button: string;
  private _numVocabulary = 1;
  private _qnprogress =0;
  private _seconds: number;
  private _timer;
  private word:string = '';
  private note: number =0;
  result:string;

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

  get qnprogress(): number {
    return this._qnprogress;
  }

  set qnprogress(value: number) {
    this._qnprogress = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get numVocabulary(): number {
    return this._numVocabulary;
  }

  set numVocabulary(value: number) {
    this._numVocabulary = value;
  }


  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get selected(): Vocabulary {
    return this.service.selected;
  }
  set selected(value: Vocabulary) {
    this.service.selected = value;
  }
  get items(): Array<Vocabulary> {
    return this.service.items;
  }

  set items(value: Array<Vocabulary>) {
    this.service.items = value;
  }
  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
        this.items = data;
        console.log(this.items);
    });
   // this.service.findByVocabularyQuizRef(this.selected).subscribe(data => this.items = data);
    this.seconds = 0;
    this.qnprogress = 0;
    this.startTimer();
  }
  public displayTime() {
    return Math.floor(this.seconds / 3600) + ' Hs  ' + Math.floor(this.seconds / 60) + '  :Min  ' + Math.floor(this.seconds % 60) + '  s';
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }
  public start(){
   /* this.service.findByFirstNumero().subscribe(data =>{
      this.selected =data;
      console.log(this.selected);
    });*/
    document.getElementById('start').remove();
    document.getElementById('vocabulary').style.visibility = 'visible';
    this.button = 'Next';

  }

  public flip(d : string, v: string) {
   let t= String(d);
    let f = String(v);
         if (t.valueOf().trim() == f.valueOf().trim()){
           document.getElementById('translated').style.visibility = 'visible';
           document.getElementById('image').style.filter = 'blur(0px)';
           document.getElementById('correct').style.visibility = 'visible';
           this.note = this.note + 1;
          }
          else {
           document.getElementById('incorrect').style.visibility = 'visible';
           document.getElementById('filpAnyway').style.visibility = 'visible';
          }
  }
public flipAnyway(){
  document.getElementById('translated').style.visibility = 'visible';
  document.getElementById('image').style.filter = 'blur(0px)';
}
  next() {
    this.qnprogress ++;
    document.getElementById('translated').style.visibility = 'hidden';
    document.getElementById('image').style.filter = 'blur(15px)';
  /*  this.service.findByNextNumero().subscribe(data =>{
      this.selected = data;
      console.log(this.selected);
    });*/
    if (this.qnprogress == this.items.length-1)
    {
      this.button = 'Finish the test';
    }
    else if (this.qnprogress == this.items.length)
    {
      document.getElementById('vocabulary').style.visibility = 'hidden';
      document.getElementById('mainCard').style.visibility = 'visible';
      document.getElementById('translated').style.visibility = 'hidden';

    }
    this.result = null;
    document.getElementById('filpAnyway').style.visibility = 'hidden';
    document.getElementById('incorrect').style.visibility = 'hidden';
    document.getElementById('correct').style.visibility = 'hidden';
  }
public getWord(d : string, v: string){
    console.log(d);
    console.log(v);
}
  public sound(word :string){
    let text = encodeURIComponent(word);
    console.log(text);
    var url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q='+text+'&tl=En-gb';
    var audio = new Audio(url);
    audio.play();
  }

}
