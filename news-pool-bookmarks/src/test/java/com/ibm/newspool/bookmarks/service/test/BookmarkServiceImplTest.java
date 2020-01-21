package com.ibm.newspool.bookmarks.service.test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.newspool.bookmarks.dao.BookmarkDAO;
import com.ibm.newspool.bookmarks.exception.BookmarkExistsException;
import com.ibm.newspool.bookmarks.exception.BookmarksNotFoundException;
import com.ibm.newspool.bookmarks.model.Bookmarks;
import com.ibm.newspool.bookmarks.service.BookmarkServiceImpl;

@RunWith(MockitoJUnitRunner.Silent.class)
public class BookmarkServiceImplTest {
	
	@Mock
	private BookmarkDAO bookmarkDAO;
	@InjectMocks
	private BookmarkServiceImpl service;
	Bookmarks bookmark;
	Optional<Bookmarks> optional;
	List<Bookmarks> bList;
	
	@Before
	public void setUp() throws Exception{
		bookmark = new Bookmarks(111, "username", "Title", "url", "urltoimage", "sourcename", "publishedAt");
		optional = Optional.of(bookmark);
	}
	@After
	public void tearDown() throws Exception{
		
	}
	@Test
	public void addBookmarkSuccess() throws BookmarkExistsException {
		when(bookmarkDAO.findByUserName(Mockito.anyString())).thenReturn(bList);
		when(bookmarkDAO.save(Mockito.any(Bookmarks.class))).thenReturn(bookmark);
		Boolean result = service.addBookmark(bookmark);
		assertEquals(result, true);
	}
	@Test
	public void addBookmarkFailure() throws BookmarkExistsException {
		when(bookmarkDAO.findByUserName(Mockito.anyString())).thenReturn(null);
		Boolean result = service.addBookmark(bookmark);
		assertEquals(result, false);
	}
	
	@Test
	public void deleteBookmarkFailure() throws BookmarksNotFoundException {
		Long l = null;
		when(bookmarkDAO.deleteByBookmarkId(Mockito.anyInt())).thenReturn(l);
		Boolean result = service.deleteBookmark(bookmark.getBookmarkId());
		assertEquals(result, false);
	}
	
	@Test
	public void getBookmarksByUserNameSuccess() {
		when(bookmarkDAO.findByUserName(Mockito.anyString())).thenReturn(bList);
		List<Bookmarks> result = service.getAllBookmarksByUser(bookmark.getuserName());
		assertEquals(bList, result);
	}
	
	@Test
	public void getBookmarksByUserNameFailure() {
		when(bookmarkDAO.findByUserName(Mockito.anyString())).thenReturn(bList);
		assertEquals(bList, null);
	}

}
