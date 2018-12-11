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

import instagram.controller.dto.ResponseDto;
import instagram.controller.dto.UserDto;
import instagram.controller.dto.CommentLikeDto;
import instagram.exception.BusinessException;
import instagram.model.CommentLike;
import instagram.service.CommentLikeService;
import instagram.service.NotificationService;
import instagram.service.UserService;
import instagram.service.impl.CommentLikeServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/commentLikes")
public class CommentLikeController {

	private Logger logger = LoggerFactory.getLogger(CommentLikeController.class);

	@Autowired
	private CommentLikeService commentLikeService;
	
	@Autowired
	private NotificationService notificationService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<CommentLikeDto> addCommentLike(@RequestBody CommentLikeDto commentLikeDto) throws BusinessException {
		logger.info("CommentLikeController -> addCommentLike");
		
		CommentLike commentLike = commentLikeService.addCommentLike(commentLikeDto.getIdComment(), commentLikeDto.getIdUser());
		this.notificationService.addedLikeToComment(commentLike.getId(), commentLike.getIdUser());
		CommentLikeDto likedDto = new CommentLikeDto();
		likedDto.loadFromModel(commentLike);

		return new ResponseEntity<CommentLikeDto>(likedDto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<CommentLikeDto>> getAll(){
		logger.info("CommentLikeController -> getAll");

		List<CommentLike> commentLikes = commentLikeService.getAll();
		List<CommentLikeDto> result = new ArrayList<CommentLikeDto>();
		
		for (CommentLike commentLike : commentLikes) {
			CommentLikeDto commentLikedDto = new CommentLikeDto();
			commentLikedDto.loadFromModel(commentLike);
			result.add(commentLikedDto);
		}

		return new ResponseEntity<List<CommentLikeDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
	public ResponseEntity<CommentLikeDto> getById(@PathVariable int id) throws BusinessException{
		logger.info("CommentLikeController -> getById");

		CommentLike like = commentLikeService.getById(id);

		CommentLikeDto likeDto = new CommentLikeDto();
		likeDto.loadFromModel(like);

		return new ResponseEntity<CommentLikeDto>(likeDto, HttpStatus.OK);
	}

	@RequestMapping(value = "/getByIdComment/{idComment}", method = RequestMethod.GET)
	public ResponseEntity<List<CommentLikeDto>> getByIdComment(@PathVariable int idComment) throws BusinessException{
		logger.info("CommentLikeController -> getByIdComment");

		List<CommentLike> likes = commentLikeService.getByIdComment(idComment);
		List<CommentLikeDto> result = new ArrayList<CommentLikeDto>();
		
		for (CommentLike like : likes) {
			CommentLikeDto likedDto = new CommentLikeDto();
			likedDto.loadFromModel(like);
			result.add(likedDto);
		}
		
		return new ResponseEntity<List<CommentLikeDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getCommentLikers/{idComment}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getCommentLikers(@PathVariable int idComment) throws BusinessException{
		logger.info("CommentLikeController -> getCommentLikers");

		List<CommentLike> likes = commentLikeService.getByIdComment(idComment);
		List<UserDto> result = new ArrayList<UserDto>();
		
		for (CommentLike like : likes) {
			UserDto userDto = new UserDto();
			userDto.loadFromModel(userService.getUserById(like.getIdUser()));
			result.add(userDto);
		}
		
		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/delete/{idComment}/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deleteCommentLikeByID(@PathVariable int idComment, @PathVariable int idUser) throws BusinessException{
		logger.info("CommentLikeController -> deleteCommentLikeByID");
				
		this.commentLikeService.deleteCommentLike(idComment, idUser);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}

	public void setCommentLikeService(CommentLikeServiceImpl s) {
		commentLikeService = s;
	}
}