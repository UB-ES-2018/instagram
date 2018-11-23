package instagram.service;

import java.util.List;
import java.util.Date;

import instagram.exception.BusinessException;
import instagram.model.Post;
import instagram.model.PostLoad;

public interface PostService {
	
	List<Post> getAll();
	
	List<Post> getAllPostsFromUser(int idUser);
	
	Post getPostById(int id);
	
	Post addPost(int idUser, String photo, String description, Date createdAt);
	
	void deletePost(int id) throws BusinessException;
	
	PostLoad getPostByIdAndLoggedUser(int idPost, int idUser);
}