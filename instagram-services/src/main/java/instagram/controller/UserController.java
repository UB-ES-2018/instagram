package instagram.controller;


import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.SimpleFormatter;

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

import instagram.controller.dto.PassChangerDto;
import instagram.controller.dto.ResponseDto;
import instagram.controller.dto.UserDto;
import instagram.exception.BusinessException;
import instagram.model.Comment;
import instagram.model.User;
import instagram.service.UserService;
import instagram.service.impl.UserServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

	private Logger logger = LoggerFactory.getLogger(UserController.class);
		

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<UserDto> addUser(@RequestBody UserDto userDto) throws BusinessException {
		logger.info("UserController -> addUser");
		
		User user = userService.addUser(userDto.getUsername(), userDto.getPassword(), userDto.getEmail(),userDto.getName());

		UserDto userdDto = new UserDto();
		userdDto.loadFromModel(user);

		return new ResponseEntity<UserDto>(userdDto, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/update/password", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updatePassword(@RequestBody PassChangerDto passDto) throws BusinessException {
		
		logger.info("UserController -> updatePassword");
		Boolean valid = this.userService.changePassword(passDto.getUsername(),passDto.getOldPassword(),passDto.getNewPassword());

		return new ResponseEntity<Boolean>(valid, HttpStatus.ACCEPTED);
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
	
	@RequestMapping(value = "/update/photo/{idUser}", method = RequestMethod.PUT)
	public ResponseEntity<UserDto> updatePhoto(@PathVariable int idUser, @RequestBody String photo) throws BusinessException {
		logger.info("UserController -> updatePhoto");
		
		User user = this.userService.updatePhoto(idUser, photo);
		UserDto result = new UserDto();
		result.loadFromModel(user);
		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public ResponseEntity<UserDto> test() throws BusinessException, SecurityException, IOException {
		logger.info("UserController -> updatePhoto");
		User user = this.userService.getUserById(1);
		UserDto result = new UserDto();
		result.loadFromModel(user);

		return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
	}
	

	@RequestMapping(value = "/update/privacity/{idUser}", method = RequestMethod.GET)
    public ResponseEntity<UserDto> updatePrivacity(@PathVariable int idUser) throws BusinessException {
        logger.info("UserController -> updatePrivacity");
        User user = this.userService.changePrivacity(idUser);
        UserDto result = new UserDto();
        result.loadFromModel(user);

        return new ResponseEntity<UserDto>(result, HttpStatus.ACCEPTED);
    }

	@RequestMapping(value = "/search/{query}", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> searchUser(@PathVariable String query) throws BusinessException {
		logger.info("UserController -> getUser");

		List<User> users = userService.searchUser(query);
		List<UserDto> result = new ArrayList<UserDto>();
		
		for (User user : users) {
			UserDto found = new UserDto();
			found.loadFromModel(user);
			result.add(found);
		}

		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
	}

	public void setUserService(UserServiceImpl s) {
		userService = s;
	}

}
