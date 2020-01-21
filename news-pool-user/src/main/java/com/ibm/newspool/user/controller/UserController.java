package com.ibm.newspool.user.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.newspool.user.exception.UserNotFoundException;
import com.ibm.newspool.user.model.User;
import com.ibm.newspool.user.service.EmailService;
import com.ibm.newspool.user.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserService userService;

	@Autowired
	private EmailService emailService;

	private String subject = "Thank you for registering with News App";
	private String message = "Thank you for registering with News App. You can now bookmark news articles, "
			+ "filter by sources and watch news!";

	@PostMapping("/registeruser")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		if(userService.addUser(user)) {
			logger.info("User registered.");
			emailService.sendMail(user.getUsername(), subject, message);
			return new ResponseEntity<>("Created", HttpStatus.CREATED);
		} else{
			return new ResponseEntity<>("Conflict", HttpStatus.CONFLICT);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody User user) throws UserNotFoundException {
		User validuserList = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());

		if (validuserList == null) {
			logger.info("User not found");
			throw new UserNotFoundException();
		}else {
			String token = Jwts.builder().setId(validuserList.getUsername()).setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
			// Add it to a Map and send the map in response body
			Map<String, String> tokenMap = new HashMap<String, String>();
			tokenMap.put("token", token);
			tokenMap.put("message", "User Successfully logged in");
			return new ResponseEntity<>(tokenMap, HttpStatus.OK);
		}
	}

	@PostMapping("/checkUsername")
	public ResponseEntity<User> checkusername(@RequestBody User user) {
		User userMatched = userService.findByUsername(user.getUsername());

		if (userMatched == null) {
			return new ResponseEntity<>(userMatched, HttpStatus.CONFLICT);
		} else {
			return new ResponseEntity<>(userMatched, HttpStatus.OK);
		}
	}
}


