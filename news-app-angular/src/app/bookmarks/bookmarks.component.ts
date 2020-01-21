import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmarks } from '../bookmarks';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  username: string;
  bookmarkData: Array<any>;
  errorMessage:string;

  constructor(private bookmarkService: BookmarksService) { }

  ngOnInit() {
    this.getBookmarks();

  }

  getBookmarks() {
    console.log("View bookmarks: ");
    this.username = sessionStorage.getItem('username');
    console.log(sessionStorage.getItem('username'));
    if (this.username != null) {
      this.bookmarkService.getBookmarks(this.username).subscribe(
        data => {
          console.log(data)
          this.bookmarkData = data;
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
  }
  deleteBookmark(deleteId) {
    console.log("Delete bookmark with ID: " + deleteId);
    this.username = sessionStorage.getItem('username');
    this.bookmarkService.deleteBookmark(deleteId).subscribe(
      data => {
        console.log("Delete")
        this.getBookmarks();
      }, error => {
        console.log("Error: " + error);
      }
    )
  }

}
