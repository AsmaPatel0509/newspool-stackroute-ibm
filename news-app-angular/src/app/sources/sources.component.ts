import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  constructor(private newsService : NewsService) { }

  sources:Array<any>;
  mArticles:Array<any>;

  ngOnInit() {

    this.newsService.getSources().subscribe(
      data => {
        this.sources = data['sources'];
        console.log(this.sources)
      }
    )
  }

  getSourceNews(source:string){
    console.log(source);
    this.newsService.getSourceBasedNews(source).subscribe(
      data => {
        this.mArticles = data['articles'];
      }
    )
  }

}
