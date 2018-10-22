package instagram.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.controller.PostController;
import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.Post;
import instagram.repository.PostRepository;
import instagram.service.PostService;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	@Override
	public List<Post> getAll(){
		return Lists.newArrayList(postRepository.findAll());
	}
	
	@Override
	public List<Post> getAllPostsFromUser(int id_user){
		return this.postRepository.findAllByUser(id_user);
	}
	
	@Override
	public Post addPost(String id_user, String photo, String description, Date created_at) {
		Post post = new Post();
		
		post.setIdUser(id_user);
		post.setPhoto(photo);
		post.setDescription(description);
		post.setCreatedAt(created_at);
		post.setUpdatedAt(created_at);
		
		postRepository.save(post);
		
		return post;
	}
	
	@Override
	pubic void deletePost(int id) throws BusinessException {
		Optional<Post> optionalPost = this.postRepository.findOneById(id);
		Post post = optionalPost.get();
		this.postRepository.delete(user);
	}
}
