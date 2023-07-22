var createHelloWorld = function() {
    return function(createHelloWorld) {
        return "Hello World";
    }
    console.log(createHelloWorld);
};