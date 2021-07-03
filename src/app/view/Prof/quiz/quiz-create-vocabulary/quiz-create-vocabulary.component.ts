import { Component, OnInit } from '@angular/core';
import {VocabularyService} from "../../../../controller/service/vocabulary.service";
import {Vocabulary} from "../../../../controller/model/vocabulary.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Section} from "../../../../controller/Model/section.model";



@Component({
  selector: 'app-quiz-create-vocabulary',
  templateUrl: './quiz-create-vocabulary.component.html',
  styleUrls: ['./quiz-create-vocabulary.component.scss'],
  providers: [VocabularyService]
})
export class QuizCreateVocabularyComponent implements OnInit {
  fileToUpload: File = null;
  url: "assets/demo/images/product/blue-t-shirt.jpg";
urls=[];
  constructor(private service: VocabularyService,private messageService: MessageService,private confirmationService: ConfirmationService) { }
  public result = '';
  private btnSubmit: any;






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
  get sectionSelected(): Section {
    return this.service.sectionSelected;
  }
  set sectionSelected(value: Section) {
    this.service.sectionSelected = value;
  }
  get items(): Array<Vocabulary> {
    return this.service.items;
  }

  set items(value: Array<Vocabulary>) {
    this.service.items = value;
  }
  ngOnInit(): void {
    console.log(this.sectionSelected.id);
    this.items.push(this.selected);
    this.btnSubmit = document.getElementById('btnSubmit');
   // this.service.findAll().subscribe(data => this.items = data);
  }


  public save() {
    this.submitted = true;
    this.service.save().subscribe(data => {
        this.items.push({...data});
        console.log(data);

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Vocabulary Created',
          life: 3000
   })
      });

      this.selected = null;

  }
  public edit() {
    this.submitted = true;

      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Vocabulary Updated',
            life: 3000
          });
        });
      }

      this.selected = new Vocabulary();

  }
  public delete(selected: Vocabulary) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByReference().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Vocabulary();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Vocabulary Deleted',
            life: 3000
          });
        });
      }
    });
  }
  handleFileInput(event) {
    if (event.target.files){
      for (let i=0; i>File.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload=(events:any)=>{
          this.urls.push(events.target.result);
        }
      }

    }


}
public finByRef(selected : Vocabulary){
    this.service.findByRef(selected).subscribe( data => this.selected = data);
    console.log(this.selected);
}
public sound(word :string){
let text = encodeURIComponent(word);
console.log(text);
var url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q='+text+'&tl=En-gb';
var audio = new Audio(url);
audio.play();
}
  public sound1(word :string){
    let text = encodeURIComponent(word);
    console.log(text);
    var url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q='+text+'&tl=ar';
    var audio = new Audio(url);
    audio.play();
  }

}