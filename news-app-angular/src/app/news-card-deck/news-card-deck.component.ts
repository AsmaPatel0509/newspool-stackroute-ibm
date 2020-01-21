import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Params, UrlSegment, Router } from '@angular/router';
import 'bootstrap';


@Component({
  selector: 'app-news-card-deck',
  templateUrl: './news-card-deck.component.html',
  styleUrls: ['./news-card-deck.component.css']
})
export class NewsCardDeckComponent implements OnInit {


  mArticles: Array<any>;
  headerArticles: Array<any>;
  articleSet: Array<any>;
  uniqueArticle: Array<any>;

  headerComponent: HeaderComponent;
  category: string = "general";
  country: string = "in";
  language: string = "en";
  errorMessage: string = "Data not found of your Request";

  fromDate = new Date();
  toDate = new Date();

  keyword: string;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let url = this.activatedRoute.url;

    if (this.router.url === "/news") {
      this.newsService.getLatestNews().subscribe(
        data => {
          this.mArticles = data['articles'];
          this.articleSet = Array.from(new Set(this.mArticles.map((item: any) => item.title)));
        }
        , error => {
          if (error.status === 404) {
            this.errorMessage = "Not found";
          }
          if (error.status === 403) {
            this.errorMessage = "Unauthorized";
          }
        }
      )
    }

    if (this.router.url.match("/category/*")) {
      this.activatedRoute.params.subscribe((str: UrlSegment[]) => {
        this.newsService.getCategoryNews(str['categoryname']).subscribe(
          data => {
            this.mArticles = data['articles'];
            this.articleSet = Array.from(new Set(this.mArticles.map((item: any) => item.title)));
          }
          , error => {
            if (error.status === 404) {
              this.errorMessage = "Not found";
            }
            if (error.status === 403 || error.status === 401) {
              this.errorMessage = "Unauthorized";
            }
          })
      })
    }

    if (this.router.url.match("/country/*")) {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.country = params['countryname'];
          this.newsService.getCountryNews(this.country).subscribe(
            data => {
              this.mArticles = data['articles'];
              this.articleSet = Array.from(new Set(this.mArticles.map((item: any) => item.title)));
            }, error => {
              if (error.status === 404) {
                this.errorMessage = "Not found";
              }
              if (error.status === 403) {
                this.errorMessage = "Unauthorized";
              }
            })
        }
      )
    }

    if (this.router.url.match("/language/*")) {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.language = params['languagename'];
          this.newsService.getLanguageNews(this.language).subscribe(
            data => {
              this.mArticles = data['articles'];
              this.articleSet = Array.from(new Set(this.mArticles.map((item: any) => item.title)));
            }
            , error => {
              if (error.status === 404) {
                this.errorMessage = "Not found";
              }
              if (error.status === 403) {
                this.errorMessage = "Unauthorized";
              }
            }
          )
        }
      )
    }

    if (this.router.url.match("/search/*")) {
      this.activatedRoute.params.subscribe((str: UrlSegment[]) => {
        this.newsService.getSearchNews(str['keyword']).subscribe(
          data => {
            this.mArticles = data['articles'];
            this.articleSet = Array.from(new Set(this.mArticles.map((item: any) => item.title)));
          }, error => {
            if (error.status === 404) {
              this.errorMessage = "Not found";
            }
            if (error.status === 403) {
              this.errorMessage = "Unauthorized";
            }
          })
      })
    }

      //from:fromDate/to:toDate/country:countryname/category:categoryname
    if (this.router.url.match("/from/*/to/*/country/*/category/*")) {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.country = params['countryname'],
            this.category = params['categoryname'],
            this.fromDate = params['fromDate'],
            this.toDate = params['toDate'];
          this.newsService.getDateWiseNews(this.country, this.category, this.fromDate, this.toDate).subscribe(
            data => {
              this.mArticles = data['articles'];
              this.articleSet = Array.from(new Set(this.mArticles));
            }, error => {
              if (error.status === 404) {
                this.errorMessage = "Not found";
              }
              if (error.status === 403) {
                this.errorMessage = "Unauthorized";
              }
            }
          )
        }
      )
    }

    if (this.router.url.match("/category/*country/*/")) {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.category = params['categoryname'],
            this.country = params['countryname'];
          this.newsService.getCountryAndCategoryNews(this.country, this.category).subscribe(
            data => {
              this.mArticles = data['articles'];
              this.articleSet = Array.from(new Set(this.mArticles));
            }, error => {
              if (error.status === 404) {
                this.errorMessage = "Not found";
              }
              if (error.status === 403) {
                this.errorMessage = "Unauthorized";
              }
            }
          )
        }
      )
    }
  }

}