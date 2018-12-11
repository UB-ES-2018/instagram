package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.UserController;
import instagram.controller.dto.PassChangerDto;
import instagram.controller.dto.UserDto;
import instagram.exception.BusinessException;
import instagram.model.User;
import instagram.repository.UserRepository;
import instagram.service.impl.UserServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

public class UserTest {

	private UserController c;
    private User user;
    private String pass;
	private UserDto dto;
	private PassChangerDto pdto;
	private UserRepository rMock;
	private UserServiceImpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new UserController();
		s = new UserServiceImpl();
		rMock = mock(UserRepository.class);
		dto = new UserDto();
		user = mock(User.class);
		dto.loadFromModel(user);
		pdto = mock(PassChangerDto.class);
		s.setUserRepository(rMock);
		c.setUserService(s);
    }
	
	@Test
	public void testAddUser() throws BusinessException {
		assertEquals(c.addUser(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test
	public void testUpdatePassword() throws BusinessException {
		when(rMock.findOneByUsername(any(String.class))).thenReturn(null);
		assertEquals(c.updatePassword(pdto).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test(expected = BusinessException.class)
	public void testUpdateAll() throws BusinessException {
		when(rMock.findOneByUsername(any(String.class))).thenReturn(null);
		assertEquals(c.updateAll(dto).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test(expected = BusinessException.class)
	public void testGetUserString() throws BusinessException {
		when(rMock.findOneByUsername(any(String.class))).thenReturn(null);
		assertEquals(c.getUser(dto.getUsername()).getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = BusinessException.class)
	public void testGetUserInt() throws BusinessException {
		when(rMock.findOneById(any(Integer.class))).thenReturn(null);
		assertEquals(c.getUser(0).getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = BusinessException.class)
	public void testLoginUser() throws BusinessException {
		when(rMock.findOneByUsernameAndPassword(any(String.class), any(String.class))).thenReturn(null);
		assertEquals(c.loginUser(dto).getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = NullPointerException.class)
	public void testDeleteUserByID() throws BusinessException {
		when(rMock.findById(any(Integer.class))).thenReturn(null);
		assertEquals(c.deleteUserByID(0).getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = BusinessException.class)
	public void testUpdatePhoto() throws BusinessException {
		when(rMock.findOneById(any(Integer.class))).thenReturn(null);
		assertEquals(c.updatePhoto(0, dto.getPhoto()).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test
	public void testSearchUser() throws BusinessException {
		when(rMock.findByUsernameIgnoreCaseContainingOrNameIgnoreCaseContaining(any(String.class), any(String.class))).thenReturn(new ArrayList<>());
		assertEquals(c.searchUser("").getStatusCode(), HttpStatus.OK);
	}

}
