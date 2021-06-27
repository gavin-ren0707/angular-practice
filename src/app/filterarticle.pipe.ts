import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';

@Pipe({
  name: 'filterarticle'
})
export class FilterarticlePipe implements PipeTransform {

  transform(value:Article[],keyword:string): Article[] {
    return this.dataService.filterArticles(value,keyword);
  }

  constructor(private dataService:DataService){

  }

}
