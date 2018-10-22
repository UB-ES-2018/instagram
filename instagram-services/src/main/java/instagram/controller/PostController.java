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
import instagram.service.PostService;
import instagram.exception.BusinessException;

@RestController
@RequestMapping("/post")
public class PostController {
	private Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private PostService postService;
	
	@RequestMapping(value = "/getPost/{id_user}", method = RequestMethod.GET)
	public ResponseEntity<List<PostDto>> getPosts(@PathVariable int id_user)throws BusinessException{
		logger.info("PostController -> getPosts");
		
		List<Post> posts = this.postService.getAllPostsFromUser(id_user);
		#TODO
	}

}
