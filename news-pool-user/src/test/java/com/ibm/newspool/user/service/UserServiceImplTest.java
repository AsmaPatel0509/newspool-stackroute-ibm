package com.ibm.newspool.user.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.newspool.user.dao.UserDAO;
import com.ibm.newspool.user.model.User;
import com.ibm.newspool.user.service.UserServiceImpl;

@RunWith(MockitoJUnitRunner.Silent.class)
public class UserServiceImplTest {

	@Mock
	private UserDAO userDAO;
	
	@InjectMocks
	private UserServiceImpl service;

	User user = null;
	Optional<User> optional;
	
	List<User> userList;
	
	@Before
	public void setUp() throws Exception {
		user = new User(0, "Asma Patel", "asmapatel", "patelasma97@gmail.com", "9925642277");
		optional = Optional.of(user);
		
	}
	@After
	public void tearDown() throws Exception {

	}
	@Test
	public void addUserSuccess() {
		User user1 = null;
		when(userDAO.findByUsername(user.getUsername())).thenReturn(user);
		when(userDAO.save(user)).thenReturn(user1);
		boolean status = service.addUser(user);
		assertEquals(true, status);
		verify(userDAO).save(user);
	}
	@Test
	public void addUserFailure() throws Exception {
		User user1 = null;
		when(userDAO.findByUsername(user.getUsername())).thenReturn(user);
		when(userDAO.save(user)).thenReturn(user1);
		boolean status = service.addUser(user);
		assertEquals(true, status);
		verify(userDAO).save(user);
	}
	
	@Test
	public void findByUsernameAndPasswordFailure(){
		when(userDAO.findByUsernameAndPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		User user2 = service.findByUsername(user.getUsername());
		assertEquals(user2, null);
		verify(userDAO).findByUsername(user.getUsername());
	}
	@Test
	public void findByUsernameSuccess() {
		when(userDAO.findByUsername(user.getUsername())).thenReturn(user);
		User user1 = service.findByUsername(user.getUsername());
		assertEquals(user, user1);
		verify(userDAO, times(1)).findByUsername(user.getUsername());
	}
	@Test
	public void findByUsernameFailure() {
		when(userDAO.findByUsername(user.getUsername())).thenReturn(null);
		@SuppressWarnings("unused")
		User user2 = service.findByUsername(user.getUsername());
		
		
	}
	
}
