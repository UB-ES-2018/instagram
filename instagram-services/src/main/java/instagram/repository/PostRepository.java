package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instragram.model.Post;

public interface PostRepository extends CrudRepository<Post, Integer> {
	
	@Query("SELECT p FROM Photo p WHERE p.id = ?1")
	Post findOneById(int id);
	
	@Query("SELECT p FROM Photo p WHERE p.id_user = ?1")
	List<Photo> findAllByUser(int id_user);
}
