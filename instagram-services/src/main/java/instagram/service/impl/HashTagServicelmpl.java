package instagram.service.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import instagram.controller.HashTagController;
import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.HashTag;
import instagram.repository.HashTagRepository;
import instagram.service.HashTagService;

@Service
public class HashTagServicelmpl implements HashTagService {
	private Logger logger = LoggerFactory.getLogger(HashTagController.class);

	@Autowired
	private HashTagRepository hashTagRepository;

	@Override
	public HashTag getValidHashTagByTag(String tag) {
		return hashTagRepository.findOneByTagIfIsValid(tag);
	}

	@Override
	public List<HashTag> getAll() {
		return Lists.newArrayList(hashTagRepository.findAll());
	}

	@Override
	public HashTag addHashTag(String tag) throws BusinessException {
		HashTag hashTag = new HashTag();

		if (hashTagExists(tag)) {
			throw new BusinessException(ErrorCodes.USERNAME_EXISTS); //CAMBIAAAR
		}
		
		hashTag.setTag(tag);

		hashTagRepository.save(hashTag);

		return hashTag;
	}

	private boolean hashTagExists(String tag) {
		HashTag hashTag = hashTagRepository.findOneByTag(tag);
		return hashTag != null;
	}

	@Override
	public void deleteHashTag(int id) throws BusinessException{
		Optional<HashTag> optionalHashTag = this.hashTagRepository.findById(id);
		HashTag hashTag = optionalHashTag.get();
		// Delete user itself
		this.hashTagRepository.delete(hashTag);
	}

}