package instagram.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import instagram.model.LikesCommentAux;
import instagram.repository.LikesCommentAuxRepository;
import instagram.service.LikesComentAuxService;

@Service
public class LikesComentAuxServiceImpl implements LikesComentAuxService{
	
	@Autowired
	private LikesCommentAuxRepository repository;

	@Override
	public boolean isComentliked(int idUser, int idComent) {
		LikesCommentAux aux = this.repository.findOneByIdUserAndIdComent(idUser, idComent);
		if(aux != null) {
			return true;
		}
		return false;
	}
	

}
