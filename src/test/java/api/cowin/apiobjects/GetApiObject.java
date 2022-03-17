package api.cowin.apiobjects;



import api.cowin.core.APIResponse;
import api.cowin.helper.APIObject;
import io.restassured.specification.RequestSpecification;

public class GetApiObject {
	APIObject apiobject=new APIObject();

	private static final String GET = "appointment/sessions/public/findByDistrict?district_id=14&date=11-06-2021";
	public APIResponse get(RequestSpecification httpRequest) {
		APIResponse response = apiobject.getResponse(httpRequest, GET);
		return response;

}
}