package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.CommentController;
import instagram.controller.dto.CommentDto;
import instagram.exception.BusinessException;
import instagram.model.Comment;
import instagram.repository.CommentRepository;
import instagram.service.impl.CommentServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import java.util.Date;
import java.util.Optional;

public class CommentTest {

	private CommentController c;
    private Comment comment;
	private CommentDto dto;
	private CommentRepository rMock;
	private CommentServiceImpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new CommentController();
		s = new CommentServiceImpl();
		rMock = mock(CommentRepository.class);
		dto = new CommentDto();
		comment = mock(Comment.class);
		dto.loadFromModel(comment);
		s.setCommentRepository(rMock);
		c.setCommentService(s);
    }

	@Test
	public void testGetComment() throws Exception {
		when(rMock.findById(any(Integer.class))).thenReturn(Optional.of(comment));
		assertEquals(c.getComment(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testAddComment() throws BusinessException {
		assertEquals(c.addComment(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test
	public void testUpdateComment() throws BusinessException {
		when(rMock.findById(any(Integer.class))).thenReturn(Optional.of(comment));
		assertEquals(c.updateContent(dto).getStatusCode(), HttpStatus.ACCEPTED);
	}

	@Test(expected = BusinessException.class)
	public void testDeleteCommentByID() throws BusinessException {
		c.deleteCommentByID(0);
	}

	@Test
	public void testGetUserComments() throws BusinessException {
		assertEquals(c.getUserComments(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetPostComments() throws BusinessException {
		assertEquals(c.getPostComments(0).getStatusCode(), HttpStatus.OK);
	}

}
