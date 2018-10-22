package instagram.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "POST")
public class Post implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "ID_USER")
	private int id_user;
	
	@Column(name = "PHOTO")
	private string photo;
	
	@Column(name = "DESCRIPTION")
	private string description;
	
	@Column(name = "CREATED_AT")
	private Date created_at;
	
	@Column(name = "UPDATED_AT")
	private Date updated_at;
	
	public int getId() {
		return id;
	}
	
	public setId(int id) {
		this.id = id;
	}
	
	public int getIdUser() {
		return id_user;
	}
	
	public setIdUser(int id_user) {
		this.id_user = id_user;
	}
	
	public string getPhoto() {
		return photo;
	}
	
	public setPhoto(string photo) {
		this.photo = photo;
	}
	
	public string getDescription() {
		return description;
	}
	
	public setDescription(string description) {
		this.description = description;
	}
	
	public Date getCreatedAt() {
		return created_at;
	}
	
	public setCreatedAt(Date created_at) {
		this.created_at = created_at;
	}
	
	public Date getUpdatedAt() {
		return updated_at;
	}
	
	public setUpdatedAt(Date updated_at) {
		this.updated_at = updated_at;
	}
}
