(function(){
  var CervejaNomeDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      replace: true,
      template: '<a href="/#/beers/{{c._id}}">{{c.name}}</a>'
    };
  };

  var CervejaDescricaoDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      template: '{{ c.description | truncate }}'
    };
  };

  var CervejaCervejariaDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      template: '{{ c.brewery.name }}'
    };
  };

  var CervejaAbvDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      template: '{{ c.abv }}'
    };
  };

  var CervejaAlterarDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      replace: true,
      template: '<a href="/#/beers/{{ c._id }}/edit">Alterar</a>'
    };
  };

  var CervejaExcluirDirective = function () {
    return {
      restrict: 'E',
      scope: true, 
      replace: true,
      template: '<button data-ng-click="delete(c)">Excluir</button>'
    };
  };

  var BeerInputFilterDirective = function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {modelo: '='},
      templateUrl: 'beers/filtro-cerveja.html'
    }
  }
  
  angular.module('myApp.beers.directives', [])
    .directive('cervejaNome', [CervejaNomeDirective])
    .directive('cervejaDescricao', [CervejaDescricaoDirective])
    .directive('cervejaCervejaria', [CervejaCervejariaDirective])
    .directive('cervejaAbv', [CervejaAbvDirective])
    .directive('cervejaAlterar', [CervejaAlterarDirective])
    .directive('cervejaExcluir', [CervejaExcluirDirective])
    .directive('filtroCerveja', [BeerInputFilterDirective])
    ;

  CervejaNomeDirective.$inject = [];
  CervejaDescricaoDirective.$inject = [];
  CervejaCervejariaDirective.$inject = [];
  CervejaAbvDirective.$inject = [];
  CervejaAlterarDirective.$inject = [];
  CervejaExcluirDirective.$inject = [];
  BeerInputFilterDirective.$inject = [];
  
}());