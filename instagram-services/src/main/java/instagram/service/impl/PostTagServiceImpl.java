package instagram.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
import instagram.model.PostTag;
import instagram.repository.PostTagRepository;
import instagram.service.PostTagService;

@Service
public class PostTagServiceImpl implements PostTagService {

	@Autowired
	private PostTagRepository postTagRepository;

	@Override
	public PostTag getValidPostTagByIdPost(int idPost) {
		return postTagRepository.findOneByIdPostIfIsValid(idPost);
	}

	@Override
	public List<PostTag> getAll() {
		return Lists.newArrayList(postTagRepository.findAll());
	}

	@Override
	public PostTag addPostTag(int idPost, int idTag) throws BusinessException {
		PostTag postTag = new PostTag();
		
		postTag.setIdPost(idPost);
		postTag.setIdTag(idTag);

		postTagRepository.save(postTag);

		return postTag;
	}

	@Override
	public void deletePostTag(int id) throws BusinessException{
		Optional<PostTag> optionalPostTag = this.postTagRepository.findById(id);
		PostTag postTag = optionalPostTag.get();
		// Delete user itself
		this.postTagRepository.delete(postTag);
	}

}
