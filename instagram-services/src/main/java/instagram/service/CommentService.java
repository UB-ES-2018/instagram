package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Comment;

public interface CommentService {

	List<Comment> getCommentsFromUser(int idUser);
	
	List<Comment> getCommentsFromPost(int idPost);
	
	void deleteComment(int id) throws BusinessException;

	Comment addComment(int idUser, int idPost, String content) throws BusinessException;

	void editComment(int id, String newContent) throws BusinessException;
}
