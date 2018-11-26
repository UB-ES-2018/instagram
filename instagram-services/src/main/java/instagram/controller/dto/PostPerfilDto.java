package instagram.controller.dto;

import instagram.model.PostPerfil;

public class PostPerfilDto {
	
	private int id;
	
	private String photo;
	
	private int numLikes;
	
	private int numComments;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public int getNumLikes() {
		return numLikes;
	}

	public void setNumLikes(int numLikes) {
		this.numLikes = numLikes;
	}

	public int getNumComments() {
		return numComments;
	}

	public void setNumComments(int numComments) {
		this.numComments = numComments;
	}
	
	public void loadFromModel(PostPerfil post) {
		
		this.id = post.getId();
		this.photo = post.getPhoto();
		this.numLikes = post.getNumLikes();
		this.numComments = post.getNumComments();
		
	}
	
}
