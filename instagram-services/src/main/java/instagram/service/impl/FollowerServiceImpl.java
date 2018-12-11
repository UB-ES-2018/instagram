package instagram.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.model.Follower;
import instagram.repository.FollowerRepository;
import instagram.service.FollowerService;

@Service
public class FollowerServiceImpl implements FollowerService {

	@Autowired
	private FollowerRepository followerRepository;

	@Override
	public List<Integer> getAllFollowersFromUser(int userid) {
		return this.followerRepository.findAllByFollowed(userid);
	}

	@Override
	public List<Integer> getAllFollowedsFromUser(int userid) {
		return this.followerRepository.findAllByFollower(userid);
	}

	@Override
	public Follower requestNewFollower(int follower, int followed) throws BusinessException {
		if(FollowExist(follower, followed)) {
			throw new BusinessException(ErrorCodes.FOLLOW_EXISTS);
		}
		Follower follow = new Follower();
		follow.setFollowed(followed);
		follow.setFollow(follower);
		follow.setAccepted(true);
		
		this.followerRepository.save(follow);
		return follow;
	}
	
	@Override
	public Follower acceptFolllower(int follower, int followed, boolean acepted) throws BusinessException {
		if(!FollowExist(follower, followed)) {
			throw new BusinessException(ErrorCodes.FOLLOW_NOT_FOUND);
		}
		Follower follow = this.followerRepository.findOneByfollowAndFollowed(follower, followed);
		follow.setAccepted(acepted);
		this.followerRepository.save(follow);
		return follow;
	}
	
	private boolean FollowExist(int follower,int followed) {
		Follower follow  = this.followerRepository.findOneByfollowAndFollowed(follower, followed);
		return follow != null;
	}

	@Override
	public List<Integer> getAllNewRequest(int userid) {
		return this.followerRepository.findAllNewRequest(userid);
	}

	@Override
	public Follower getFollower(int followed, int follower) throws BusinessException {
		Follower follow = this.followerRepository.findOneByfollowAndFollowed(follower, followed);
		if(follow == null){
			follow = new Follower();
			follow.setFollowed(followed);
			follow.setFollow(follower);
			follow.setAccepted(false);
		}else {
			follow.setAccepted(true);
		}
		return follow;
	}

	@Override
	public Boolean deleteFolllower(int follower, int followed, boolean acepted) throws BusinessException {
		Follower follow = this.followerRepository.findOneByfollowAndFollowed(follower, followed);
		Boolean check = false;
		if(follow != null) {
			this.followerRepository.delete(follow);
			check = true;
		}
		return check;
	}

	public void setFollowerRepository(FollowerRepository rMock) {
		followerRepository = rMock;
	}
	

}

