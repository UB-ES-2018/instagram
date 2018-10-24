package instagram.service.impl;

import java.sql.Date;
import java.util.List;
//import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.google.common.collect.Lists;

import instagram.controller.UserController;
import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.Comment;
import instagram.repository.CommentRepository;
import instagram.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private CommentRepository commentRepository;

	@Override
	public List<Comment> getCommentsFromUser(int idUser) {
		return commentRepository.findAllByIdUser(idUser);
	}

	@Override
	public List<Comment> getCommentsFromPost(int idPost) {
		return commentRepository.findAllByIdPost(idPost);
	}

	@Override
	public void deleteComment(int id) throws BusinessException {
		commentRepository.deleteById(id);
	}

	@Override
	public Comment addComment(int idUser, int idPost, String content) throws BusinessException {
		Comment comment = new Comment();
		
		comment.setIdUser(idUser);
		comment.setIdPost(idPost);
		comment.setContent(content);
		comment.setCreatedAt(new Date(new java.util.Date().getTime()));
		comment.setUpdatedAt(null);
		
		commentRepository.save(comment);
		
		return comment;
	}

	@Override
	public void editComment(int id, String newContent) throws BusinessException {
		Comment comment = commentRepository.findById(id).get();
		
		comment.setContent(newContent);
		comment.setUpdatedAt(new Date(new java.util.Date().getTime()));
		
		commentRepository.save(comment);
		
	}

	

}
