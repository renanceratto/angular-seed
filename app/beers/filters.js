(function(){
	angular.module('myApp.beers.filters', [])
	.filter('cervejaCadastrada', FilterCervejaCadastrada)
	.filter('truncate', FilterTruncate);

	function FilterCervejaCadastrada() {
	    return function (text) {
	      if (text) {
	        return 'Cerveja Inserida: ' + text; 
	      }            
	    };
	}

	function FilterTruncate () {
	    return function (text, length, end) {
	      if(text){
	        if (isNaN(length))
	            length = 100;
	        if (end === undefined)
	            end = "...";
	        if (text.length <= length || text.length - end.length <= length) {
	            return text;
	        } else {
	            return String(text).substring(0, length) + end;
	        }
	      }
	    };
	}
})();