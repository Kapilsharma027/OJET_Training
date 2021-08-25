define([],function(){

    var mathObj = {};
    mathObj.add = function(a,b){
        return a+b;
    };

    mathObj.subtract = function(a,b){
        return a-b;
    };

    mathObj.multiply = function(a,b){
        return a*b;
    };
    //Important to return, otherwise it won't be accessible.
    return mathObj;
    //Returns just a function, other functions won't be accessible.
    //return mathObj.add;
});