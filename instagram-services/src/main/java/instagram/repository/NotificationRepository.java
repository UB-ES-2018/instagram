package instagram.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import instagram.model.Notification;

public interface NotificationRepository extends CrudRepository<Notification, Integer> {
	
	List<Notification> findAllByIdOwnerUserAndRequestFalse(int idOwnerUser);
	
	List<Notification> findAllByIdOwnerUserAndRequestTrue(int idOwnerUser);
	
}
