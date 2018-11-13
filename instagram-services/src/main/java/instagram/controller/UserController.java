package instagram.controller;


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
import instagram.exception.BusinessException;
import instagram.model.User;
import instagram.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<UserDto> addUser(@RequestBody UserDto userDto) throws BusinessException {
		logger.info("UserController -> addUser");
		
		User user = userService.addUser(userDto.getUsername(), userDto.getPassword(), userDto.getEmail(),userDto.getName());

		UserDto userdDto = new UserDto();
		userdDto.loadFromModel(user);

		return new ResponseEntity<UserDto>(userdDto, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/update/bio", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updateBio(@RequestBody String bio, String username) throws BusinessException {
		logger.info("UserController -> updateBio");
		userService.changeBio(username, bio);
		User user = userService.getValidUserByUsername(username);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/update/all", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updateAll(@RequestBody UserDto userDto) throws BusinessException {
		logger.info("UserController -> updateAll");
		userService.changeAll(userDto.getUsername(), userDto.getEmail(), userDto.getName(), userDto.getBio(), userDto.getWebsite(), userDto.getPhoneNumber(), userDto.getGender());
		User user = userService.getValidUserByUsername(userDto.getUsername());
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/update/password", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updatePassword(@RequestBody String password, String username) throws BusinessException {
		logger.info("UserController -> updatePassword");
		userService.changePassword(username, password);
		User user = userService.getValidUserByUsername(username);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/update/name", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updateName(@RequestBody UserDto userDto) throws BusinessException {
		logger.info("UserController -> updateName");
		userService.changeName(userDto.getUsername(), userDto.getName());
		User user = userService.getValidUserByUsername(userDto.getUsername());
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/update/phoneNumber", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updatePhoneNumber(@RequestBody int phoneNumber, String username) throws BusinessException {
		logger.info("UserController -> updatePhoneNumber");
		userService.changeNumber(username, phoneNumber);
		User user = userService.getValidUserByUsername(username);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/update/gender", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updateGender(@RequestBody String gender, String username) throws BusinessException {
		logger.info(username);
		logger.info("UserController -> updateGender");
		userService.changeGender(username, gender);
		User user = userService.getValidUserByUsername(username);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/getByusername/{username}", method = RequestMethod.GET)
	public ResponseEntity<UserDto> getUser(@PathVariable String username)throws BusinessException{
		logger.info("UserController -> getUser");

		User user = userService.getValidUserByUsername(username);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.OK);
	}
	@RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
	public ResponseEntity<UserDto> getUser(@PathVariable int id)throws BusinessException{
		logger.info("UserController -> getUser");

		User user = userService.getUserById(id);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.OK);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/login/", method = RequestMethod.POST)
	public ResponseEntity<UserDto> loginUser(@RequestBody UserDto user) throws BusinessException{
		logger.info("UserController -> loginUser");
		
		User loggedUser = userService.getLogin(user.getUsername(), user.getPassword());
		UserDto result = new UserDto();
		result.loadFromModel(loggedUser);
		
		return new ResponseEntity<UserDto>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deleteUserByID(@PathVariable int id) throws BusinessException{
		logger.info("UserController -> deleteUserByID");
				
		this.userService.deleteUser(id);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}
}
