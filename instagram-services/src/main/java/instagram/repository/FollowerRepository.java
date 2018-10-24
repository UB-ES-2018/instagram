package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.Follower;

public interface FollowerRepository extends CrudRepository<Follower, Integer> {

	
	@Query("SELECT f FROM Follower f WHERE f.follow = ?1 ")
	List<Follower> findAllByFollow(int follow);
	
	@Query("SELECT f FROM Follower f WHERE f.followed = ?1")
	List<Follower> FindAllByFollowed(int followed);
	
	@Query("SELECT f FROM Follower f WHERE f.follow = ?1 AND f.followed = ?2")
	Follower FindOneByfollowAndFollowed(int follow, int followed);
}
