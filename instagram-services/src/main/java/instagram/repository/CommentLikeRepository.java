package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.CommentLike;

public interface CommentLikeRepository extends CrudRepository<CommentLike, Integer> {

	@Query("SELECT lc FROM CommentLike lc WHERE lc.idComment = ?1")
	CommentLike findOneByIdCommentIfIsValid(int idComment);

	List<CommentLike> findByIdComment(int idComment);
	
	CommentLike findOneByIdComment(int idComment);
	
	CommentLike findOneByIdCommentAndIdUser(int idComment, int idUser);
	
}