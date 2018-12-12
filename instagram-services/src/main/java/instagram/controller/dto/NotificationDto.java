package instagram.controller.dto;


import instagram.model.Comment;
import instagram.model.Post;
import instagram.model.User;

public class NotificationDto {

	private int id;
	
	private User ownerUser;

	private User actionUser;

	private Post post;

	private int idFollow;
	
	private Comment comment;
	
	private String message;
	
	private boolean request;
	
	private float createdAt;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getOwnerUser() {
		return ownerUser;
	}

	public void setOwnerUser(User ownerUser) {
		this.ownerUser = ownerUser;
	}

	public User getActionUser() {
		return actionUser;
	}

	public void setActionUser(User actionUser) {
		this.actionUser = actionUser;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public int getIdFollow() {
		return idFollow;
	}

	public void setIdFollow(int idFollow) {
		this.idFollow = idFollow;
	}

	public Comment getComment() {
		return comment;
	}

	public void setComment(Comment comment) {
		this.comment = comment;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isRequest() {
		return request;
	}

	public void setRequest(boolean request) {
		this.request = request;
	}

	public float getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(float createdAt) {
		this.createdAt = createdAt;
	}
	
	
}
