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
import instagram.controller.dto.HashTagDto; 
import instagram.exception.BusinessException;
import instagram.model.HashTag; 
import instagram.service.HashTagService;
import instagram.service.impl.HashTagServicelmpl; 

@CrossOrigin
@RestController
@RequestMapping("/hashTags")
public class HashTagController {

	private Logger logger = LoggerFactory.getLogger(HashTagController.class);

	@Autowired
	private HashTagService hashTagService;
	
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public ResponseEntity<HashTagDto> addHashTag(@RequestBody HashTagDto hashTagDto) throws BusinessException {
		logger.info("HashTagController -> addHashTag");
		
		HashTag hashTag = hashTagService.addHashTag(hashTagDto.getTag());

		HashTagDto hashTagdDto = new HashTagDto();
		hashTagdDto.loadFromModel(hashTag);

		return new ResponseEntity<HashTagDto>(hashTagdDto, HttpStatus.CREATED);
	}
    
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<HashTagDto>> getAll(){
		logger.info("HashTagController -> getAll");

		List<HashTag> hashTags = hashTagService.getAll();

		List<HashTagDto> result = new ArrayList<HashTagDto>();
		for (HashTag hashTag : hashTags) {
			HashTagDto hashTagdDto = new HashTagDto();
			hashTagdDto.loadFromModel(hashTag);
			result.add(hashTagdDto);
		}

		return new ResponseEntity<List<HashTagDto>>(result, HttpStatus.OK);
	}
    
	@RequestMapping(value ="/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deleteHashTagByID(@PathVariable int id) throws BusinessException{
		logger.info("HashTagController -> deleteHashTagByID");
				
		this.hashTagService.deleteHashTag(id);
		
		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);
		
		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
				
	}

	public void setHashTagService(HashTagServicelmpl s) {
		hashTagService = s;
	}
	
}
