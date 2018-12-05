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
import instagram.controller.dto.LikeDto;
import instagram.exception.BusinessException;
import instagram.model.Like;
import instagram.service.LikeService;
import instagram.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/likes")
public class LikeController {

	private Logger logger = LoggerFactory.getLogger(LikeController.class);

	@Autowired
	private LikeService likeService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<LikeDto> addLike(@RequestBody LikeDto likeDto) throws BusinessException {
		logger.info("LikeController -> addLike");
		
		Like like = likeService.addLike(likeDto.getIdPost(), likeDto.getIdUser());

		LikeDto likedDto = new LikeDto();
		likedDto.loadFromModel(like);

		return new ResponseEntity<LikeDto>(likedDto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<LikeDto>> getAll(){
		logger.info("LikeController -> getAll");

		List<Like> likes = likeService.getAll();
		List<LikeDto> result = new ArrayList<LikeDto>();
		
		for (Like like : likes) {
			LikeDto likedDto = new LikeDto();
			likedDto.loadFromModel(like);
			result.add(likedDto);
		}

		return new ResponseEntity<List<LikeDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
	public ResponseEntity<LikeDto> getById(@PathVariable int id) throws BusinessException{
		logger.info("LikeController -> getById");

		Like like = likeService.getById(id);

		LikeDto likeDto = new LikeDto();
		likeDto.loadFromModel(like);

		return new ResponseEntity<LikeDto>(likeDto, HttpStatus.OK);
	}

	@RequestMapping(value = "/getByIdPost/{idPost}", method = RequestMethod.GET)
	public ResponseEntity<List<LikeDto>> getByIdPost(@PathVariable int idPost) throws BusinessException{
		logger.info("LikeController -> getByIdPost");

		List<Like> likes = likeService.getByIdPost(idPost);
		List<LikeDto> result = new ArrayList<LikeDto>();
		
		for (Like like : likes) {
			LikeDto likedDto = new LikeDto();
			likedDto.loadFromModel(like);
			result.add(likedDto);
		}
		
		return new ResponseEntity<List<LikeDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getLikers/{idPost}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getLikers(@PathVariable int idPost) throws BusinessException{
		logger.info("LikeController -> getLikers");

		List<Like> likes = likeService.getByIdPost(idPost);
		List<UserDto> result = new ArrayList<UserDto>();
		
		for (Like like : likes) {
			UserDto userDto = new UserDto();
			userDto.loadFromModel(userService.getUserById(like.getIdUser()));
			result.add(userDto);
		}
		
		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/delete", method = RequestMethod.POST)
	public ResponseEntity<ResponseDto> deleteLikeByID(@RequestBody LikeDto likeDto) throws BusinessException{
		logger.info("LikeController -> deleteLikeByID");
				
		this.likeService.deleteLike(likeDto);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}
}