import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { RoutingService } from '../services/routing.service';
import { BookmarksService } from '../services/bookmarks.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'bootstrap';
import { AuthenticationService } from '../services/authentication.service';

export interface Country {
  name: String;
  value: String;
}
export interface Language {
  name: String;
  value: String;
}
export interface Category {
  name: String;
  value: String;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mArticles: Array<any>;
  articleSet = new Set();
  languageArr:Array<any>;
  categoryArr:Array<any>;
  username:string;
  // isloggedin:boolean;
  isloggedin = this.authservice.isLoggedIn;


  lang: string = 'en';
  country: string = 'in';
  categ: string = 'general';

  fromDate : string = Date.now().toString();
  toDate : string = Date.now().toString();
  flag : boolean = false;
  activatedRouter: any;

  constructor(private routingService: RoutingService,private router:Router, private authservice : AuthenticationService){}
  ngOnInit() {}

  categories: Category[] = [
    { name: 'General', value: 'general' },
    { name: 'Sports', value: 'sports' },
    { name: 'Business', value: 'business' },
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'Science', value: 'science' },
    { name: 'Technology', value: 'technology' },
    { name: 'Health', value: 'health' }
  ]

  countries: Country[] = [
    
    { name: 'India', value: 'in' },
    { name: 'UAE', value: 'ae' },
    { name: 'Argentina', value: 'ar' },
    { name: 'Austria', value: 'at' },
    { name: 'Australia', value: 'au' },
    { name: 'Belgium', value: 'be' },
    { name: 'Brazil', value: 'br' },
    { name: 'Bulgaria', value: 'bg' },
    { name: 'Canada', value: 'ca' },
    { name: 'China', value: 'cn' },
    { name: 'Colombia', value: 'co' },
    { name: 'Cuba', value: 'cu' },
    { name: 'Czech Republic', value: 'cz' },
    { name: 'Egypt', value: 'eg' },
    { name: 'France', value: 'fr' },
    { name: 'Germany', value: 'de' },
    { name: 'Greece', value: 'gr' },
    { name: 'HongKong', value: 'hk' },
    { name: 'Hungary', value: 'hu' },
    { name: 'India', value: 'in' },
    { name: 'Indonesia', value: 'id' },
    { name: 'Ireland', value: 'ie' },
    { name: 'Israel', value: 'il' },
    { name: 'Italy', value: 'it' },
    { name: 'Japan', value: 'jp' },
    { name: 'Latvia', value: 'lv' },
    { name: 'Lithuania', value: 'lt' },
    { name: 'Malaysia', value: 'my' },
    { name: 'Mexico', value: 'mx' },
    { name: 'Morocco', value: 'ma' },
    { name: 'Netherlands', value: 'nl' },
    { name: 'New Zealand', value: 'nz' },
    { name: 'Nigeria', value: 'ng' },
    { name: 'Norway', value: 'no' },
    { name: 'Philippines', value: 'ph' },
    { name: 'Poland', value: 'pl' },
    { name: 'Portugal', value: 'pt' },
    { name: 'Romania', value: 'ro' },
    { name: 'Russia', value: 'ru' },
    { name: 'Saudi Arabia', value: 'sa' },
    { name: 'Siberia', value: 'rs' },
    { name: 'Singapore', value: 'sg' },
    { name: 'Slovenia', value: 'si' },
    { name: 'Slokovia', value: 'sk' },
    { name: 'South Africa', value: 'za' },
    { name: 'South Korea', value: 'kr' },
    { name: 'Sweden', value: 'se' },
    { name: 'Switzerland', value: 'ch' },
    { name: 'Taiwan', value: 'tw' },
    { name: 'Thailand', value: 'th' },
    { name: 'Turkey', value: 'tr' },
    { name: 'UAE', value: 'ae' },
    { name: 'Ukraine', value: 'ua' },
    { name: 'United Kingdom', value: 'gb' },
    { name: 'United States', value: 'us' },
    { name: 'Venuzuela', value: 've' }
  ]

  languages: Language[] = [
    { name: 'Arabic', value: 'ar' },
    { name: 'Chinese', value: 'zh' },
    { name: 'Dutch', value: 'nl' },
    { name: 'English', value: 'en' },
    { name: 'French', value: 'fr' },
    { name: 'German', value: 'de' },
    { name: 'Hebrew', value: 'he' },
    { name: 'Italian', value: 'it' },
    { name: 'Northern Sami', value: 'se' },
    { name: 'Norwegian', value: 'no' },
    { name: 'Portugese', value: 'pt' },
    { name: 'Russian', value: 'ru' },
    { name: 'Spanish', value: 'es' },
  ]


  getSearchNews(keyword) {
    console.log("Keyword: " + keyword.value);
    this.router.navigateByUrl(`/search/${keyword.value}`);
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    console.log("logout");
    // this.routingService.routeToLogin();
  }

  viewBookmarks() {
    this.routingService.routeToBookmarks();
  }

  watchNews() {
    console.log("Watch News: ");
  }

  isLoggedIn(){
    this.isloggedin = this.authservice.isLoggedIn;
  }
  
  setFlag(value)
  {
    this.flag = value ;
  }

  userAuthenticationCheck() {
    this.authservice.isUserAuthenticated();
  }

}
