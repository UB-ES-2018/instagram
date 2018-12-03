package instagram.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import instagram.controller.CommentController;

//import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.Comment;
import instagram.repository.CommentRepository;
import instagram.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
	
	private Logger logger = LoggerFactory.getLogger(CommentController.class);


	@Autowired
	private CommentRepository commentRepository;

	@Override
	public Comment getCommentById(int id) {
		Optional<Comment> optional = commentRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@Override
	public int addComment(int idUser, int idPost, String content) throws BusinessException {
		Comment comment = new Comment();
		Comment comen = new Comment();
		comment.setIdUser(idUser);
		comment.setIdPost(idPost);
		comment.setContent(content);
		comment.setCreatedAt(new Date());
		comment.setUpdatedAt(null);
		
		commentRepository.save(comment);
		List<Comment> list = this.getCommentsByUser(idUser);
		return list.get(list.size()-1).getId();
	}

	@Override
	public Comment editComment(int id, String newContent) throws BusinessException {
		Comment comment = commentRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCodes.COMMENT_NOT_FOUND));
		
		comment.setContent(newContent);
		comment.setUpdatedAt(new Date());
		
		commentRepository.save(comment);
		
		return comment;
	}

	@Override
	public void deleteComment(int id) throws BusinessException {
		if (commentRepository.existsById(id)) {
			commentRepository.deleteById(id);
		} else {
			throw new BusinessException(ErrorCodes.COMMENT_NOT_FOUND);
		}
	}

	@Override
	public List<Comment> getCommentsByUser(int idUser) {
		return commentRepository.findAllByIdUser(idUser);
	}

	@Override
	public List<Comment> getCommentsByPost(int idPost) {
		return commentRepository.findAllByIdPost(idPost);
	}

}
