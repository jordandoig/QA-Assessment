var common = require("../common");
var assert = common.assert;
var request = common.request;

it("Should return a response from the API.", () => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    assert.exists(statusCode, 'ShapeShift API should return a response from GET /rate/btc_ltc.');
  });
});

it("Should return a response from the API with status code 200.", () => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var statusCode = res.res.statusCode;
    assert.equal(200, statusCode, 'ShapeShift API should return a response with status code 200 from GET /rate/btc_ltc.');
  });
});
