package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.PostController;
import instagram.controller.dto.PostDto;
import instagram.exception.BusinessException;
import instagram.model.Post;
import instagram.repository.PostRepository;
import instagram.service.impl.PostServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

public class PostTest {

	private PostController c;
    private Post post;
	private PostDto dto;
	private PostRepository rMock;
	private PostServiceImpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new PostController();
		s = new PostServiceImpl();
		rMock = mock(PostRepository.class);
		dto = new PostDto();
		post = mock(Post.class);
		dto.loadFromModel(post);
		s.setPostRepository(rMock);
		c.setPostService(s);
    }
	
	@Test(expected = NullPointerException.class)
	public void testGetPostLoad() throws BusinessException {
		c.getPostLoad(0, Integer.toString(dto.getId()));
	}

	@Test
	public void testGetUsersPosts() throws BusinessException {
		assertEquals(c.getUsersPosts(0).getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testGetPosts() throws BusinessException {
		assertEquals(c.getPosts().getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = NullPointerException.class)
	public void testGetPostById() throws BusinessException {
		c.getPostById(0);
	}

	@Test
	public void testAddPost() throws BusinessException {
		assertEquals(c.addPost(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test(expected = Exception.class)
	public void testDeletePostById() throws BusinessException {
		c.deletePostById(0);
	}

}
