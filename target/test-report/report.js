$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/cowin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: amrita.jha88@gmail.com"
    }
  ],
  "line": 4,
  "name": "To check availability of vaccine",
  "description": "I want to chcek availability of vaccines in in some Noida,Ghaziabad \u0026 Delhi",
  "id": "to-check-availability-of-vaccine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of \u003cDistrict\u003e and Date of vaccination \u003cdate\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  \u003cdose\u003e of \u003cvaccine\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;",
  "rows": [
    {
      "cells": [
        "District",
        "dose",
        "date",
        "vaccine"
      ],
      "line": 13,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;1"
    },
    {
      "cells": [
        "650",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 14,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;2"
    },
    {
      "cells": [
        "651",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 15,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;3"
    },
    {
      "cells": [
        "140",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 16,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;4"
    },
    {
      "cells": [
        "141",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 17,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;5"
    },
    {
      "cells": [
        "142",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 18,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;6"
    },
    {
      "cells": [
        "143",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 19,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;7"
    },
    {
      "cells": [
        "144",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 20,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;8"
    },
    {
      "cells": [
        "145",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 21,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;9"
    },
    {
      "cells": [
        "146",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 22,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;10"
    },
    {
      "cells": [
        "147",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 23,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;11"
    },
    {
      "cells": [
        "148",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 24,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;12"
    },
    {
      "cells": [
        "149",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 25,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;13"
    },
    {
      "cells": [
        "150",
        "2",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 26,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;14"
    },
    {
      "cells": [
        "650",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 27,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;15"
    },
    {
      "cells": [
        "651",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 28,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;16"
    },
    {
      "cells": [
        "140",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 29,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;17"
    },
    {
      "cells": [
        "141",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 30,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;18"
    },
    {
      "cells": [
        "142",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 31,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;19"
    },
    {
      "cells": [
        "143",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 32,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;20"
    },
    {
      "cells": [
        "144",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 33,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;21"
    },
    {
      "cells": [
        "145",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 34,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;22"
    },
    {
      "cells": [
        "146",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 35,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;23"
    },
    {
      "cells": [
        "147",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 36,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;24"
    },
    {
      "cells": [
        "148",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 37,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;25"
    },
    {
      "cells": [
        "149",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 38,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;26"
    },
    {
      "cells": [
        "150",
        "2",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 39,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;27"
    },
    {
      "cells": [
        "650",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 40,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;28"
    },
    {
      "cells": [
        "651",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 41,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;29"
    },
    {
      "cells": [
        "140",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 42,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;30"
    },
    {
      "cells": [
        "141",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 43,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;31"
    },
    {
      "cells": [
        "142",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 44,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;32"
    },
    {
      "cells": [
        "143",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 45,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;33"
    },
    {
      "cells": [
        "144",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 46,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;34"
    },
    {
      "cells": [
        "145",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 47,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;35"
    },
    {
      "cells": [
        "146",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 48,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;36"
    },
    {
      "cells": [
        "147",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 49,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;37"
    },
    {
      "cells": [
        "148",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 50,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;38"
    },
    {
      "cells": [
        "149",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 51,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;39"
    },
    {
      "cells": [
        "150",
        "1",
        "6-06-2021",
        "\"COVAXIN\""
      ],
      "line": 52,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;40"
    },
    {
      "cells": [
        "650",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 53,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;41"
    },
    {
      "cells": [
        "651",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 54,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;42"
    },
    {
      "cells": [
        "140",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 55,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;43"
    },
    {
      "cells": [
        "141",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 56,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;44"
    },
    {
      "cells": [
        "142",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 57,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;45"
    },
    {
      "cells": [
        "143",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 58,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;46"
    },
    {
      "cells": [
        "144",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 59,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;47"
    },
    {
      "cells": [
        "145",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 60,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;48"
    },
    {
      "cells": [
        "146",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 61,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;49"
    },
    {
      "cells": [
        "147",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 62,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;50"
    },
    {
      "cells": [
        "148",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 63,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;51"
    },
    {
      "cells": [
        "149",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 64,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;52"
    },
    {
      "cells": [
        "150",
        "1",
        "6-06-2021",
        "\"Covishield\""
      ],
      "line": 65,
      "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;53"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 749703000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 650 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "650",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 2816059200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 713600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 651 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "651",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 431009200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1354900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 140 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 457322900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1370700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 141 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "141",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 447647800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1276200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 142 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "142",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 476388700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 633300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 143 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 510525300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 586200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 144 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 616967600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 882300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 145 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "145",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 426468500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 637100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 146 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "146",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 399282300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1395500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 147 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 424413200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 804800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 148 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 415066500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1328200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 149 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "149",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 418672600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 628300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 150 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 463912400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1065100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 650 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "650",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 672442400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 597400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 651 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "651",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 549019500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 2125300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 140 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 574919500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1963600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 141 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "141",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 414270800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 3970200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 142 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "142",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 368801400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 864700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 143 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 357208000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1352200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 144 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 434269400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 727200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 145 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "145",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 350163000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1265300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 146 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "146",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 691555900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1773400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 147 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 374842200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1070400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 148 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 363277200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1395200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 149 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "149",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 511522800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 3235700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 150 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  2 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 1843431900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1223600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;28",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 650 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "650",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 609499700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1283800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;29",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 651 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "651",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 366516400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 549100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;30",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 140 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 600050600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1188700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;31",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 141 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "141",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 407304100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 949300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;32",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 142 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "142",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 388605200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1240700,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;33",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 143 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 475136500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 610100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;34",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 144 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 620134500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1265400,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;35",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 145 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "145",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 445742000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 646900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;36",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 146 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "146",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 555125900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1272400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;37",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 147 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 533990400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1259200,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;38",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 148 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 463534800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 598900,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;39",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 149 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "149",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 395969200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 514200,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;40",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 150 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"COVAXIN\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 426864800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 577700,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;41",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 650 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "650",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 361837300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 623400,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;42",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 651 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "651",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 386704500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 586900,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;43",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 140 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "140",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 1486117800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 736700,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;44",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 141 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "141",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 916985000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1584500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;45",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 142 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "142",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 314716000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 875800,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;46",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 143 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "143",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 319018500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1103100,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;47",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 144 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 434406500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1362000,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;48",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 145 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "145",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 394496700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1210900,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;49",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 146 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "146",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 406374600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 879500,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;50",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 147 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 379548700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1130600,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;51",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 148 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 537413100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1042500,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;52",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 149 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "149",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 475189100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 1360900,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify availability of Covieshield and Covaxin in some Noida,Ghaziabad \u0026 Delhi",
  "description": "",
  "id": "to-check-availability-of-vaccine;verify-availability-of-covieshield-and-covaxin-in-some-noida,ghaziabad-\u0026-delhi;;53",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@vaccine"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have ID of 150 and Date of vaccination 6-06-2021",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I check for  1 of \"Covishield\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify if vaccine dose is available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 41
    },
    {
      "val": "06",
      "offset": 43
    },
    {
      "val": "2021",
      "offset": 46
    }
  ],
  "location": "DoseAvailabilityStepDefinition.i_have_ID_of_and_Date_of_vaccination(int,int,int,int)"
});
formatter.result({
  "duration": 443332200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});