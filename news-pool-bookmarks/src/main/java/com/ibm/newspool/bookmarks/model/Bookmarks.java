package com.ibm.newspool.bookmarks.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookmarks")
public class Bookmarks {

	private int bookmarkId;
	private String userName;
	private String title;
	private String url;
	private String urlToImage;
	private String sourceName;
	private String publishedAt;
	
	public Bookmarks() {
		super();
	}

	public Bookmarks(int bookmarkId, String userName, String title, String url, String urlToImage, String sourceName,
			String publishedAt) {
		super();
		this.bookmarkId = bookmarkId;
		this.userName = userName;
		this.title = title;
		this.url = url;
		this.urlToImage = urlToImage;
		this.sourceName = sourceName;
		this.publishedAt = publishedAt;
	}
	
		public int getBookmarkId() {
		return bookmarkId;
	}

	public void setBookmarkId(int bookmarkId) {
		this.bookmarkId = bookmarkId;
	}

	public String getuserName() {
		return userName;
	}

	public void setuserName(String userName) {
		this.userName = userName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrlToImage() {
		return urlToImage;
	}

	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public String getPublishedAt() {
		return publishedAt;
	}

	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
	}
}
