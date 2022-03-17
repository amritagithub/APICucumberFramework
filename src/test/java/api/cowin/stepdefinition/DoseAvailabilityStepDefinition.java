package api.cowin.stepdefinition;

import java.io.FileWriter;
import java.io.PrintWriter;

import api.cowin.apiobjects.GetApiObject;
import api.cowin.core.APIResponse;
import api.cowin.core.BaseTest;
import api.cowin.core.IRestResponse;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class DoseAvailabilityStepDefinition {
	GetApiObject getApiObject;
	private static APIResponse response1;

	private static IRestResponse<DoseAvailabilityStepDefinition> doseAvailabilityStepDefinition;

	public DoseAvailabilityStepDefinition() {
		getApiObject = new GetApiObject();

	}

	RequestSpecification request;
	Response response;
	FileWriter fw;
	PrintWriter out;

	@Given("^I have ID of (\\d+) and Date of vaccination (\\d+)-(\\d+)-(\\d+)$")
	public void i_have_ID_of_and_Date_of_vaccination(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		fw = new FileWriter("Vaccine.txt", true);
		out = new PrintWriter(fw);

		request = BaseTest.gethttprequest();
		
		response1 = getApiObject.get(request);
		int i = response1.getStatusCode();

	}
public void test()
{RestAssured.baseURI="";
RequestSpecification request=RestAssured.given();
Response response=r;
response.getBody().asString();
}
	/*
	 * @When("^I check for  (\\d+) of \"([^\"]*)\"$") public void i_check_for_of(int
	 * arg1, String arg2) {
	 * 
	 * JsonPath jsonobj=response1.jsonPath(); int size
	 * =jsonobj.get("sessions.center_id.size()"); for(int i=1; i<size;i++) {
	 * 
	 * 
	 * int
	 * numOfDoseAvaialble=jsonobj.get("sessions.available_capacity_dose"+arg1+"["+i+
	 * "]"); if(numOfDoseAvaialble>0) { String
	 * vaccinename=jsonobj.get("sessions.vaccine["+i+"]");
	 * if(vaccinename.equalsIgnoreCase(arg2)) { String
	 * place_name=jsonobj.get("sessions.name["+i+"]"); String
	 * state_name=jsonobj.getString("sessions.state_name["+i+"]");
	 * out.println("Dose "+arg1+" of "+arg2+" Vaccine is available at :"
	 * +place_name+" which is in "+state_name); out.close(); } }
	 * 
	 * 
	 * 
	 * }
	 * 
	 * 
	 * }
	 * 
	 * 
	 * @Then("^I verify if vaccine dose is available$") public void
	 * i_verify_if_vaccine_dose_is_available() throws Throwable { // Write code here
	 * that turns the phrase above into concrete actions
	 * System.out.println("Hello"); }
	 */

}
