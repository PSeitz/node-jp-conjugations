var verbs = require("./index"),
    lodash = require("lodash");

function test(input, match) {
  if(!lodash.isEqual(input, match)){
  	console.error(input+" does not match "+match);
  }
  	// exit(1);
}

// console.log(verbs.conjugate("ある", "v5r"));

test(verbs.conjugate("見る", "v1").getForm("present polite"), "見ます");

test(verbs.conjugate("有る", "v5r").getForm("present polite"), "有ります");

test(verbs.conjugate("ある", "v5r-i").getForm("present polite"), "あります");

// no tests at the moment
// console.log(verbs.conjugate("みる", "v1"));
// console.log(verbs.conjugate("みる"));

// console.log(verbs.unconjugate("みられる", "v1"));
// console.log(verbs.unconjugate("いかされている"));

// console.log("no errors");
