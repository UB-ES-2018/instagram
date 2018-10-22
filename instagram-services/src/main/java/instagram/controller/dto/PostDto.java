package instagram.controller.dto;

import instagram.model.Post;

public class PostDto {
	
	private int id;
	
	private int id_user;
	
	private string photo;
	
	private string description;
	
	private Date created_at;
	
	private Date updated_at;
	
	public int getId() {
		return id;
	}
	
	public setId(int id) {
		this.id = id;
	}
	
	public int getIdUser() {
		return id_user;
	}
	
	public setIdUser(int id_user) {
		this.id_user = id_user;
	}
	
	public string getPhoto() {
		return photo;
	}
	
	public setPhoto(string photo) {
		this.photo = photo;
	}
	
	public string getDescription() {
		return description;
	}
	
	public setDescription(string description) {
		this.description = description;
	}
	
	public Date getCreatedAt() {
		return created_at;
	}
	
	public setCreatedAt(Date created_at) {
		this.created_at = created_at;
	}
	
	public Date getUpdatedAt() {
		return updated_at;
	}
	
	public setUpdatedAt(Date updated_at) {
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
