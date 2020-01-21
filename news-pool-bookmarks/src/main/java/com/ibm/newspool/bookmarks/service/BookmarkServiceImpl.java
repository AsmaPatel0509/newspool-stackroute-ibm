package com.ibm.newspool.bookmarks.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.newspool.bookmarks.dao.BookmarkDAO;
import com.ibm.newspool.bookmarks.model.Bookmarks;
import com.mongodb.DB;
import com.mongodb.MongoClient;

@Service
public class BookmarkServiceImpl implements BookmarkService {

	@Autowired
	private BookmarkDAO bookmarkDAO;

	MongoClient mongo = new MongoClient("localhost", 27017);
	DB databaseName = mongo.getDB("newsproject");
	
	String collectionName = "bookmarks";

	@Override
	public boolean addBookmark(Bookmarks bookmark) {
		if(bookmarkDAO.save(bookmark) != null) {
			return true;
		}
		else {
			return false;
		}
		
	}

	@Override
	public List<Bookmarks> getAllBookmarks() {
		List<Bookmarks> bookmarksList = bookmarkDAO.findAll();
		if(bookmarksList.size()!=0) {
			return bookmarksList;
		}
		else {
			return null;
		}
	}

	@Override
	public List<Bookmarks> getAllBookmarksByUser(String username) {
		List<Bookmarks> bookmarksList = null;
		try {
			return bookmarkDAO.findByUserName(username);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public boolean deleteBookmark(int bookmarkId) {
		if(bookmarkDAO.deleteByBookmarkId(bookmarkId) != null) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public List<Bookmarks> getBookmarkByTitle(String title, String username) {
		return bookmarkDAO.findByTitleAndUserName(title, username);
		
//		return bookmarkDAO.findByTitle(title);
	}

}
