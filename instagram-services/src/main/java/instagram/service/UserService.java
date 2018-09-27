package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.User;

public interface UserService {

	User getValidUserByUsername(String username);
	
	List<User> getAll();
	
	User addUser(String username, String password, String email ) throws BusinessException;
	
	void deleteUser(int id) throws BusinessException;
}
