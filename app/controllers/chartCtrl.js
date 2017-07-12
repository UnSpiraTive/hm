angular
  .module('chartApp')
  .controller('chartCtrl', chartSettings);



  function chartSettings($scope, dataProvider){
    this.name = "aaa";
    console.log(dataProvider.subscribe);




  }
