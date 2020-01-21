package com.ibm.newspool.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ibm.newspool.user.model.User;

@CrossOrigin(origins = "*" ,allowedHeaders = "*")
@Repository
public interface UserDAO extends JpaRepository<User, Integer>{
	
	public User findByUsernameAndPassword(String username, String password);

	public User findByUsername(String username);


}
