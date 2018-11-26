package instagram.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
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
	public void deleteLike(int id) throws BusinessException{
		Optional<Like> optionalLike = this.likeRepository.findById(id);
		Like like = optionalLike.get();
		// Delete user itself
		this.likeRepository.delete(like);
	}

	@Override
	public List<Like> findAllByIdPost(int idPost) {
		return this.likeRepository.findAllByIdPost(idPost);
	}

}