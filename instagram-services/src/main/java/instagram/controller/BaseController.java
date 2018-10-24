package instagram.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import instagram.exception.BusinessException;
import instagram.exception.ErrorCodes;
import instagram.exception.ForbiddenException;

@ControllerAdvice
public class BaseController {

	private Logger logger = LoggerFactory.getLogger(BaseController.class);

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDto> exceptionHandlerRuntimeException(Exception ex) {
		logger.error("Internal exception found: " + getMessage(ex), ex);
		return new ResponseEntity<ErrorDto>(createErrorFromException(ex, 500), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(BusinessException.class)
	public ResponseEntity<ErrorDto> exceptionHandlerBusinessObjectException(BusinessException ex) {
		logger.info("Business exception: " + getMessage(ex));
		return new ResponseEntity<ErrorDto>(createErrorFromBusinessException(ex), HttpStatus.CONFLICT);
	}

	@ExceptionHandler(ForbiddenException.class)
	public ResponseEntity<ErrorDto> exceptionHandleForbiddenException(ForbiddenException ex) {
		logger.info("Forbidden exception: " + getMessage(ex));
		return new ResponseEntity<ErrorDto>(createErrorFromException(ex, 403), HttpStatus.FORBIDDEN);
	}

	private ErrorDto createErrorFromException(Exception ex, int code) {
		ErrorDto error = new ErrorDto();
		error.setCode(code);
		error.setMessage(ex.getMessage());
		return error;
	}

	private ErrorDto createErrorFromBusinessException(BusinessException ex) {
		ErrorDto error = new ErrorDto();
		ErrorCodes errorCode = ex.getCode();
		error.setCode(errorCode.getCode());
		error.setMessage(errorCode.getMsg());
		return error;
	}
	
	private String getMessage(Exception exception) {
		if (exception == null || exception.getMessage() == null) {
			return "";
		}

		return exception.getMessage();
	}

}
