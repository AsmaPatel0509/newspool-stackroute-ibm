package com.ibm.newspool.user.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

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
import com.ibm.newspool.user.model.User;
import com.ibm.newspool.user.service.EmailService;
import com.ibm.newspool.user.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {

	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserService userService;
	@MockBean
	private EmailService emailService;
	private User user;
	String token;

	@Before
	public void setUp() throws Exception {
		System.out.println("@Before ");
		user = new User(11, "Asma Patel", "asmapatel", "asma@gmail.com", "1234567890");
		token = Jwts.builder().setId(user.getUsername()).setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		System.out.println("constructor ");
		System.out.println(user.toString());
	}

	@After
	public void tearDown() throws Exception {

	}

	@Test
	public void testUserRegisterSuccess() throws Exception {
		when(userService.addUser(Mockito.any(User.class))).thenReturn(true);
		String userJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/users/registeruser").contentType(MediaType.APPLICATION_JSON).content(userJson))
				.andExpect(status().isCreated());
		verify(userService).addUser(Mockito.any(User.class));
		verifyNoMoreInteractions(userService);
	}

	
	@Test
	public void testUserLoginFailure() throws Exception {
		when(userService.findByUsernameAndPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		mockMvc.perform(post("/users/login").header("Authorization", "Bearer "+token))
		.andExpect(status().isBadRequest()).andDo(print());
	}
	@Test
	public void testUserLoginSuccess() throws Exception {
		when(userService.findByUsernameAndPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		String userJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/users/login").contentType(MediaType.APPLICATION_JSON).content(userJson)
				.header("Authorization", "Bearer " + token))
		.andExpect(status().isOk()).andDo(print());
	}

}
