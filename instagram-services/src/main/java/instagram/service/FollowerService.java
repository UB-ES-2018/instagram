package instagram.service;

import java.util.List;

import instagram.exception.BusinessException;
import instagram.model.Follower;

public interface FollowerService {
	
	List<Integer> getAllFollowersFromUser(int userid);
	List<Integer> getAllFollowedsFromUser(int userid);
	List<Integer> getAllNewRequest(int userid);
	Follower getFollower(int followed, int follower) throws BusinessException ;
	Follower requestNewFollower(int follower, int followed) throws BusinessException ;
	Follower acceptFolllower(int follower,int followed,boolean acepted) throws BusinessException;
	Boolean deleteFolllower(int follower,int followed,boolean acepted) throws BusinessException;
	
}
