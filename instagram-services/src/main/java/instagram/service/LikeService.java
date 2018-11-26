package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Like;

public interface LikeService {

	Like getValidLikeByIdPost(int idPost);
	
	List<Like> getAll();
		
	void deleteLike(int id) throws BusinessException;

	Like addLike(int idPost, int idUser) throws BusinessException;
	
	List<Like> findAllByIdPost(int idPost);
}