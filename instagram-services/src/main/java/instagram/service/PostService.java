package instagram.service;

import java.util.List;
import java.util.Date;

import instagram.exception.BusinessException;
import instagram.model.Post;
import instagram.model.PostLoad;
import instagram.model.PostPerfil;

public interface PostService {
	
	List<Post> getAll();
	
	List<PostPerfil> getAllPostsFromUser(int idUser);
	
	List<Post> getNinePostsFromUser(int idUser);
	
	List<Post> getFeedUser(List<Integer> usersIDList);
	
	Post getPostById(int id);
	
	Post addPost(int idUser, String photo, String description, Date createdAt);
	
	void deletePost(int id) throws BusinessException;
	
	PostLoad getPostByIdAndLoggedUser(int idPost, int idUser) throws BusinessException;
	
	int getUserIdByPost(int idPost);
}