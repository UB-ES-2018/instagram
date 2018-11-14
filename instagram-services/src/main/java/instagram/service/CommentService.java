package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Comment;

public interface CommentService {
	
	Comment getCommentById(int id) throws BusinessException;
	
	Comment addComment(int idUser, int idPost, String content) throws BusinessException;

	Comment editComment(int id, String newContent) throws BusinessException;

	void deleteComment(int id) throws BusinessException;

	List<Comment> getCommentsByUser(int idUser);
	
	List<Comment> getCommentsByPost(int idPost);
}
