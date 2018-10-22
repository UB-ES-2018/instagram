package instagram.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.PostTag;

public interface PostTagRepository extends CrudRepository<PostTag, Integer> {

	@Query("SELECT pt FROM PostTag pt WHERE pt.idPost = ?1")
	PostTag findOneByIdPostIfIsValid(int idPost);

	PostTag findOneByIdPost(int idPost);
	
}