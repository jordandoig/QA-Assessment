function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("test", function () {
    // beforeEach(function () {
    //    console.log("Testing...");
    // });
    importTest("MyMath", './MyMath/test');
    // after(function () {
    //     console.log("Tests Complete");
    // });
});
