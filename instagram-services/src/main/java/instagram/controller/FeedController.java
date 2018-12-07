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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import instagram.controller.dto.PostDto;
import instagram.exception.BusinessException;
import instagram.model.Post;
import instagram.service.FollowerService;
import instagram.service.PostService;

@CrossOrigin
@RestController
@RequestMapping("/feed")
public class FeedController {
	private Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private FollowerService followerService;
	
	@RequestMapping(value = "/request/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<List<PostDto>> getRequestFeed(@PathVariable int idUser) throws BusinessException {
		logger.info("FeedController -> getRequestFeed");
		
		List<Integer> followers = this.followerService.getAllFollowedsFromUser(idUser);
		List<Post> posts = this.postService.getFeedUser(followers);

		List<PostDto> result = new ArrayList<PostDto>();
		for(Post post : posts) {
			PostDto checkedPost = new PostDto();
			checkedPost.loadFromModel(post);
			result.add(checkedPost);
		}
		
		return new ResponseEntity<List<PostDto>>(result,HttpStatus.OK);
	}
	
}