package instagram.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.Like;

public interface LikeRepository extends CrudRepository<Like, Integer> {

	@Query("SELECT l FROM Like l WHERE l.idPost = ?1")
	Like findOneByIdPostIfIsValid(int idPost);

	Like findOneByIdPost(int idPost);
	
}