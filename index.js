function receivesAFunction (cb) {
    console.log(cb());
}

receivesAFunction(function () {return "This is what will pass into cb"});


function returnsANamedFunction () {
    return function Jellyfish() {
        console.log("this is my fishname");
    };
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log('this function has no name');
    }
}
