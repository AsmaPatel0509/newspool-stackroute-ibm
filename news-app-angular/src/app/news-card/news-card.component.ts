import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmarks } from '../bookmarks';
import { error } from 'protractor';
import 'bootstrap';
import { AuthenticationService } from '../services/authentication.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  mArticles: Set<any>;
  bookmarks: Bookmarks;
  errorMessage: string;

  constructor(private newsapi: NewsService, private bookmarkService: BookmarksService,
    private authenticationService: AuthenticationService, private routingService: RoutingService) { }

  @Input() mArticle: any;
  // mSources: Array<any>;

  ngOnInit() {
    const flag = true;
  }

  addToBookmarks(article) {
      if(sessionStorage.getItem('token') != null){
        this.bookmarks = article;
        console.log("Bookmark: ")
        console.log(this.bookmarks);
        this.bookmarks.userName = sessionStorage.getItem('username');
        this.bookmarkService.addToBookmarks(this.bookmarks).subscribe(
          data => {
            data = article;
            console.log("Add bookmark data: " + data)
          },
          error => {
            if(error.status === 404){
              this.errorMessage = "Not found";
            }
            if(error.status === 403){
              this.errorMessage = "Unauthorized";
            }
          }          
      )
    }
    else {
      this.routingService.routeToLogin();
    }
  }
}
