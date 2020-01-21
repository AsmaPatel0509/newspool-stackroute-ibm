package com.ibm.newspool.bookmarks.exception;

public class BookmarksNotFoundException extends Exception {

	public BookmarksNotFoundException() {
		super();
	}

	public BookmarksNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public BookmarksNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public BookmarksNotFoundException(String message) {
		super(message);
	}

	public BookmarksNotFoundException(Throwable cause) {
		super(cause);
	}

	
}
