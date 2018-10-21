package instagram.service.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.controller.UserController;
import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.User;
import instagram.repository.UserRepository;
import instagram.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserRepository userRepository;

	@Override
	public User getValidUserByUsername(String username) {
		return userRepository.findOneByUsernameIfIsValid(username);
	}

	@Override
	public List<User> getAll() {
		return Lists.newArrayList(userRepository.findAll());
	}

	@Override
	public User addUser(String username, String password, String email, String name, String bio, String website, int phoneNumber, String gender) throws BusinessException {
		User user = new User();

		if (userExists(username)) {
			throw new BusinessException(ErrorCodes.USERNAME_EXISTS);
		}
		if(emailExists(email)) {
			throw new BusinessException(ErrorCodes.EMAIL_EXISTS);
		}
		
		user.setName(name);
		user.setUsername(username);
		user.setPassword(password);
		user.setEmail(email);

		userRepository.save(user);

		return user;
	}

	private boolean userExists(String username) {
		User user = userRepository.findOneByUsername(username);
		return user != null;
	}
	private boolean emailExists(String email) {
		User user = userRepository.findOneByEmail(email);
		return user != null;
	}

	@Override
	public void deleteUser(int id) throws BusinessException{
		Optional<User> optionalUser = this.userRepository.findById(id);
		User user = optionalUser.get();
		// Delete user itself
		this.userRepository.delete(user);
	}

}
