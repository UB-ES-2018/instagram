package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.FollowerController;
import instagram.controller.dto.FollowerDto;
import instagram.exception.BusinessException;
import instagram.model.Follower;
import instagram.repository.FollowerRepository;
import instagram.service.impl.FollowerServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

public class FollowerTest {

	private FollowerController c;
    private Follower follllllllower;
	private FollowerDto dto;
	private FollowerRepository rMock;
	private FollowerServiceImpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new FollowerController();
		s = new FollowerServiceImpl();
		rMock = mock(FollowerRepository.class);
		dto = new FollowerDto();
		follllllllower = mock(Follower.class);
		dto.loadFromModel(follllllllower);
		s.setFollowerRepository(rMock);
		c.setFollowerService(s);
    }

	@Test
	public void testAddFollow() throws BusinessException {
		assertEquals(c.addFollow(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test(expected = BusinessException.class)
	public void testUpdateAccepted() throws BusinessException {
		assertEquals(c.updateAccepted(dto).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test
	public void testDeleteFollow() throws BusinessException {
		when(rMock.findOneByfollowAndFollowed(any(Integer.class), any(Integer.class))).thenReturn(null);
		assertEquals(c.deleteFollow(dto).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test
	public void testGetFollowers() throws BusinessException {
		when(rMock.findAllByFollowed(any(Integer.class))).thenReturn(new ArrayList<>());
		assertEquals(c.getFollowers(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetRequest() throws BusinessException {
		when(rMock.findAllNewRequest(any(Integer.class))).thenReturn(new ArrayList<>());
		assertEquals(c.getRequest(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetFolloweds() throws BusinessException {
		when(rMock.findAllByFollower(any(Integer.class))).thenReturn(new ArrayList<>());
		assertEquals(c.getFolloweds(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testCheck() throws BusinessException {
		when(rMock.findOneByfollowAndFollowed(any(Integer.class), any(Integer.class))).thenReturn(null);
		assertEquals(c.check(0, 0).getStatusCode(), HttpStatus.ACCEPTED);
	}

}
