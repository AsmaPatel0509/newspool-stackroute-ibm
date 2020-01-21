package com.ibm.newspool.user.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class User {

	@Id
	private String username;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String fullname;
	private String password;
	private String contact;
	
	public User() {
		super();
	}
	
	public User(int userId, String fullname, String password, String username, String contact) {
		super();
		this.userId = userId;
		this.fullname = fullname;
		this.password = password;
		this.username = username;
		this.contact = contact;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getfullname() {
		return fullname;
	}
	public void setfullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", userId=" + userId + ", fullname=" + fullname + ", password=" + password
				+ ", contact=" + contact + "]";
	}
	
	
	
}
