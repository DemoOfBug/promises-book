"use strict";
function shouldFulfilled(promise) {
    return {
        "then": function(fn) {
            return promise.then((value) => {
                fn.call(promise, value);
            }, (reason) => {
                throw reason;
            }
            );
        }
    };
}
module.exports.shouldFulfilled = shouldFulfilled;