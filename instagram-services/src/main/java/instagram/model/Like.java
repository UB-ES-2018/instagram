package instagram.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "LIKES")
public class Like implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
	private int id;

	@Column(name = "id_post")
	private int idPost;

	@Column(name = "id_user")
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
	
}