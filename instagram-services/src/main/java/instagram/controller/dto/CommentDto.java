package instagram.controller.dto;

import java.util.Date;

import instagram.model.Comment;

public class CommentDto {
	
	private int id;

	private int idUser;

	private int idPost;

	private String content;

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

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public int getIdPost() {
		return idPost;
	}

	public void setIdPost(int idPost) {
		this.idPost = idPost;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public void loadFromModel(Comment comment) {
		id = comment.getId();

		idUser = comment.getIdUser();

		idPost = comment.getIdPost();

		content = comment.getContent();

		createdAt = comment.getCreatedAt();
		
		updatedAt = comment.getUpdatedAt();
	}
}
