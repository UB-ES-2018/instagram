package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.HashTag;

public interface HashTagService {

	HashTag getValidHashTagByTag(String tag);
	
	List<HashTag> getAll();
		
	void deleteHashTag(int id) throws BusinessException;

	HashTag addHashTag(String tag) throws BusinessException;
}