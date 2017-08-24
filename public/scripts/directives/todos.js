angular.module("todoListApp")
.directive('mytodos', function(){
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
  };
});
