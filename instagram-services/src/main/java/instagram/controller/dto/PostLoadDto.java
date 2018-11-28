package instagram.controller.dto;

import java.util.Date;
import java.util.List;

import instagram.model.CommentLoad;
import instagram.model.PostLoad;

public class PostLoadDto {
	
	private int idPost;
	
	private int idUser;
	
	private String photo;
	
	private String photoPerfil;
	
	private String description;
	
	private Date createdAt;
	
	private String ownerName;
	
	private int numLikes;
	
	private boolean liked;
	
	private List<CommentLoad> coments;

	public int getIdPost() {
		return idPost;
	}

	public void setIdPost(int idPost) {
		this.idPost = idPost;
	}
	

	public boolean isLiked() {
		return liked;
	}

	public void setLiked(boolean liked) {
		this.liked = liked;
	}

	public int getNumLikes() {
		return numLikes;
	}

	public void setNumLikes(int numLikes) {
		this.numLikes = numLikes;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
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

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public List<CommentLoad> getComents() {
		return coments;
	}

	public void setComents(List<CommentLoad> coments) {
		this.coments = coments;
	}
	
	
	public String getPhotoPerfil() {
		return photoPerfil;
	}

	public void setPhotoPerfil(String photoPerfil) {
		this.photoPerfil = photoPerfil;
	}

	public void loadFromPostLoad(PostLoad postLoad) {
		this.idPost = postLoad.getIdPost();
		this.idUser = postLoad.getIdUser();
		this.photoPerfil = postLoad.getPhotoPerfil();
		this.coments = postLoad.getComents();
		this.ownerName = postLoad.getOwnerName();
		this.photo = postLoad.getPhoto();
		this.description = postLoad.getDescription();
		this.createdAt = postLoad.getCreatedAt();
		this.numLikes = postLoad.getNumLikes();
		this.liked = postLoad.isLiked();
			
	}
}
