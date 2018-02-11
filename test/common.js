var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);

var options = {};

exports.options = options;
exports.chai = chai;
exports.assert = chai.assert;
exports.request = chai.request;
