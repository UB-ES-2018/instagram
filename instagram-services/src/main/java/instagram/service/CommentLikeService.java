package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.CommentLike;

public interface CommentLikeService {

	CommentLike getValidCommentLikeByIdComment(int idComment);
	
	List<CommentLike> getAll();
	
	CommentLike getById(int id) throws BusinessException;
	
	List<CommentLike> getByIdComment(int idComment);

	void deleteCommentLike(int id) throws BusinessException;

	CommentLike addCommentLike(int idComment, int idUser) throws BusinessException;
}