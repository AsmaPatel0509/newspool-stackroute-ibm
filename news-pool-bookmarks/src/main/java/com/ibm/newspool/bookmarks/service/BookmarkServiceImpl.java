package com.ibm.newspool.bookmarks.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.newspool.bookmarks.dao.BookmarkDAO;
import com.ibm.newspool.bookmarks.model.Bookmarks;

@Service
public class BookmarkServiceImpl implements BookmarkService {

	@Autowired
	private BookmarkDAO bookmarkDAO;

	
	String collectionName = "bookmarks";

	@Override
	public boolean addBookmark(Bookmarks bookmark) {
		Bookmarks bObj = bookmarkDAO.save(bookmark);
		return true;
		
	}

	@Override
	public List<Bookmarks> getAllBookmarks() {
		List<Bookmarks> bookmarksList = bookmarkDAO.findAll();
		if(bookmarksList.isEmpty()) {
			return bookmarksList;
		}
		else {
			return null;
		}
	}

	@Override
	public List<Bookmarks> getAllBookmarksByUser(String username) {
		try {
			return bookmarkDAO.findByUserName(username);
		} catch (Exception e) {
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
	}

}
