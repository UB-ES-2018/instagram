package instagram.exception;

public class ForbiddenException extends BusinessException {

	private static final long serialVersionUID = 1L;

	public ForbiddenException() {
		super(ErrorCodes.FORBIDDEN);
	}
}
