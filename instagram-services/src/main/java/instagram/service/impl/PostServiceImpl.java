package instagram.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
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
	public Post getPostById(int id) {
		return this.postRepository.findOneById(id);
	}
	
	@Override
	public Post addPost(int id_user, String photo, String description, Date created_at) {
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
	public void deletePost(int id) throws BusinessException {
		Optional<Post> optionalPost = this.postRepository.findById(id);
		Post post = optionalPost.get();
		this.postRepository.delete(post);
	}
}