package instagram.model;

public class CommentLoad {
	
	private int idComment;
	
	private String name;
	
	private String content;
	
	private boolean liked;

	public int getIdComment() {
		return idComment;
	}

	public void setIdComment(int idComment) {
		this.idComment = idComment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public boolean isLiked() {
		return liked;
	}

	public void setLiked(boolean liked) {
		this.liked = liked;
	}
	
	public void loadDataFromComment(Comment comment) {
		this.idComment = comment.getId();
		this.content = comment.getContent();
	}

}
