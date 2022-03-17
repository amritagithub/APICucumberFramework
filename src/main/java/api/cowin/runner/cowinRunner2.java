package api.cowin.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\feature\\slot.feature", plugin = { "pretty",
		"html:target/test-report", "json:target/test.json" },

		glue = {""}, monochrome = true, tags = {}

)

public class cowinRunner2 {

}
			