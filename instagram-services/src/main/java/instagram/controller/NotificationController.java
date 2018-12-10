package instagram.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import instagram.controller.dto.NotificationDto;
import instagram.exception.BusinessException;
import instagram.model.Notification;
import instagram.service.CommentService;
import instagram.service.NotificationService;
import instagram.service.PostService;
import instagram.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/notification")
public class NotificationController {
	
	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private NotificationService notificationService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private CommentService commentService;
	
	@RequestMapping(value = "/request/{idOwnerUser}", method = RequestMethod.GET)
	public ResponseEntity<List<NotificationDto>> getRequestForUser(@PathVariable int idOwnerUser) throws BusinessException {
		
		logger.info("NotificationController -> getRequestForUser");
		
		List<Notification> notifications = notificationService.getFollowRequestForIdOwnerUser(idOwnerUser);
		List<NotificationDto> result = new ArrayList<NotificationDto>();

		for(Notification notification: notifications) {
			NotificationDto dto = new NotificationDto();
			dto.setActionUser(userService.getUserById(notification.getIdActionUser()));
			dto.setOwnerUser(userService.getUserById(notification.getIdOwnerUser()));
			if(notification.getIdComent() != 0) {
				dto.setComment(commentService.getCommentById(notification.getIdComent()));
			}
			if(notification.getIdPost() != 0) {
				dto.setPost(postService.getPostById(notification.getIdPost()));
			}
			dto.setCreatedAt(notification.getCreatedAt());
			dto.setId(notification.getId());
			dto.setMessage(notification.getMessage());
			dto.setRequest(notification.isRequest());
			
			result.add(dto);
		}
		

		return new ResponseEntity<List<NotificationDto>>(result,HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "/all/{idOwnerUser}", method = RequestMethod.GET)
	public ResponseEntity<List<NotificationDto>> getAllNotification(@PathVariable int idOwnerUser) throws BusinessException {
		
		logger.info("NotificationController -> getAllNotification");
		
		List<Notification> notifications = notificationService.getAllForIdOwnerUser(idOwnerUser);
		List<NotificationDto> result = new ArrayList<NotificationDto>();

		for(Notification notification: notifications) {
			NotificationDto dto = new NotificationDto();
			dto.setActionUser(userService.getUserById(notification.getIdActionUser()));
			dto.setOwnerUser(userService.getUserById(notification.getIdOwnerUser()));
			if(notification.getIdComent() != 0) {
				dto.setComment(commentService.getCommentById(notification.getIdComent()));
			}
			if(notification.getIdPost() != 0) {
				dto.setPost(postService.getPostById(notification.getIdPost()));
			}
			dto.setCreatedAt(notification.getCreatedAt());
			dto.setId(notification.getId());
			dto.setMessage(notification.getMessage());
			dto.setRequest(notification.isRequest());
			
			result.add(dto);
		}
		
		
		
		return new ResponseEntity<List<NotificationDto>>(result,HttpStatus.OK);
		
	}
}
