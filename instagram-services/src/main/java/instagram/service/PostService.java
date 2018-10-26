package instagram.service;

import java.util.List;
import java.util.Date;

import instagram.exception.BusinessException;
import instagram.model.Post;

public interface PostService {
	
	List<Post> getAll();
	
	List<Post> getAllPostsFromUser(int id_user);
	
	Post getPostById(int id);
	
	Post addPost(int id_user, String photo, String description, Date created_at);
	
	void deletePost(int id) throws BusinessException;
}