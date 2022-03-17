package api.cowin.runner;

import java.io.File;

import org.apache.logging.log4j.core.appender.FileManager;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import api.cowin.utilities.ReadAndWrite;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



 

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\feature\\cowin.feature", plugin = {  "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"} ,

		glue = {""}, monochrome = true, tags = {}

)

public class cowinRunner {
	
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(ReadAndWrite.getReportConfigPath()));
		
	}
}
			