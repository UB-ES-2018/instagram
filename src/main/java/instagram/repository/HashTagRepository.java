package instagram.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.HashTag;

public interface HashTagRepository extends CrudRepository<HashTag, Integer> {

	@Query("SELECT h FROM HashTag h WHERE h.tag = ?1")
	HashTag findOneByTagIfIsValid(String tag);

	HashTag findOneByTag(String tag);
}