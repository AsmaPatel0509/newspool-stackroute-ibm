package com.ibm.newspool.bookmarks.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.newspool.bookmarks.model.Bookmarks;

public interface BookmarkDAO extends MongoRepository<Bookmarks, Integer> {

	public List<Bookmarks> findByUserName(String userName);
	
	public Long deleteByBookmarkId(int bookmarkId);
	
	public boolean existsByUserName(String username);
	
	public List<Bookmarks> findByTitle(String title);
	
	public List<Bookmarks> findByTitleAndUserName(String title, String username);
	
}
