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
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public ResponseEntity<UserDto> addUser(@RequestBody UserDto userDto) throws BusinessException {
		logger.info("UserController -> addUser");
		
		User user = userService.addUser(userDto.getUsername(), userDto.getPassword(), userDto.getEmail(),userDto.getName());

		UserDto userdDto = new UserDto();
		userdDto.loadFromModel(user);

		return new ResponseEntity<UserDto>(userdDto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<UserDto>> getAll(){
		logger.info("UserController -> getAll");

		List<User> users = userService.getAll();

		List<UserDto> result = new ArrayList<UserDto>();
		for (User user : users) {
			UserDto userdDto = new UserDto();
			userdDto.loadFromModel(user);
			result.add(userdDto);
		}

		return new ResponseEntity<List<UserDto>>(result, HttpStatus.OK);
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
