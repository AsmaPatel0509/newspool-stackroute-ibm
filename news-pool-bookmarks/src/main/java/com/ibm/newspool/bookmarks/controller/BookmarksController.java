package com.ibm.newspool.bookmarks.controller;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.newspool.bookmarks.exception.BookmarkExistsException;
import com.ibm.newspool.bookmarks.exception.BookmarksNotFoundException;
import com.ibm.newspool.bookmarks.model.Bookmarks;
import com.ibm.newspool.bookmarks.service.BookmarkService;

@RestController
@RequestMapping("/articles/bookmarks")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookmarksController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private BookmarkService bookmarkService;

	@PostMapping("/addtobookmarks")
	public ResponseEntity<?> addToBookmarks(@RequestBody Bookmarks bookmark)
			throws IOException, BookmarkExistsException, BookmarksNotFoundException {
		List<Bookmarks> list = null;
		int bookmarkId = 0;
		try {
			list = bookmarkService.getAllBookmarks();
			bookmarkId = list.size();
			System.out.println("List size: " + bookmarkId);
			bookmarkId++;
			bookmark.setBookmarkId(bookmarkId);
		}
		catch (NullPointerException e) {
			bookmark.setBookmarkId(1);
		}
		
		List<Bookmarks> bList = bookmarkService.getBookmarkByTitle(bookmark.getTitle(), bookmark.getuserName());

		if (bList.size() == 0) {
			if (bookmarkService.addBookmark(bookmark)) {
				return new ResponseEntity<String>("Created", HttpStatus.CREATED);
			} else {
				return new ResponseEntity<String>("Conflict", HttpStatus.CONFLICT);
			}
		} else {
			return new ResponseEntity<String>("Conflict", HttpStatus.CONFLICT);
		}
	}

	/*
	 * @GetMapping("/getbookmarks") public ResponseEntity<List<Bookmarks>>
	 * getBookmarks() { List<Bookmarks> bookmarkList =
	 * bookmarkService.getAllBookmarks(); System.out.println("Get bookmarks: " +
	 * bookmarkList); return new ResponseEntity<List<Bookmarks>>(bookmarkList,
	 * HttpStatus.OK); }
	 */
	@GetMapping("/getuserbookmarks")
	public ResponseEntity<?> getBookmarksByUser(@RequestParam("username") String username) {
		logger.info("Getting bookmarks for user");
		try {
			List<Bookmarks> bookmarkList = bookmarkService.getAllBookmarksByUser(username);

			return new ResponseEntity<List<Bookmarks>>(bookmarkList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("You haven't bookmarked anything yet", HttpStatus.CONFLICT);

		}
	}

	@DeleteMapping("/deletebookmark")
	public ResponseEntity<?> deleteBookmark(@RequestParam("bookmarkId") Integer bookmarkId) {
		try {
			bookmarkService.deleteBookmark(bookmarkId);
			logger.info("Bookmark deleted!");
			return new ResponseEntity<Boolean>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Boolean>(HttpStatus.CONFLICT);
		}

	}
}