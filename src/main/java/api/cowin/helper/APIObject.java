package api.cowin.helper;

import api.cowin.core.APIResponse;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APIObject {
	
public APIResponse getResponse(RequestSpecification httprequest, String Endpoint)
{
	Response response=httprequest.request(Method.GET, Endpoint);
	return new APIResponse(response);
}
}
