package instagram.controller.dto;

import instagram.model.CommentLike;

public class CommentLikeDto {

	private int id;

	private int idUser;
	
	private int idComment;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getIdComment() {
		return idComment;
	}

	public void setIdComment(int idComment) {
		this.idComment = idComment;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}


	public void loadFromModel(CommentLike commentlike) {
		id = commentlike.getId();
		idComment = commentlike.getIdComment();
		idUser = commentlike.getIdUser();
	}
}