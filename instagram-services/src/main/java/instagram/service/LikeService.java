package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Like;
import instagram.model.User;

public interface LikeService {

	Like getValidLikeByIdPost(int idPost);
	
	List<Like> getAll();
	
	Like getById(int id) throws BusinessException;
	
	List<Like> getByIdPost(int idPost);

	List<User> getLikers(int idPost);
	
	void deleteLike(int id) throws BusinessException;

	Like addLike(int idPost, int idUser) throws BusinessException;
}