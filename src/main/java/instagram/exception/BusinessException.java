package instagram.exception;

public class BusinessException extends Exception {

	private static final long serialVersionUID = 1L;

	private ErrorCodes code = null;

	public BusinessException(ErrorCodes code) {
		this.code = code;
	}

	public ErrorCodes getCode() {
		return code;
	}
}
