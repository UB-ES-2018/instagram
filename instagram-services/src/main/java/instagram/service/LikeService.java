package instagram.service;

import java.util.List;

import instagram.controller.dto.LikeDto;
import instagram.exception.BusinessException;
import instagram.model.Like;

public interface LikeService {

	Like getValidLikeByIdPost(int idPost);
	
	List<Like> getAll();
	
	Like getById(int id) throws BusinessException;
	
	List<Like> getByIdPost(int idPost);

	void deleteLike(LikeDto like);

	Like addLike(int idPost, int idUser) throws BusinessException;
	
	boolean isLike(int idPost, int idUser);
	
	List<Like> findAllByIdPost(int idPost);
}