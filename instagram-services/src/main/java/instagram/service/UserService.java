package instagram.service;

import instagram.exception.BusinessException;
import instagram.model.User;

public interface UserService {

	User getValidUserByUsername(String username) throws BusinessException;
	
	User getUserById(int id) throws BusinessException;
			
	void deleteUser(int id) throws BusinessException;

	User addUser(String username, String password, String email, String name) throws BusinessException;

	void changeBio(String username, String bio) throws BusinessException;

	void changeGender(String username, String gender) throws BusinessException;

	void changeNumber(String username, int number) throws BusinessException;

	void changePassword(String username, String password) throws BusinessException;

	void changeName(String username, String name) throws BusinessException;
	
	void changeWebsite(String username, String website) throws BusinessException;
	
	void changeAll(String username, String email, String name, String bio, String website, int pNumber, String gender) throws BusinessException;

	User getLogin(String username, String password) throws BusinessException;
}
