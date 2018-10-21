package instagram.controller.dto;

import instagram.model.Follower;

public class FollowerDto {

	private int follower;

	private int followed;

	private boolean accepted;

	public int getFollower() {
		return follower;
	}

	public void setFollower(int follower) {
		this.follower = follower;
	}

	public int getFollowed() {
		return followed;
	}

	public void setFollowed(int followed) {
		this.followed = followed;
	}

	public boolean isAccepted() {
		return accepted;
	}

	public void setAccepted(boolean accepted) {
		this.accepted = accepted;
	}
	public void loadFromModel(Follower follow) {
		this.followed = follow.getFollowed();
		this.follower = follow.getFollow();
		this.accepted = follow.isAccepted();
	}
}
