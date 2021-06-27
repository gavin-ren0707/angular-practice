import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit 478';
  subtitle = 'A place to share your <u>knowledge</u>.';
  keyword = '';
  list:any[];
  articles:Article[]=[];
  constructor(
    public dataService:DataService
  ) {
  }

  ngOnInit() {
      this.dataService.getArticles('').pipe(
         map(data => data.articles)
      ).subscribe(articles =>{
          this.articles = articles;
      })
  }

  searchArticle(keyword:string) {
     this.dataService.searchArticles(keyword);
     this.articles = this.dataService.articles;   //更新值,不然會抓不到
  }

}
