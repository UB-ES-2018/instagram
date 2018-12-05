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
	
	private int phoneNumber;
	
	private String gender;
	
	private String photo;

	
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public void loadFromModel(User user) {
		id = user.getId();
		username = user.getUsername();
		email = user.getEmail();
		name = user.getName();
		bio = user.getBio();
		website = user.getWebsite();
		phoneNumber = user.getPhoneNumber();
		gender = user.getGender();
		photo = user.getPhoto();
	}
}
