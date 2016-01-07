(function(global) {
    'use strict';

    var key = '',
        checkIsArray = '',
        checkType = "",
        _ = {};

    _ = {

        /*
        _.each([1, 2, 3], alert);
        => alerts each number in turn...
        _.each({one: 1, two: 2, three: 3}, alert);
        => alerts each number value in turn...
        */
        each: function(param, callback) {
            checkIsArray = Array.isArray(param);
            checkType = typeof(param);

            if (checkIsArray) {
                param.forEach(function(e) {
                    callback(e);
                });
            } else if (checkType === "object") {
                for (key in param) {
                    if (param.hasOwnProperty(key)) {
                        alert(param[key]);
                    }
                }
            } else {
                console.log("Something strange");
            }
        },

        /*
        _.map([1, 2, 3], function(num){ return num * 3; });
        => [3, 6, 9]

        _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
        => [3, 6, 9]

        */
        map: function(param, callback) {
            var arr = [];
            checkIsArray = Array.isArray(param);
            checkType = typeof(param);
            if (checkIsArray) {
                param.forEach(function(e) {
                    arr.push(callback(e));
                });
                return arr;
            } else if (checkType === "object") {
                for (key in param) {
                    if (param.hasOwnProperty(key)) {
                        arr.push(param[key]);
                    }
                }
                return arr;
            } else {
                console.log("Something else");
            }
        },

        /*
            var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
            => 6
        */
        reduce: function(param, callback) {
            var sum = '';
            checkIsArray = Array.isArray(param);
            checkType = typeof(param);

            if (checkType === "object") {
                param.forEach(function(e) {
                    sum += callback(e);
                });
                return sum;
            } else {
                console.log("something else");
            }
        },
        /*
            var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
            => 2
        */
        find :function(param,callback){
            var number = '';
            checkIsArray = Array.isArray(param);
            checkType = typeof(param);

            if(checkType === "object"){
                param.forEach(function(e){
                    number = callback(e);
                });
            }
            return number;
        }

    };//end of underscore

    // expose our constructor to the global object
    global._ = _;

})(this);


