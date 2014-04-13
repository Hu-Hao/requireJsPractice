define(['jquery','underscore', 'permutation','hashTable'], function($, _, p, h) {
    var searched = new h.Map();
    /**
     * Not sure whether wrapper is a good way to uniform the code style or not
     * @returns {Array}
     */
    var wrapper = function(){
        var result = [];
        method('', ['1','2','3','4','5','6','7','8','9'], result);
        return result;
    };
    var search = function (restNumbers, smallMap, result){
        var permuated = p.permutate(restNumbers.length, restNumbers);
        for(var i in permuated){
                var a = permuated[i].substring(0,2);
                var b = permuated[i].substring(2,5);
                var ab = a*b;
                if(smallMap.containsKey(a*b)){
                    result.push(a + "*" + b + "=" + ab);
                }

        }
    };
    var method = function useTree( currentVal, nextChoices, result)
    {
        if(currentVal.length == 4){

              if(! searched.containsKey(currentVal)){
                  var smallMap = new h.Map();
                  smallMap.putPermutatedKey(currentVal);
                  searched.putPermutatedKey(currentVal);
                  search(nextChoices, smallMap, result);
              }
              return;
        }
        var goNext = function(element, index){
            var clone = (nextChoices.slice(0));
            clone.splice(index, 1);
            return useTree(currentVal + element,clone, result);
        };

        _.forEach(nextChoices, goNext);
    };
    return {
        answer: wrapper
    };
});

