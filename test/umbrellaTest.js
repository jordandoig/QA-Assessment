function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("Testing:", function () {
    // beforeEach(function () {
    //    console.log("Testing...");
    // });
    importTest("MyMath", './MyMath/test');
    importTest("API - GET /rate/[pair]", './API/rate');
    importTest("API - GET /getcoins", './API/getcoins');
    // after(function () {
    //     console.log("Tests Complete");
    // });
});
