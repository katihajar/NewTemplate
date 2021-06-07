import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../../controller/service/news.service';
import {News} from '../../../../controller/model/news.model';

@Component({
  selector: 'app-news-admin-list',
  templateUrl: './news-admin-list.component.html',
  styleUrls: ['./news-admin-list.component.scss']
})
export class NewsAdminListComponent implements OnInit {

  private _image: '';


  get image(): "" {
    return this._image;
  }

  set image(value: "") {
    this._image = value;
  }

  get items(): Array<News> {
    return this.service.items;
  }

  set items(value: Array<News>) {
    this.service.items = value;
  }

  get selected(): News {
    return this.service.selected;
  }

  set selected(value: News) {
    this.service.selected = value;
  }

  get viewDialogNews(): boolean {
    return this.service.viewDialogNews;
  }

  set viewDialogNews(value: boolean) {
    this.service.viewDialogNews = value;
  }

  get selectes(): Array<News> {
    return this.service.selectes;
  }

  set selectes(value: Array<News>) {
    this.service.selectes = value;
  }

  get createDialogNews(): boolean {
    return this.service.createDialogNews;
  }

  set createDialogNews(value: boolean) {
    this.service.createDialogNews = value;
  }

  get editDialogNews(): boolean {
    return this.service.editDialogNews;
  }

  set editDialogNews(value: boolean) {
    this.service.editDialogNews = value;
  }

  get submittedNews(): boolean {
    return this.service.submittedNews;
  }

  set submittedNews(value: boolean) {
    this.service.submittedNews = value;
  }

  public view(newss: News) {
    this.selected = {...newss};
    this.viewDialogNews = true ;
  }

  public findByRef()
  {
    this.service.findByRef().subscribe(data => {
      this.selected = data;
    });
  }
  public openCreate() {
    this.selected = new News();
    this.submittedNews = false;
    this.createDialogNews = true;
  }


  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(
        data => {
          this.items = data;
          /*console.log(this.items[0].image);
          for(let i = 0 ; i < 60; i++)
          {
            this.image += this.items[0].image[i];
          }
          this.image += 'preview';
          console.log(this.image);*/
        });
  }

}
