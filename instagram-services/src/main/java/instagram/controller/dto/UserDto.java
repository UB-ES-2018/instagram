package instagram.controller.dto;

import instagram.model.User;

public class UserDto {

	private int id;

	private String username;

	private String password;

	private String email;

	private String name;
	
	
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public void loadFromModel(User user) {
		id = user.getId();
		username = user.getUsername();
		email = user.getEmail();
		name = user.getName();
	}
}
