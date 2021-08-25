define(['mathUtils'], function(mObj) {
//MathUtils is used for 2nd time here(in main 1st time), but it will be loaded once. Which allows to use it as many time we want without impacting performance.
    function getRandom(){
        //Random numbers between 0 and 100.
        var num = mObj.multiply(Math.random(), 100);
        return parseInt(num);
    }
    return getRandom;
});