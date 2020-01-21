package com.ibm.newspool.bookmarks.service;

import java.util.List;

import com.ibm.newspool.bookmarks.exception.BookmarkExistsException;
import com.ibm.newspool.bookmarks.exception.BookmarksNotFoundException;
import com.ibm.newspool.bookmarks.model.Bookmarks;

public interface BookmarkService {

	public boolean addBookmark(Bookmarks bookmark) throws BookmarkExistsException;

	public List<Bookmarks> getAllBookmarks();

	public List<Bookmarks> getAllBookmarksByUser(String userName) throws BookmarksNotFoundException;

	public boolean deleteBookmark(int bookmarkId);
	
	public List<Bookmarks> getBookmarkByTitle(String title, String username);

}
