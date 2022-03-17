package api.cowin.core;

import java.util.HashMap;

import api.cowin.utilities.ReadAndWrite;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;

public class BaseTest {
	private String basePointUrl;
	private String contentType;
	private static RequestSpecification httpRequest;

	@Before
	public void TestSetUp() throws Exception {
	
		HashMap<String, String> propertiesFile = ReadAndWrite.getPropertyAsHashMap("config");
		
		basePointUrl =propertiesFile.get("url");
		contentType=propertiesFile.get("contentType");
		RestAssured.baseURI = basePointUrl;
		httpRequest=RestAssured.given();
		

	}
	
	public void tearDown(Scenario scenario)
	{
		if(scenario.isFailed()) {
			scenario.write("***********");
			scenario.write("Test case failed is:"+scenario.getStatus());
		}
		else
		{
			scenario.write("*************");
			scenario.write("Test case passed is:"+scenario.getStatus());
		}
	}
	public static RequestSpecification gethttprequest()
	{
		return httpRequest;
	}
	}
	