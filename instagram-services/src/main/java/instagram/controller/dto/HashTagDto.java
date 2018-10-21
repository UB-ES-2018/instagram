package instagram.controller.dto;

import instagram.model.HashTag;

public class HashTagDto {

	private int id;

	private String tag;
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getTag() {
		return tag;
	}


	public void setTag(String tag) {
		this.tag = tag;
	}


	public void loadFromModel(HashTag hashTag) {
		id = hashTag.getId();
		tag = hashTag.getTag();
	}
}