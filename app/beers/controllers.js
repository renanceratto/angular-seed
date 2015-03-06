(function(){
  angular.module('myApp.beers.controllers', [])
  .controller('BeerListController', BeerListController)
  .controller('BeerCreateController', BeerCreateController)
  .controller('BeerGetController', BeerGetController)
  .controller('BeerEditController', BeerEditController)
  ;

  function BeerListController ($scope, $http, BeerService) {

    BeerService
    .list()
    .success(function(data) {
      console.log('Listou: ', data);
      $scope.cervejas = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    });

    $scope.delete = function(cerveja) {
      if (confirm('Tem certeza que deseja remover a cerveja ' + cerveja.name + '?')) {

        BeerService
        .remove(cerveja)
        .success(function(data){
          console.log('Removeu: ', data);
          BeerService.removeFromList($scope.cervejas, cerveja);
          alert(cerveja.name + ' removida com sucesso!');
          //Usar o UIRouter para voltar ao estado anterior
        })
        .error(function(err){
          console.log('Erro: ', err);
          alert('Falha ao remover a cerveja ' + cerveja.name + '!');
        })

      }
      
    }
  }

  function BeerGetController ($scope, $http, $routeParams, BeerService){
    var id = $routeParams.id;

    BeerService
    .get(id)
    .success(function(data){
      console.log('Localizou: ', data);
      $scope.cerveja = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    })
  }

  function BeerCreateController ($scope, $http, BeerService){
    $scope.create = function(cerveja) {
      BeerService
      .create(cerveja)
      .success(function(data){
        console.log('Inseriu: ', data);
        $scope.cervejaNova = data;
        $scope.cerveja = {};
      })
      .error(function(err){
        console.log('Erro: ', err);
      })
    }
  }

  function BeerEditController ($scope, $http, $routeParams, BeerService){
    var id = $routeParams.id;
    BeerService.
    get(id)
    .success(function(data){
      console.log('Localizou para alteração: ', data);
      $scope.cerveja = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    })

    $scope.edit = function(cerveja) {

      BeerService
      .edit(cerveja)
      .success(function(data){
        console.log('Alterou: ', data);
        $scope.cervejaAlterada = "Cerveja alterada com sucesso!";
        //Usar o UIRouter para voltar ao estado anterior
      })
      .error(function(err){
        console.log('Erro: ', err);
        $scope.cervejaAlterada = "Falha ao alterar Cerveja!";
      })
    }
  }

  BeerListController.$inject = ['$scope', '$http', 'BeerService'];
  BeerCreateController.$inject = ['$scope', '$http', 'BeerService'];
  BeerGetController.$inject = ['$scope', '$http', '$routeParams', 'BeerService'];
  BeerEditController.$inject = ['$scope', '$http', '$routeParams', 'BeerService'];

})();