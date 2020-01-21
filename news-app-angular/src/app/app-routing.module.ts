import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewsCardDeckComponent } from './news-card-deck/news-card-deck.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './authentication.guard';
import { SourcesComponent } from './sources/sources.component';


const routes: Routes = [
  {
    path: '', redirectTo:'news', pathMatch: 'full'
  },
  {
    path: 'login', component:SignupLoginComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path:'news', component:NewsCardDeckComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'bookmarks', component:BookmarksComponent
  },
  {
    path:'category/:categoryname', component:NewsCardDeckComponent
  },
  {
    path:'country/:countryname', component:NewsCardDeckComponent
  },
  {
    path:'language/:languagename', component:NewsCardDeckComponent
  },
  {
    path:'search/:keyword', component:NewsCardDeckComponent
  },
  {
    path:'category/:categoryname/country/:countryname', component:NewsCardDeckComponent
  },
  {
    path:'sources', component:SourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
