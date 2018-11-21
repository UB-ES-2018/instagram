package instagram.controller.dto;

import java.util.Date;

import instagram.model.Post;

public class PostDto {
	
	private int id;
	
	private int idUser;
	
	private String photo;
	
	private String description;
	
	private Date createdAt;
	
	private Date updatedAt;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getIdUser() {
		return idUser;
	}
	
	public void setIdUser(int id_user) {
		this.idUser = id_user;
	}
	
	public String getPhoto() {
		return photo;
	}
	
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Date getCreatedAt() {
		return createdAt;
	}
	
	public void setCreatedAt(Date created_at) {
		this.createdAt = created_at;
	}
	
	public Date getUpdatedAt() {
		return updatedAt;
	}
	
	public void setUpdatedAt(Date updated_at) {
		this.updatedAt = updated_at;
	}
	
	public void loadFromModel(Post post) {
		id = post.getId();
		idUser = post.getIdUser();	
		photo = post.getPhoto();
		description = post.getDescription();
		createdAt = post.getCreatedAt();
		updatedAt = post.getUpdatedAt();
	}
}