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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import instagram.controller.dto.ResponseDto;
import instagram.controller.dto.PostTagDto;
import instagram.exception.BusinessException;
import instagram.model.PostTag;
import instagram.service.PostTagService;

@CrossOrigin
@RestController
@RequestMapping("/postTags")
public class PostTagController {

	private Logger logger = LoggerFactory.getLogger(PostTagController.class);

	@Autowired
	private PostTagService postTagService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public ResponseEntity<PostTagDto> addPost_Tag(@RequestBody PostTagDto postTagDto) throws BusinessException {
		logger.info("Post_TagController -> addPost_Tag");
		
		PostTag postTag = postTagService.addPostTag(postTagDto.getIdPost(), postTagDto.getIdTag());

		PostTagDto postTagdDto = new PostTagDto();
		postTagdDto.loadFromModel(postTag);

		return new ResponseEntity<PostTagDto>(postTagdDto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<PostTagDto>> getAll(){
		logger.info("Post_TagController -> getAll");

		List<PostTag> postTags = postTagService.getAll();

		List<PostTagDto> result = new ArrayList<PostTagDto>();
		for (PostTag postTag : postTags) {
			PostTagDto postTagdDto = new PostTagDto();
			postTagdDto.loadFromModel(postTag);
			result.add(postTagdDto);
		}

		return new ResponseEntity<List<PostTagDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deletePost_TagByID(@PathVariable int id) throws BusinessException{
		logger.info("Post_TagController -> deletePost_TagByID");
				
		this.postTagService.deletePostTag(id);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}
}
