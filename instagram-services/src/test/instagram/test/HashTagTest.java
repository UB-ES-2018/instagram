package instagram.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import instagram.controller.HashTagController;
import instagram.controller.dto.HashTagDto;
import instagram.exception.BusinessException;
import instagram.model.HashTag;
import instagram.repository.HashTagRepository;
import instagram.service.impl.HashTagServicelmpl;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;

public class HashTagTest {

	private HashTagController c;
    private HashTag hashtag;
	private HashTagDto dto;
	private HashTagRepository rMock;
	private HashTagServicelmpl s;
	
	@Before
	public void setup() throws Exception {
    	c = new HashTagController();
		s = new HashTagServicelmpl();
		rMock = mock(HashTagRepository.class);
		dto = new HashTagDto();
		hashtag = mock(HashTag.class);
		dto.loadFromModel(hashtag);
		s.setHashTagRepository(rMock);
		c.setHashTagService(s);
    }
	
	@Test
	public void testAddHashTag() throws BusinessException {
		assertEquals(c.addHashTag(dto).getStatusCode(), HttpStatus.CREATED);
	}

	@Test
	public void testGetAll() throws BusinessException {
		assertEquals(c.getAll().getStatusCode(), HttpStatus.OK);
	}

	@Test(expected = Exception.class)
	public void testDeleteHashTagByID() throws BusinessException {
		assertEquals(c.deleteHashTagByID(0).getStatusCode(), HttpStatus.OK);
	}

}
