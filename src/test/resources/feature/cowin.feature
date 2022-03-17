#Author: amrita.jha88@gmail.com

@vaccine
Feature: To check availability of vaccine
  I want to chcek availability of vaccines in in some Noida,Ghaziabad & Delhi
  
 @vaccine
  Scenario Outline: Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad & Delhi
    Given I have ID of <District> and Date of vaccination <date>
    When I check for  <dose> of <vaccine>
    Then I verify if vaccine dose is available
    Examples: 
      | District  | dose | date| vaccine  |
      | 650 |    2 | 6-06-2021 | "COVAXIN"|
      | 651 |     2 | 6-06-2021 |"COVAXIN"|
      |140|   2 | 6-06-2021 |"COVAXIN"|
      |141|   2 | 6-06-2021 |"COVAXIN"|
      |142|   2 | 6-06-2021 |"COVAXIN"|
      |143|   2 | 6-06-2021 |"COVAXIN"|
      |144|   2 | 6-06-2021 |"COVAXIN"|
      |145|   2 | 6-06-2021 |"COVAXIN"|
      |146|   2 | 6-06-2021 |"COVAXIN"|
      |147|   2 | 6-06-2021 |"COVAXIN"|
      |148|   2 | 6-06-2021 |"COVAXIN"|
      |149|   2 | 6-06-2021 |"COVAXIN"|
      |150|   2 | 6-06-2021 |"COVAXIN"|
      | 650 |    2 | 6-06-2021 | "Covishield"|
      | 651 |     2 | 6-06-2021 |"Covishield"|
      |140|   2 | 6-06-2021 |"Covishield"|
      |141|   2 | 6-06-2021 |"Covishield"|
      |142|   2 | 6-06-2021 |"Covishield"|
      |143|   2 | 6-06-2021 |"Covishield"|
      |144|   2 | 6-06-2021 |"Covishield"|
      |145|   2 | 6-06-2021 |"Covishield"|
      |146|   2 | 6-06-2021 |"Covishield"|
      |147|   2 | 6-06-2021 |"Covishield"|
      |148|   2 | 6-06-2021 |"Covishield"|
      |149|   2 | 6-06-2021 |"Covishield"|
      |150|   2 | 6-06-2021 |"Covishield"|
      | 650 |    1 | 6-06-2021 | "COVAXIN"|
      | 651 |     1 | 6-06-2021 |"COVAXIN"|
      |140|   1 | 6-06-2021 |"COVAXIN"|
      |141|   1 | 6-06-2021 |"COVAXIN"|
      |142|   1 | 6-06-2021 |"COVAXIN"|
      |143|   1 | 6-06-2021 |"COVAXIN"|
      |144|   1 | 6-06-2021 |"COVAXIN"|
      |145|   1 | 6-06-2021 |"COVAXIN"|
      |146|   1 | 6-06-2021 |"COVAXIN"|
      |147|   1 | 6-06-2021 |"COVAXIN"|
      |148|   1 | 6-06-2021 |"COVAXIN"|
      |149|   1 | 6-06-2021 |"COVAXIN"|
      |150|   1 | 6-06-2021 |"COVAXIN"|
      | 650 |    1 | 6-06-2021 | "Covishield"|
      | 651 |     1 | 6-06-2021 |"Covishield"|
      |140|   1 | 6-06-2021 |"Covishield"|
      |141|   1 | 6-06-2021 |"Covishield"|
      |142|   1 | 6-06-2021 |"Covishield"|
      |143|   1 | 6-06-2021 |"Covishield"|
      |144|   1 | 6-06-2021 |"Covishield"|
      |145|   1 | 6-06-2021 |"Covishield"|
      |146|   1 | 6-06-2021 |"Covishield"|
      |147|   1 | 6-06-2021 |"Covishield"|
      |148|   1 | 6-06-2021 |"Covishield"|
      |149|   1 | 6-06-2021 |"Covishield"|
      |150|   1 | 6-06-2021 |"Covishield"|
      
