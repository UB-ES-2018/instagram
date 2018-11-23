package instagram.model;

import java.util.Date;
import java.util.List;

public class PostLoad {
	
	private int idPost;
	
	private int idUser;
	
	private String photo;
	
	private String description;
	
	private Date createdAt;
	
	private String ownerName;
	
	private List<CommentLoad> coments;

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

	public List<CommentLoad> getComents() {
		return coments;
	}

	public void setComents(List<CommentLoad> coments) {
		this.coments = coments;
	}
	
	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public void loadFromPostModel(Post post){
		this.idPost = post.getId();
		this.createdAt = post.getCreatedAt();
		this.description = post.getDescription();
		this.photo = post.getPhoto();
		this.idUser = post.getIdUser();
		
	}

}
