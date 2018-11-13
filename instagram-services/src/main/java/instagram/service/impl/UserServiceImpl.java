package instagram.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.User;
import instagram.repository.UserRepository;
import instagram.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public User getValidUserByUsername(String username) throws BusinessException {
		if(!userExists(username)) {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);

		}
		return this.userRepository.findOneByUsername(username);
	}


	@Override
	public User addUser(String username, String password, String email,String name ) throws BusinessException {
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
		user.setGender("undefined");
		
		userRepository.save(user);

		return user;
	}
	
	@Override
	public void changeBio(String username, String bio) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setBio(bio);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changePassword(String username, String password) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			if(user.getPassword().equals(password)) {
				user.setPassword(password);
				this.userRepository.save(user);
			}else {
				throw new BusinessException(ErrorCodes.FORBIDDEN);
			}
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changeName(String username, String name) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setName(name);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changeGender(String username, String gender) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setGender(gender);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changeNumber(String username, int number) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setPhoneNumber(number);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changeWebsite(String username, String website) throws BusinessException {
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setWebsite(website);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
	}
	
	@Override
	public void changeAll(String username, String email, String name, String bio, String website, int pNumber, String gender) throws BusinessException{
		if(userExists(username)) {
			User user = this.userRepository.findOneByUsername(username);
			user.setEmail(email);
			user.setName(name);
			user.setBio(bio);
			user.setWebsite(website);
			user.setPhoneNumber(pNumber);
			user.setGender(gender);
			this.userRepository.save(user);
		}else {
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		}
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


	@Override
	public User getUserById(int id) throws BusinessException {
		User user = this.userRepository.findOneById(id);
		if(user == null)
			throw new BusinessException(ErrorCodes.USER_NOT_FOUND);
		return user;
	}


	@Override
	public User getLogin(String username, String password) throws BusinessException {
		User user = this.userRepository.findOneByUsernameAndPassword(username, password);
		if(user == null)
			throw new BusinessException(ErrorCodes.INVALID_CREDENTIAS);
		return user;
	}

}
