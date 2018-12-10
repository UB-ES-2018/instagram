package instagram.service;

import java.util.List;

import instagram.model.Notification;

public interface NotificationService {
	
	List<Notification> getAllForIdOwnerUser(int idOwnerUser);
	
	List<Notification> getFollowRequestForIdOwnerUser(int idOwnerUser);
	
	void addedLikeToPost(int idPost, int idActionUser);
	
	void addedCommentToPost(int idPost,int idComment, int idActionUser);
	
	void addedFollowRequest(int idActionUser, int idOwnerUser, int idFollow);
	
	void addedLikeToComment(int idComment, int idActionUser);
	
	Notification getByidNotification(int idNotification);
	
	void actionOverNotification(int idNotification);

}
