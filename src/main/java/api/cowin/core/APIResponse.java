package api.cowin.core;

import java.util.Collections;
import java.util.List;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class APIResponse {

	protected final Response res;

	public APIResponse(Response res) {
		this.res = res;
	}

	public String getResponseAsString() {
		String response = "";
		if (this.res != null) {
			response = this.res.asString();
		}
		return response;
	}

	public long getResponseTime() {
		long responseTime = 0L;
		try {
			responseTime = this.res.getTime();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseTime;
	}

	public Object getNodeValue(String jsonPath) {
		Object obj = "";
		String json = this.res.asString();
		try {
			obj = JsonPath.with(json).get(jsonPath);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj == null ? "" : obj;
	}

	public Object getNodeValues(String jsonPath) {
		List<?> list = Collections.emptyList();
		String json = this.res.asString();
		try {
			list = JsonPath.with(json).get(jsonPath);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public int getStatusCode() {
		return this.res.getStatusCode();
	}

	public Response getResponse() {
		return this.res;
	}

}
