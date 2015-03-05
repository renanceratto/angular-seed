(function(){
  angular.module('myApp.beers.services', [])
  .service('BeerService', BeerService);

  function BeerService ($http) {
    var urlBase = 'http://localhost:3000/api/beers'

    this.list = function() {
      return $http.get(urlBase);
    }

    this.get = function(id) {
      var url = urlBase + '/_id/' + id;
      return $http.get(url);
    }

    this.create = function(cerveja) {
      return $http.post(urlBase, cerveja);
    }

    this.edit = function(cerveja) {
      var url = urlBase + '/_id/' + cerveja._id;
      return $http.put(url, cerveja);
    }

    this.remove = function(cerveja) {
      var url = urlBase + '/_id/' + cerveja._id;
      return $http.delete(url);
    }

    this.removeFromList = function(lista, elemento) {
      var index = lista.indexOf(elemento);
      return lista.splice(index, 1);
    }
  }

  BeerService.$inject = ['$http'];
})();