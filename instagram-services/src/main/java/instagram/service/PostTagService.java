package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.PostTag;

public interface PostTagService {

	PostTag getValidPostTagByIdPost(int idPost);
	
	List<PostTag> getAll();
		
	void deletePostTag(int id) throws BusinessException;

	PostTag addPostTag(int idPost, int idTag) throws BusinessException;
}
