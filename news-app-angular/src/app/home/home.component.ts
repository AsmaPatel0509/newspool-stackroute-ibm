import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Country, Category, HeaderComponent } from '../header/header.component';
import { FormGroup, FormControl } from '@angular/forms';
import { count } from 'rxjs/operators';
import { error } from 'protractor';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, Country, Category {

  name: String;
  value: String;
  errorMessage: string;
  mArticles: Array<any>;
  dateForm: FormGroup;

  fromDate = new FormControl();
  toDate = new FormControl();
  
  country = new FormControl();
  category = new FormControl();

  

  constructor(private newsService: NewsService, private routingService : RoutingService) { }

  ngOnInit() {

    if(sessionStorage.getItem("token") != null){

      this.fromDate = new FormControl(''),
      this.toDate = new FormControl(''),
      
      this.country = new FormControl(''),
      this.category = new FormControl(''),
      
      this.dateForm = new FormGroup(
      {
        fromDate: this.fromDate,
        toDate: this.toDate,
        country: this.country,
        category: this.category
      })
    }
    else{
      this.routingService.routeToLogin();
    }

     

  }

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
    { name: 'UAE', value: 'ae' },
    { name: 'Argentina', value: 'ar' },
    { name: 'Austria', value: 'at' },
    { name: 'Australia', value: 'au' },
    { name: 'Belgium', value: 'be' },
    { name: 'Bulgaria', value: 'bg' },
    { name: 'Brazil', value: 'br' },
    { name: 'Canada', value: 'ca' },
    { name: 'Switzerland', value: 'ch' },
    { name: 'China', value: 'cn' },
    { name: 'Colombia', value: 'co' },
    { name: 'Cuba', value: 'cu' },
    { name: 'Czech Republic', value: 'cz' },
    { name: 'Germany', value: 'de' },
    { name: 'Egypt', value: 'eg' },
    { name: 'France', value: 'fr' },
    { name: 'United Kingdom', value: 'gb' },
    { name: 'Greece', value: 'gr' },
    { name: 'HongKong', value: 'hk' },
    { name: 'Hungary', value: 'hu' },
    { name: 'Indonesia', value: 'id' },
    { name: 'Ireland', value: 'ie' },
    { name: 'Israel', value: 'il' },
    { name: 'India', value: 'in' },
    { name: 'Italy', value: 'it' },
    { name: 'Japan', value: 'jp' },
    { name: 'South Korea', value: 'kr' },
    { name: 'Lithuania', value: 'lt' },
    { name: 'Latvia', value: 'lv' },
    { name: 'Morocco', value: 'ma' },
    { name: 'Mexico', value: 'mx' },
    { name: 'Malaysia', value: 'my' },
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
    { name: 'South Africa', value: 'za' },
    { name: 'Sweden', value: 'se' },
    { name: 'Singapore', value: 'sg' },
    { name: 'Slovenia', value: 'si' },
    { name: 'Slokovia', value: 'sk' },
    { name: 'Thailand', value: 'th' },
    { name: 'Turkey', value: 'tr' },
    { name: 'Taiwan', value: 'tw' },
    { name: 'Ukraine', value: 'ua' },
    { name: 'United States', value: 'us' },
    { name: 'Venuzuela', value: 've' }
  ]

  dateSubmit() {

    console.log("date submit values: ");
    console.log(this.dateForm.value);
    console.log(this.fromDate.value);
    console.log(this.toDate.value);
    console.log(this.country.value);
    console.log(this.category.value);

    this.newsService.getDateWiseNews(this.country.value, this.category.value, this.fromDate.value, this.toDate.value).subscribe(
      data => {
        if (data == null) {
          this.errorMessage = "No news found from date : "+this.fromDate.value+" to date ;"+this.toDate.value;
          console.log("Empty")
          console.log(data)
        } else {
          this.mArticles = data['articles'];
          console.log("Subscribe")
        }
      }, error => {
        if (error.status === 404) {
          this.errorMessage = "Not found";
        }
        if (error.status === 403) {
          this.errorMessage = "Unauthorized";
        }
        console.log("Error in fetching date wise old news: " + error);
      }
    )
  }
}
