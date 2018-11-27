package instagram.service;

import java.util.List;
import java.util.Date;

import instagram.exception.BusinessException;
import instagram.model.Post;

public interface PostService {
	
	List<Post> getAll();
	
	List<Post> getAllPostsFromUser(int idUser);
	
	List<Post> getNinePostsFromUser(int idUser);
	
	Post getPostById(int id);
	
	Post addPost(int idUser, String photo, String description, Date createdAt);
	
	void deletePost(int id) throws BusinessException;
}