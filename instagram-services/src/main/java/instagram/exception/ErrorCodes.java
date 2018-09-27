package instagram.exception;

public enum ErrorCodes {

	FORBIDDEN(403, "Forbidden access"),
	UNEXPECTED_ERROR(500, "Unexpected error"),

	USER_NOT_FOUND(1001, "User not found"),
	INVALID_USERNAME(1002, "Invalid username"),
	USERNAME_EXISTS(1003, "Username already exists"),

	MATERIAL_NOT_FOUND(1101, "Material not found"),
	INVALID_PRICES(1102, "Invalid prices"),

	UNIT_NOT_FOUND(1201, "Unit not found"),
	INVALID_UNIT(1202, "Invalid unit"),

	CHOICE_NOT_FOUND(1301, "Choice not found"),
	NO_MATERIALS(1302, "A choice must have at least one material"),
	NO_MATERIAL(1303, "No material in choice"),
	NO_UNIT(1304, "No unit in choice"),

	CARRERA_NOT_FOUND(1401, "Carrera not found");
	private int code;

	private String msg;

	ErrorCodes(int code, String msg) {
		this.code = code;
		this.msg = msg;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
}
