package instagram.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.controller.dto.LikeDto;
import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.Like;
import instagram.repository.LikeRepository;
import instagram.service.LikeService;

@Service
public class LikeServiceImpl implements LikeService {

	@Autowired
	private LikeRepository likeRepository;

	@Override
	public Like getValidLikeByIdPost(int idPost) {
		return likeRepository.findOneByIdPostIfIsValid(idPost);
	}

	@Override
	public List<Like> getAll() {
		return Lists.newArrayList(likeRepository.findAll());
	}

	@Override
	public Like addLike(int idPost, int idUser) throws BusinessException {
		Like like = new Like();
		
		like.setIdPost(idPost);
		like.setIdUser(idUser);

		likeRepository.save(like);

		return like;
	}

	@Override
	public void deleteLike(LikeDto like){
		Like lik = this.likeRepository.findOneByIdPostAndIdUser(like.getIdPost(), like.getIdUser());
		this.likeRepository.deleteById(lik.getId());
	}

	@Override
	public Like getById(int id) throws BusinessException {
		return likeRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCodes.LIKE_NOT_FOUND));
	}

	@Override
	public List<Like> getByIdPost(int idPost) {
		return likeRepository.findByIdPost(idPost);
	}

	@Override
	public List<Like> findAllByIdPost(int idPost) {
		return this.likeRepository.findAllByIdPost(idPost);
	}

	@Override
	public boolean isLike(int idPost, int idUser) {
		Like like = this.likeRepository.findOneByIdPostAndIdUser(idPost, idUser);
		if(like != null) {
			return true;
		}
		return false;
	}

}