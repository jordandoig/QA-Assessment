function importTest(name, path) {
    describe(name, () => {
        require(path);
    });
}

describe("Testing:", () => {
    importTest("MyMath", './MyMath/test');
    importTest("API - GET /rate/[pair]", './API/rate');
    importTest("API - GET /getcoins", './API/getcoins');
    importTest("UI", './UI/coins');
});
