define(['jquery', 'underscore'], function ($, _) {

    var wrapper = function () {
        var result =[];
        var count = 0;
        // next time try to make it shorter
        _.each(_.range(11,100), function(number1){_.each(_.range(123,987), function(number2){(number1*number2 + '').length != 4 ? count++ :(_.difference(_.map(_.range(1,10), function(number){return number.toString()}), _.toArray((number1 +''+ number2 + number1*number2))).length == 0 ? result.push(number1 + "*" + number2 + '=' + number1*number2): count ++) })});
        return result;
    };

    return {
       bruteSolve: wrapper
    };
});
