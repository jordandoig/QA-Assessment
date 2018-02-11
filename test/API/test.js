var common = require("../common");
var assert = common.assert;
var request = common.request;
var should = common.should;

it("Should return a response from the API.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    assert.exists(res, 'ShapeShift API should return a response from GET /rate/btc_ltc.');
    done();
  });
});

it("Should return a response from the API in JSON format.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    res.should.be.json;
    done();
  });
});

it("Should return a response from the API with status 200.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var status = res.status;
    assert.equal(200, status, 'ShapeShift API should return a response with status 200 from GET /rate/btc_ltc.');
    done();
  });
});

it("Should return an error when no pair is specified.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/');
  req.end((err, res) => {
    console.log(res);
    console.log(err);
    // var status = res.status;
    // assert.equal(200, status, 'ShapeShift API should return a response with status 200 from GET /rate/btc_ltc.');
    done();
  });
});

it("Should return a response from the API with a pair that matches the request pair.", (done) => {
  var reqPair = 'btc_ltc';
  var req = request('https://shapeshift.io').get('/rate/' + reqPair);
  req.end((err, res) => {
    var resPair = res.res.body.pair;
    assert.equal(reqPair, resPair, 'ShapeShift API should return a response where the response pair matches the request pair.');
    done();
  });
});

it("Should return a response from the API with a rate.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var rate = res.res.body.rate;
    assert.exists(rate, 'ShapeShift API should return a response with a rate.');
    done();
  });
});

it("Should return a response from the API with a rate that is numeric.", (done) => {
  var req = request('https://shapeshift.io').get('/rate/btc_ltc');
  req.end((err, res) => {
    var rate = res.res.body.rate;
    // numericRate will be a number if parsable, or NaN if not
    var numericRate = parseFloat(rate);

    assert.isNotNaN(numericRate, 'ShapeShift API should return a response with a rate that is numeric.');
    done();
  });
});
