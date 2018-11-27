package instagram.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import instagram.model.Post;
import instagram.controller.dto.PostDto;
import instagram.controller.dto.ResponseDto;
import instagram.service.PostService;
import instagram.exception.BusinessException;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class PostController {
	private Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private PostService postService;
	
	@RequestMapping(value = "/getPostIDUser/{id_user}", method = RequestMethod.GET)
	public ResponseEntity<List<PostDto>> getUsersPosts(@PathVariable int id_user) throws BusinessException{
		logger.info("PostController -> getUsersPosts");
		
		List<Post> posts = this.postService.getAllPostsFromUser(id_user);
		List<PostDto> result = new ArrayList<PostDto>();
		for(Post post : posts) {
			PostDto checkedPost = new PostDto();
			checkedPost.loadFromModel(post);
			result.add(checkedPost);
		}
		return new ResponseEntity<List<PostDto>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getNinePostsIDUser/{id_user}", method = RequestMethod.GET)
	public ResponseEntity<List<PostDto>> getNinePostsFromUser(@PathVariable int id_user) throws BusinessException{
		logger.info("PostController -> getNinePostsFromUser");
		
		List<Post> posts = this.postService.getNinePostsFromUser(id_user);
		List<PostDto> result = new ArrayList<PostDto>();
		for(Post post : posts) {
			PostDto checkedPost = new PostDto();
			checkedPost.loadFromModel(post);
			result.add(checkedPost);
		}
		return new ResponseEntity<List<PostDto>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getPost", method = RequestMethod.GET)
	public ResponseEntity<List<PostDto>> getPosts() throws BusinessException{
		logger.info("PostController -> getPosts");
		
		List<Post> posts = this.postService.getAll();
		List<PostDto> result = new ArrayList<PostDto>();
		for(Post post : posts) {
			PostDto checkedPost = new PostDto();
			checkedPost.loadFromModel(post);
			result.add(checkedPost);
		}
		return new ResponseEntity<List<PostDto>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getPostIDPhoto/{id}", method = RequestMethod.GET)
	public ResponseEntity<PostDto> getPostById(@PathVariable int id) throws BusinessException{
		logger.info("PostController -> getPost");
		
		Post post = postService.getPostById(id);
		PostDto result = new PostDto();
		result.loadFromModel(post);
		
		return new ResponseEntity<PostDto>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<PostDto> addPost(@RequestBody PostDto postDto) throws BusinessException{
		logger.info("PostController -> addPost");
		
		Post post = postService.addPost(postDto.getIdUser(), postDto.getPhoto(), postDto.getDescription(), postDto.getCreatedAt());
		PostDto postDtoret = new PostDto();
		postDtoret.loadFromModel(post);
		
		return new ResponseEntity<PostDto>(postDtoret, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deletePostById(@PathVariable int id) throws BusinessException{
		logger.info("PostController -> deletePostById");
		
		this.postService.deletePost(id);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
	}
}