package instagram.controller.dto;

import instagram.model.User;

public class UserDto {

	private int id;

	private String username;

	private String password;

	private String email;

	private String name;
	
	private String bio;
	
	private String website;
	
	private int phone;
	
	private String gender;
	
	
	
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
	
	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}
	
	public String getWeb() {
		return website;
	}

	public void setWeb(String website) {
		this.website = website;
	}
	
	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}
	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}


	public void loadFromModel(User user) {
		id = user.getId();
		username = user.getUsername();
		email = user.getEmail();
		name = user.getName();
		bio = user.getBio();
		phone = user.getPhone();
		website = user.getWeb();
		gender = user.getGender();
	}
}
