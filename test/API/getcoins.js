var common = require("../common");
var assert = common.assert;
var request = common.request;
var should = common.should;

it("Should return a response from the API.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    assert.exists(res, 'ShapeShift API should return a response from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API in JSON format.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    res.should.be.json;
    done();
  });
});

it("Should return a response from the API with status 200.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var status = res.status;
    assert.equal(200, status, 'ShapeShift API should return a response with status 200 from GET /getcoins.');
    done();
  });
});
