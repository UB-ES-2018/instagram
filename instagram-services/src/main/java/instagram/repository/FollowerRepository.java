package instagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import instagram.model.Follower;

public interface FollowerRepository extends CrudRepository<Follower, Integer> {

	
	@Query("SELECT f.followed FROM Follower f WHERE f.follow = ?1 AND f.accepted = true")
	List<Integer> findAllByFollower(int follow);
	
	@Query("SELECT f.follow FROM Follower f WHERE f.followed = ?1 AND f.accepted = true")
	List<Integer> findAllByFollowed(int followed);
	
	@Query("SELECT f.follow FROM Follower f WHERE f.followed = ?1 AND f.accepted = false")
	List<Integer> findAllNewRequest(int follow);
	
	@Query("SELECT f FROM Follower f WHERE f.follow = ?1 AND f.followed = ?2")
	Follower findOneByfollowAndFollowed(int follow, int followed);
}
