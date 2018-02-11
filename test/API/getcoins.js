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

it("Should return a response from the API with an Object called body.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var bodyType = typeof(res.res.body);
    assert.equal('object', bodyType, 'ShapeShift API should return a response with an Object called body from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body that is not empty.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    assert.isNotEmpty(body, 'ShapeShift API should return a response with a non-empty Object called body from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body composed of Objects.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    var containsNonObject = false;
    // Iterate through keys in body, searching for key that is not an object
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        if (typeof(body[key]) !== 'object') {
          containsNonObject = true;
          break;
        }
      }
    }
    assert.equal(false, containsNonObject, 'ShapeShift API should return a response with a body composed of Objects from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body composed of Objects, each having a name.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    var containsNamelessObject = false;
    // Iterate through keys in body, searching for key that is not an object
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        if (!body[key].hasOwnProperty('name')) {
          containsNamelessObject = true;
          break;
        }
      }
    }

    assert.equal(false, containsNamelessObject, 'ShapeShift API should return a response with a body composed of Objects, each having a name, from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body composed of Objects, each having a symbol.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    var containsSymbollessObject = false;
    // Iterate through keys in body, searching for key that is not an object
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        if (!body[key].hasOwnProperty('symbol')) {
          containsSymbollessObject = true;
          break;
        }
      }
    }

    assert.equal(false, containsSymbollessObject, 'ShapeShift API should return a response with a body composed of Objects, each having a symbol, from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body composed of Objects, each having a image.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    var containsImagelessObject = false;
    // Iterate through keys in body, searching for key that is not an object
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        if (!body[key].hasOwnProperty('image')) {
          containsImagelessObject = true;
          break;
        }
      }
    }

    assert.equal(false, containsImagelessObject, 'ShapeShift API should return a response with a body composed of Objects, each having a image, from GET /getcoins.');
    done();
  });
});

it("Should return a response from the API with a body composed of Objects, each having a status.", (done) => {
  var req = request('https://shapeshift.io').get('/getcoins');
  req.end((err, res) => {
    var body = res.res.body;
    var containsStatuslessObject = false;
    // Iterate through keys in body, searching for key that is not an object
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        if (!body[key].hasOwnProperty('status')) {
          containsStatuslessObject = true;
          break;
        }
      }
    }

    assert.equal(false, containsStatuslessObject, 'ShapeShift API should return a response with a body composed of Objects, each having a status, from GET /getcoins.');
    done();
  });
});
