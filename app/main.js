/**
 * config the path to the javascript file
 */
require.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-latest',
    'underscore': 'libs/underscore/underscore',
    'permutation' : 'puzzleMethod/permutation',
    'hashTable' : 'puzzleMethod/hashTable',
    'searchAnswer': 'puzzleMethod/searchAnswer',
     'brute': 'puzzleMethod/bruteForce',
	'app': 'app',
  },

  shim: {
      'underscore': {
           exports: '_',
      }
  } 
 
});
/**
 * main method do the output
 */
require(['jquery', 'underscore','searchAnswer','brute'], function($, _, search, brute){
 
    var time = new Date();
    var start = time.getTime();
    var answer1 = search.answer();
    var timeInterval1 = time.getTime() - start;
    start = time.getTime();
    var answer2 = brute.bruteSolve();
    var timeInterval2 = time.getTime() - start;
    var display1 = '';
    var display2 = '';
    _.each(answer1, function(el){display1 += el + '<br>'});
    display1 += 'time: ' + timeInterval1 + 'ms';
    display2 +=answer2.join("<br>") +"<br>" + 'time: ' + timeInterval2 + 'ms';
    console.log(display1);
    $('#output1').html(display1);
    console.log(brute.bruteSolve());
    $('#output2').html(display2);
});