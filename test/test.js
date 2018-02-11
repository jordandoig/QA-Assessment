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
    importTest("API", './API/test');
    // after(function () {
    //     console.log("Tests Complete");
    // });
});
