package com.ibm.newspool.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.ibm.newspool.user.dao.UserDAO;
import com.ibm.newspool.user.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;
	
	@Override
	public boolean addUser(User user) {
		String hashpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashpw);
		userDAO.save(user);
		return true;
	}
	
	@Override
	public User findByUsernameAndPassword(String username, String password) {
		User userSearch = userDAO.findByUsername(username);
		User user = null;
		if(userSearch != null) {
			 user = userSearch;
			boolean matched = BCrypt.checkpw(password, user.getPassword());
			if(!matched) {
				user = null;
			}
		}
		return user;
	}

	@Override
	public User findByUsername(String username) {
		return userDAO.findByUsername(username);
	}
}
