package api.cowin.core;

import io.restassured.response.Response;

public interface IRestResponse<T>{
		 public String getBody();
		 
		 public int getStatusCode();
		 
		 public boolean isSuccessful();
		 
		 public Response getResponse();

	

}
