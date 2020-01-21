package com.ibm.newspool.bookmarks.exception;

public class BookmarkExistsException extends Exception {

	public BookmarkExistsException() {
		super();
	}

	public BookmarkExistsException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

	public BookmarkExistsException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public BookmarkExistsException(String arg0) {
		super(arg0);
	}

	public BookmarkExistsException(Throwable arg0) {
		super(arg0);
	}

	
}
