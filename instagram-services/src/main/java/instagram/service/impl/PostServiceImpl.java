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
	public List<Post> getAllPostsFromUser(int idUser){
		return this.postRepository.findAllByUser(idUser);
	}
	
	@Override
	public List<Post> getNinePostsFromUser(int idUser){
		List<Post> llista = this.postRepository.findAllByUser(idUser);
		if(llista.size() <= 9) {
			return llista;
		}else {
			return llista.subList(0, 8);
		}
	}
	
	@Override
	public Post getPostById(int id) {
		return this.postRepository.findOneById(id);
	}
	@Override
	public Post addPost(int idUser, String photo, String description, Date createdAt) {
		Post post = new Post();
		
		post.setIdUser(idUser);
		post.setPhoto(photo);
		post.setDescription(description);
		post.setCreatedAt(createdAt);
		post.setUpdatedAt(createdAt);
		
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