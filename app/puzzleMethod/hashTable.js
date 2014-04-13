define(['jquery','underscore', 'permutation'], function($, _, p){
    function Hash() {
        this.items = {};


        this.put = function(key, value){
            this.items[key] = value;
        };

        this.containsKey = function(key){
            return this.items[key] != undefined;
        };

        this.putPermutatedKey = function(key){
            var a =[];
            for(var i in key){
                a.push(key[i]);
            }
            var keys = p.permutate(a.length, a);

            for(var i in keys){
                this.items[keys[i]] = [];
            }

        };

        this.putCandidates= function(key , value){
            if(this.items.hasOwnProperty(key)) {
                this.items[key].push(value);
            }
        };

        this.get = function(key){
            return this.items[key];
        };


    };
    return {
        Map: Hash
    };
});
