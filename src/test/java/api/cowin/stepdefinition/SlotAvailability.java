package api.cowin.stepdefinition;

import java.util.ArrayList;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class SlotAvailability {
	
	RequestSpecification request;
	Response response;
	JsonPath jsonObj;
	
	@Given("^I want to verify if I have vaccine$")
	public void i_want_to_verify_if_I_have_vaccine() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
	    RestAssured.baseURI="https://cdn-api.co-vin.in/api/v2/";
	     request=RestAssured.given();
	    response=request.get("appointment/sessions/public/findByDistrict?district_id=141&date=5-06-2021");
	}
	@When("^t \"([^\"]*)\" slot is available$")
	public void t_slot_is_available(String arg1)  throws Throwable  {
	    // Write code here that turns the phrase above into concrete actions
		jsonObj=response.jsonPath();
	    int size=jsonObj.getInt("sessions.center_id.size()");
	   
	    for(int i=1;i<size;i++)
	    {
	    	
	    String vaccinename=jsonObj.getString("sessions.vaccine["+i+"]");
	    if(vaccinename.equalsIgnoreCase(arg1))
	    {
	    	int vaccinedose=jsonObj.getInt("sessions.available_capacity["+i+"]");
	    	
	    	if(vaccinedose>0)
	    	{
	    		String placeName=jsonObj.getString("sessions.name["+i+"]");
	    		ArrayList<String> slots=jsonObj.get("sessions.slots["+i+"]");
	    		
	    		System.out.println(arg1+" vaccine is available at "+placeName+" and slots are "+slots.get(0)+"");
	    	}
	    }
	    
	}}

	

}
