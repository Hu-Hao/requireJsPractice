define(['jquery', 'underscore'], function ($, _) {

    /**
     * Returns the permutation of some elements from a set
     * @param length    number of elements to be permutated
     * @param array     elements belong
     * @returns {Array}
     */
    var wrapper = function (length, array) {
        var result =[];
        method(length, '', array, result);
        return result;
    };
    var method = function useTree(length, currentVal, nextChoices, result) {
        if (currentVal.length == length) {
            result.push(currentVal);
            return;
        }
        var goNext = function (element, index) {
            var clone = (nextChoices.slice(0));
            clone.splice(index, 1);
            return useTree(length, currentVal + element, clone, result);

        };

        _.forEach(nextChoices, goNext);
    };
    return {
        permutate: wrapper
    };
});
