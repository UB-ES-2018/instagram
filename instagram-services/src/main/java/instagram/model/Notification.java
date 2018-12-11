package instagram.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "NOTIFICATION")
public class Notification implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "ID_OWNER_USER")
	private int idOwnerUser;

	@Column(name = "ID_ACTION_USER")
	private int idActionUser;

	@Column(name = "ID_POST")
	private int idPost;

	@Column(name = "ID_FOLLOW")
	private int idFollow;
	
	@Column(name = "ID_COMENT")
	private int idComent;
	
	@Column(name = "MESSAGE")
	private String message;
	
	@Column(name = "IS_FOLLOW_REQUEST")
	private boolean request;
	
	@Column(name = "CREATED_AT")
	private float createdAt;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdOwnerUser() {
		return idOwnerUser;
	}

	public void setIdOwnerUser(int idOwnerUser) {
		this.idOwnerUser = idOwnerUser;
	}

	public int getIdActionUser() {
		return idActionUser;
	}

	public void setIdActionUser(int idActionUser) {
		this.idActionUser = idActionUser;
	}

	public int getIdPost() {
		return idPost;
	}

	public void setIdPost(int idPost) {
		this.idPost = idPost;
	}

	public int getIdFollow() {
		return idFollow;
	}

	public void setIdFollow(int idFollow) {
		this.idFollow = idFollow;
	}

	public int getIdComent() {
		return idComent;
	}

	public void setIdComent(int idComent) {
		this.idComent = idComent;
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