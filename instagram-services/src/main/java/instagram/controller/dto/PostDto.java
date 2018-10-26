package instagram.controller.dto;

import java.util.Date;

import instagram.model.Post;

public class PostDto {
	
	private int id;
	
	private int id_user;
	
	private String photo;
	
	private String description;
	
	private Date created_at;
	
	private Date updated_at;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getIdUser() {
		return id_user;
	}
	
	public void setIdUser(int id_user) {
		this.id_user = id_user;
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
		return created_at;
	}
	
	public void setCreatedAt(Date created_at) {
		this.created_at = created_at;
	}
	
	public Date getUpdatedAt() {
		return updated_at;
	}
	
	public void setUpdatedAt(Date updated_at) {
		this.updated_at = updated_at;
	}
	
	public void loadFromModel(Post post) {
		id = post.getId();
		id_user = post.getIdUser();	
		photo = post.getPhoto();
		description = post.getDescription();
		created_at = post.getCreatedAt();
		updated_at = post.getUpdatedAt();
	}
}