import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BookmarksService } from './bookmarks.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('BookmarksService', () => {

  // let component: BookmarksService;
  // let fixture: ComponentFixture<BookmarksService>;

  // let bookmarkServiceInstace: BookmarksService = TestBed.get(BookmarksService);
  // let httpMock: HttpTestingController = TestBed.get(HttpTestingController);
  // let dummyData = {
  //   userName: 'demo@gmail.com',
  //   title: 'demo title',
  //   url: 'www.google.com',
  //   urlToImage: '../assets/news.png',
  //   sourceName: 'demo source name',
  //   publishedAt: 'demo',
  //   bookmarkId: 1000
  // };

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule, HttpTestingController],
  //     providers: [BookmarksService]
    
  //   }).compileComponents();
  // }));

  // beforeEach(() => {
  //   bookmarkServiceInstace = TestBed.get(BookmarksService);
  //   httpMock = TestBed.get(HttpTestingController);

  //   fixture = TestBed.createComponent(BookmarksService);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should be initiated', () => {
  //   bookmarkServiceInstace = TestBed.get(BookmarksService);
  //   expect(bookmarkServiceInstace).toBeTruthy();
  // });

  // it('should call method add to bookmarks', () => {
  //   httpMock = TestBed.get(HttpTestingController);

  //   const newData = {
  //     userName: 'demo@gmail.com',
  //     title: 'demo title',
  //     url: 'www.google.com',
  //     urlToImage: '../assets/news.png',
  //     sourceName: 'demo source name',
  //     publishedAt: 'demo',
  //     bookmarkId: 1000
  //   };

  //   bookmarkServiceInstace.addToBookmarks(newData).subscribe(data => {
  //     expect(data).toEqual([newData]);
  //   })

  //   const reuest = httpMock.expectOne({
  //     url: 'http://localhost:8085/articles/bookmarks/addtobookmarks',
  //     method: 'POST'
  //   })

  //   reuest.flush(newData);

  //   expect(reuest.request.body).toEqual(newData);

  //   bookmarkServiceInstace.getBookmarks('demo@gmail.com').subscribe(fetchData => {

  //   expect(fetchData).toEqual([dummyData,newData]);
  //   })
  // });

});
