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


import instagram.controller.dto.FollowerDto;
import instagram.controller.dto.UserDto;
import instagram.exception.BusinessException;
import instagram.model.Follower;
import instagram.service.FollowerService;
import instagram.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/followers")
public class FollowerController {

	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private FollowerService followerService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/request", method = RequestMethod.POST)
	public ResponseEntity<FollowerDto> addFollow(@RequestBody FollowerDto followerDto) throws BusinessException {
		logger.info("FollowerController -> addFollow");
		
		Follower newFollow = this.followerService.requestNewFollower(followerDto.getFollower(), followerDto.getFollowed());

		FollowerDto follow = new FollowerDto();
		follow.loadFromModel(newFollow);

		return new ResponseEntity<FollowerDto>(follow, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/update/accepted", method = RequestMethod.PUT)
	public ResponseEntity<FollowerDto> updateAccepted(@RequestBody FollowerDto followerDto) throws BusinessException {
		logger.info("FollowerController -> updateAccepted");
		
		Follower newFollow = this.followerService.acceptFolllower(followerDto.getFollower(), followerDto.getFollowed(),followerDto.isAccepted());

		FollowerDto follow = new FollowerDto();
		follow.loadFromModel(newFollow);

		return new ResponseEntity<FollowerDto>(follow, HttpStatus.ACCEPTED);
	}


	@RequestMapping(value = "/getFollowers/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getFollowers(@PathVariable int userid)throws BusinessException{
		logger.info("FollowerController -> getFollowers");
		
		List<Integer> followers = this.followerService.getAllFollowersFromUser(userid);
		List<UserDto> result = new ArrayList<UserDto>();
		for(Integer user_id : followers) {
			UserDto user = new UserDto();
			user.loadFromModel(this.userService.getUserById(user_id));
			result.add(user);
		}

		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getRequest/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getRequest(@PathVariable int userid)throws BusinessException{
		logger.info("FollowerController -> getRequest");
		
		List<Integer> followers = this.followerService.getAllNewRequest(userid);
		List<UserDto> result = new ArrayList<UserDto>();
		for(Integer user_id : followers) {
			UserDto user = new UserDto();
			user.loadFromModel(this.userService.getUserById(user_id));
			result.add(user);
		}

		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/getFolloweds/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getFolloweds(@PathVariable int userid) throws BusinessException{
		logger.info("FollowerController -> getFolloweds");
		
		List<Integer> followers = this.followerService.getAllFollowedsFromUser(userid);
		List<UserDto> result = new ArrayList<UserDto>();
		for(Integer user_id : followers) {
			UserDto user = new UserDto();
			user.loadFromModel(this.userService.getUserById(user_id));
			result.add(user);
		}

		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
				
	}
}
