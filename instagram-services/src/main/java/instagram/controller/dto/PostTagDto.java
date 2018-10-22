package instagram.controller.dto;

import instagram.model.PostTag;

public class PostTagDto {

	private int id;

	private int idPost;

	private int idTag;
	

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}
	
	public int getIdPost() {
		return idPost;
	}

	public void setIdPost(int idPost) {
		this.idPost = idPost;
	}
	
	public int getIdTag() {
		return idTag;
	}

	public void setIdTag(int idTag) {
		this.idTag = idTag;
	}



	public void loadFromModel(PostTag postTag) {
		id = postTag.getId();
		idPost = postTag.getIdPost();
		idTag = postTag.getIdTag();
	}
}