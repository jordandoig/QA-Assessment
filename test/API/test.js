var common = require("../common");
var assert = common.assert;
var request = common.request;

it("Should return a response from the API.", () => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    assert.exists(statusCode, 'ShapeShift API should return a response from GET /rate/btc_ltc.');
  });
});

it("Should return a response from the API with status 200.", () => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var status = res.res.status;
    assert.equal(200, status, 'ShapeShift API should return a response with status 200 from GET /rate/btc_ltc.');
  });
});

it("Should return a response from the API with a pair that matches the request pair.", () => {
  var reqPair = 'btc_ltc';
  var req = request('https://shapeshift.io').get('/rate/' + reqPair);
  req.end((err, res) => {
    var resPair = res.res.body.pair;
    assert.equal(reqPair, resPair, 'ShapeShift API should return a response where the response pair matches the request pair.');
  });
});

it("Should return a response from the API with a rate.", () => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var rate = res.res.body.rate;
    assert.exists(rate, 'ShapeShift API should return a response with a rate.');
  });
});
