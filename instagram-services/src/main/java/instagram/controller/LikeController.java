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
import instagram.controller.dto.LikeDto;
import instagram.exception.BusinessException;
import instagram.model.Like;
import instagram.service.LikeService;

@CrossOrigin
@RestController
@RequestMapping("/likes")
public class LikeController {

	private Logger logger = LoggerFactory.getLogger(LikeController.class);

	@Autowired
	private LikeService likeService;
	
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public ResponseEntity<LikeDto> addLike(@RequestBody LikeDto likeDto) throws BusinessException {
		logger.info("LikeController -> addLike");
		
		Like like = likeService.addLike(likeDto.getIdPost(), likeDto.getIdUser());

		LikeDto likedDto = new LikeDto();
		likedDto.loadFromModel(like);

		return new ResponseEntity<LikeDto>(likedDto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<LikeDto>> getAll(){
		logger.info("Post_TagController -> getAll");

		List<Like> likes = likeService.getAll();

		List<LikeDto> result = new ArrayList<LikeDto>();
		for (Like like : likes) {
			LikeDto likedDto = new LikeDto();
			likedDto.loadFromModel(like);
			result.add(likedDto);
		}

		return new ResponseEntity<List<LikeDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value ="/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deleteLikeByID(@PathVariable int id) throws BusinessException{
		logger.info("LikeController -> deleteLikeByID");
				
		this.likeService.deleteLike(id);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}
}