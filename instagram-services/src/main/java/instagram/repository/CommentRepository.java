package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.Comment;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

	@Query("SELECT c FROM Comment c WHERE c.id_user = ?1")
	List<Comment> findAllByIdUser(int idUser);

	@Query("SELECT c FROM Comment c WHERE c.id_post = ?1")
	List<Comment> findAllByIdPost(int idPost);

}
