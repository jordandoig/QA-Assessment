function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("test", function () {
    beforeEach(function () {
       console.log("Testing...");
    });
    importTest("task3", './task3/test');
    after(function () {
        console.log("Tests Complete");
    });
});
