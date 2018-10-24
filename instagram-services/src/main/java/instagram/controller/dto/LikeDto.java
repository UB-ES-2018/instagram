package instagram.controller.dto;

import instagram.model.Like;

public class LikeDto {

	private int id;

	private int idPost;

	private int idUser;
	

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
	
	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}



	public void loadFromModel(Like like) {
		id = like.getId();
		idPost = like.getIdPost();
		idUser = like.getIdUser();
	}
}