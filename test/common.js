var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);

exports.chai = chai;
exports.assert = chai.assert;
exports.request = chai.request;
exports.should = chai.should();
