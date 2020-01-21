package com.ibm.newspool.bookmarks.controller.test;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.newspool.bookmarks.controller.BookmarksController;
import com.ibm.newspool.bookmarks.model.Bookmarks;
import com.ibm.newspool.bookmarks.service.BookmarkService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = BookmarksController.class)
public class BookmarksControllerTest {

	@Autowired
	private MockMvc mockMvc;

	List<Bookmarks> bList;

	@MockBean
	private BookmarkService bookmarkService;
	private Bookmarks bookmarks;
	String token;

	@Before
	public void setUp() throws Exception {
		bookmarks = new Bookmarks(1, "username", "Title", "url", "urltoimage", "sourcename", "publishedAt");
		token = Jwts.builder().setId("user").setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "usersecretkey")
				.compact();
	}

	@After
	public void tearDown() throws Exception {

	}

	@Test
	public void testAddBookmarkSuccess() throws Exception {
		when(bookmarkService.addBookmark(Mockito.any(Bookmarks.class))).thenReturn(true);

		String bookmarkJson = new ObjectMapper().writeValueAsString(bookmarks);
		mockMvc.perform(post("/articles/bookmarks/addtobookmarks").contentType(MediaType.APPLICATION_JSON)
				.content(bookmarkJson).header("Authorization", "Bearer " + token)).andExpect(status().isCreated());

		verify(bookmarkService).addBookmark(Mockito.any(Bookmarks.class));
	}

	@Test
	public void testGetBookmarksSuccessWithToken() throws Exception {
		when(bookmarkService.getAllBookmarksByUser(Mockito.anyString())).thenReturn(bList);
		mockMvc.perform(get("/articles/bookmarks/getuserbookmarks").param("username", bookmarks.getuserName())
				.header("Authorization", "Bearer " + token)).andExpect(status().isOk()).andDo(print());
		verify(bookmarkService, times(1)).getAllBookmarksByUser(Mockito.anyString());
	}

	@Test
	public void testGetBookmarkSuccess() throws Exception {

		when(bookmarkService.getAllBookmarksByUser(Mockito.anyString())).thenReturn(bList);
		mockMvc.perform(get("/articles/bookmarks/getuserbookmarks").param("username", bookmarks.getSourceName()))
				.andExpect(status().isOk()).andDo(print());
		verify(bookmarkService).getAllBookmarksByUser(Mockito.anyString());
	}

	@Test
	public void deleteBookmarkSuccess() throws Exception {
		when(bookmarkService.deleteBookmark(bookmarks.getBookmarkId())).thenReturn(true);
		mockMvc.perform((delete("/articles/bookmarks/deletebookmark").contentType(MediaType.APPLICATION_JSON))
				.param("bookmarkId", Integer.toString(bookmarks.getBookmarkId()))).andExpect(status().isOk())
				.andDo(print());
		verify(bookmarkService).deleteBookmark(Mockito.anyInt());
	}

}
