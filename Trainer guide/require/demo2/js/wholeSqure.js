require.config({
    baseUrl: "./js",
    paths: {
        square: "helper/square",
        cube: "helper/square/cube",
        add: "helper/add",
        helper: "helper"
    },
    waitSeconds: 15
  });

define(['add', 'helper/sub', 'helper/mul','helper/div'], function(add, sub, mul, div){
    return {
        getresult: function(opa, opb){
            return mul.mul(opa, opa) + 2 * mul.mul(opa, opb) + mul.mul(opb, opb);
        }
    }

})