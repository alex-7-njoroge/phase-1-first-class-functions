const receivesAFunction = function(callback){
    return callback();
}
function returnsANamedFunction() {
    return function receivesAFunction(name)
    {console.log(name);}
}
 function returnsAnAnonymousFunction(){
    return function (alex) {
    console.log(alex);
}
}

