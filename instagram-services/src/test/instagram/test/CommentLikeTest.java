package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.CommentLikeController;
import instagram.controller.dto.CommentLikeDto;
import instagram.exception.BusinessException;
import instagram.model.CommentLike;
import instagram.repository.CommentLikeRepository;
import instagram.service.impl.CommentLikeServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.Optional;

public class CommentLikeTest {
	
	private CommentLikeController c;
    private CommentLike commentLike;
	private CommentLikeDto dto;
	
	//@Mock
	private CommentLikeRepository rMock;

	//@InjectMocks
	private CommentLikeServiceImpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new CommentLikeController();
		s = new CommentLikeServiceImpl();
		rMock = mock(CommentLikeRepository.class);
		dto = new CommentLikeDto();
		commentLike = mock(CommentLike.class);
		dto.loadFromModel(commentLike);
		s.setCommentLikeRepository(rMock);
		c.setCommentLikeService(s);
    }

	
	@Test
	public void testAddCommentLike() throws BusinessException {
		assertEquals(c.addCommentLike(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test
	public void testGetAll() throws BusinessException {
		when(rMock.findAll()).thenReturn(new ArrayList<>());
		assertEquals(c.getAll().getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetById() throws BusinessException {
		when(rMock.findById(any(Integer.class))).thenReturn(Optional.of(commentLike));
		assertEquals(c.getById(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetByIdComment() throws BusinessException {
		when(rMock.findById(any(Integer.class))).thenReturn(Optional.of(commentLike));
		assertEquals(c.getByIdComment(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetCommentLikers() throws BusinessException {
		when(rMock.findByIdComment(any(Integer.class))).thenReturn(new ArrayList<>());
		assertEquals(c.getCommentLikers(0).getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = Exception.class)
	public void testDeleteCommentLikeByID() throws BusinessException {
		c.deleteCommentLikeByID(0, 0);
	}

}
