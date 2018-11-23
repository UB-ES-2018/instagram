package instagram.repository;

import org.springframework.data.repository.CrudRepository;

import instagram.model.LikesCommentAux;


public interface LikesCommentAuxRepository  extends CrudRepository<LikesCommentAux, Integer> {
	
	LikesCommentAux findOneByIdUserAndIdComent(int idUser, int idComent);

}
