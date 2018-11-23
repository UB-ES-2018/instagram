package instagram.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.exception.BusinessException;
import instagram.model.Comment;
import instagram.model.CommentLoad;
import instagram.model.Post;
import instagram.model.PostLoad;
import instagram.repository.PostRepository;
import instagram.service.CommentService;
import instagram.service.PostService;
import instagram.service.UserService;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private LikesComentAuxServiceImpl likesComentService;
	
	@Override
	public List<Post> getAll(){
		return Lists.newArrayList(postRepository.findAll());
	}
	
	@Override
	public List<Post> getAllPostsFromUser(int idUser){
		return this.postRepository.findAllByUser(idUser);
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

	@Override
	public PostLoad getPostByIdAndLoggedUser(int idPost, int idUser) {
		
		PostLoad postLoad = new PostLoad();
		postLoad.setComents(new ArrayList<CommentLoad>());
		Post post = this.getPostById(idPost);
		postLoad.loadFromPostModel(post);
		
		postLoad.setOwnerName(this.userService.getUsername(postLoad.getIdUser()));
		
		List<Comment> comments = this.commentService.getCommentsByPost(idPost);
		
		for(Comment comment: comments) {
			CommentLoad commentLoad = new CommentLoad();
			commentLoad.loadDataFromComment(comment);
			commentLoad.setName(this.userService.getUsername(comment.getIdUser()));
			if(idUser != -1) {
				commentLoad.setLiked(this.likesComentService.isComentliked(idUser, commentLoad.getIdComment()));
			}else {
				commentLoad.setLiked(false);

			}
			postLoad.getComents().add(commentLoad);
		}
		
		return postLoad;
	}
}