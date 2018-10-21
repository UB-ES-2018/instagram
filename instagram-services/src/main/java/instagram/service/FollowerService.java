package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Follower;

public interface FollowerService {
	
	List<Follower> getAllFollowersFromUser(int userid);
	List<Follower> getAllFollowedsFromUser(int userid);
	Follower requestNewFollower(int follower, int followed) throws BusinessException ;
	Follower acceptFolllower(int follower,int followed,boolean acepted) throws BusinessException;
	
}
