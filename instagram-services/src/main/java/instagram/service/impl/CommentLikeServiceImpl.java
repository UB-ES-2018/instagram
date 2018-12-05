package instagram.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
import instagram.model.CommentLike;
import instagram.repository.CommentLikeRepository;
import instagram.service.CommentLikeService;

@Service
public class CommentLikeServiceImpl implements CommentLikeService {

	@Autowired
	private CommentLikeRepository commentLikeRepository;

	@Override
	public CommentLike getValidCommentLikeByIdComment(int idComment) {
		return commentLikeRepository.findOneByIdCommentIfIsValid(idComment);
	}

	@Override
	public List<CommentLike> getAll() {
		return Lists.newArrayList(commentLikeRepository.findAll());
	}

	@Override
	public CommentLike addCommentLike(int idComment, int idUser) throws BusinessException {
		CommentLike commentLike = new CommentLike();
		
		commentLike.setIdComment(idComment);
		commentLike.setIdUser(idUser);

		commentLikeRepository.save(commentLike);

		return commentLike;
	}

	@Override
	public void deleteCommentLike(int idComment, int idUser){
		CommentLike like = this.commentLikeRepository.findOneByIdCommentAndIdUser(idComment, idUser);
		this.commentLikeRepository.deleteById(like.getId());
		
	}

	@Override
	public CommentLike getById(int id) throws BusinessException {
		return commentLikeRepository.findById(id).orElseThrow(() -> new BusinessException(null));
	}

	@Override
	public List<CommentLike> getByIdComment(int idComment) {
		return commentLikeRepository.findByIdComment(idComment);
	}

}