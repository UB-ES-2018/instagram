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
import instagram.controller.dto.CommentDto;
import instagram.exception.BusinessException;
import instagram.model.Comment;
import instagram.service.CommentService;

@CrossOrigin
@RestController
@RequestMapping("/comments")
public class CommentController {

	private Logger logger = LoggerFactory.getLogger(CommentController.class);

	@Autowired
	private CommentService commentService;

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<CommentDto> addComment(@RequestBody CommentDto commentDto) throws BusinessException {
		logger.info("CommentController -> addComment");

		Comment comment = commentService.addComment(commentDto.getIdUser(), commentDto.getIdPost(), commentDto.getContent());
		CommentDto result = new CommentDto();
		result.loadFromModel(comment);

		return new ResponseEntity<CommentDto>(result, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
	public ResponseEntity<CommentDto> getComment(@PathVariable int id) throws BusinessException {
		logger.info("CommentController -> getComment");

		Comment comment = commentService.getCommentById(id);
		CommentDto result = new CommentDto();
		result.loadFromModel(comment);

		return new ResponseEntity<CommentDto>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getByPost/{idPost}", method = RequestMethod.GET)
	public ResponseEntity<List<CommentDto>> getPostComments(@PathVariable int idPost) throws BusinessException {
		logger.info("CommentController -> getPostComments");

		List<Comment> comments = commentService.getCommentsByPost(idPost);
		
		List<CommentDto> result = new ArrayList<CommentDto>();
		for (Comment comment : comments) {
			CommentDto postComment = new CommentDto();
			postComment.loadFromModel(comment);
			result.add(postComment);
		}

		return new ResponseEntity<List<CommentDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/getByUser/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<List<CommentDto>> getUserComments(@PathVariable int idUser) throws BusinessException {
		logger.info("CommentController -> getUserComments");

		List<Comment> comments = commentService.getCommentsByUser(idUser);
		
		List<CommentDto> result = new ArrayList<CommentDto>();
		for (Comment comment : comments) {
			CommentDto postComment = new CommentDto();
			postComment.loadFromModel(comment);
			result.add(postComment);
		}

		return new ResponseEntity<List<CommentDto>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = "/update/content", method = RequestMethod.PUT)
	public ResponseEntity<CommentDto> updateContent(@RequestBody CommentDto commentDto) throws BusinessException {
		logger.info("CommentController -> updateContent");
		
		Comment comment = commentService.editComment(commentDto.getId(), commentDto.getContent());
		CommentDto result = new CommentDto();
		result.loadFromModel(comment);

		return new ResponseEntity<CommentDto>(result, HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseDto> deleteCommentByID(@PathVariable int id) throws BusinessException {
		logger.info("CommentController -> deleteCommentByID");

		this.commentService.deleteComment(id);

		ResponseDto responseDto = new ResponseDto();
		responseDto.setOk(true);

		return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
	}
}
