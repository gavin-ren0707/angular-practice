import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  hightlightTitle = false;
  counter = 9;
  // 同時綁定屬性跟事件
  @Output() keywordChange = new EventEmitter<string>();
  @Input() keyword = 'test';
  @Output() search = new EventEmitter<string>();

  constructor(
    public dataService:DataService
  ) {}

  ngOnInit(): void {}

  addTitleKey() {
    console.log('666', this.keyword);
  }

  doSearch(event: MouseEvent) {
    //this.keywordChange.emit(this.keyword);
    //this.dataService.searchArticles(this.keyword);
    this.search.emit(this.keyword);
    console.log('777', event);
    this.hightlightTitle = !this.hightlightTitle; //加了一個hightlight屬性,是否要顯示樣式
    ++this.counter;
  }

  keyWordInput(){
     this.keywordChange.emit(this.keyword);
  }


}
