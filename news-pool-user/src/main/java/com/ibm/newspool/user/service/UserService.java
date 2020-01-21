package com.ibm.newspool.user.service;

import com.ibm.newspool.user.model.User;

public interface UserService {

	public boolean addUser(User user);
	
	public User findByUsernameAndPassword(String username, String password);

	public User findByUsername(String username);
	
//	@Query("from Registration where username = ?1")
//	public List<User> findByUsernameAndPassword(String username,String password);
}
