package instagram.service;

import instagram.exception.BusinessException;
import instagram.model.User;

public interface UserService {

	User getValidUserByUsername(String username) throws BusinessException;
	
	User getUserById(int id) throws BusinessException;
			
	void deleteUser(int id) throws BusinessException;
}
