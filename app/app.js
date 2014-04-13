define(['jquery', 'underscore'], function ($, _) {
    var result = [];
    var wrapper = function (length, array) {
        method(length, '', array);

        return result;
    };
    var method = function useTree(length, currentVal, nextChoices) {
        if (currentVal.length == length) {
            result.push(currentVal);
            return;
        }
        var goNext = function (element, index) {
            var clone = nextChoices.slice(0);
            clone.splice(index, 1);
            return useTree(length, currentVal + element, clone);

        };

        _.forEach(nextChoices, goNext);
    };
    return {
        permutate: wrapper
    };
});
