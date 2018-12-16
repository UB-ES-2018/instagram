package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("SELECT u FROM User u WHERE u.username = ?1")
	User findOneByUsernameIfIsValid(String username);

	User findOneByUsername(String username);
	
	User findOneById(int id);
	
	User findOneByEmail(String email);
	
	User findOneByUsernameAndPassword(String username, String password);
	
	List<User> findByUsernameIgnoreCaseContainingOrNameIgnoreCaseContaining(String username, String name);
}
