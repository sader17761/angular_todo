angular.module("todoListApp")
.service('dataService', function($http) {
  
  this.helloWorld = function(){
    console.log('This is the hello console service.');
  };

  // this.getTodos = function(callback) {
  //   $http.get('mock/todos.json').then(callback);
  // };

  this.deleteTodo = function(todo, $index) {
    console.log('The '+ todo.name + ' todo has been deleted.');
    // other logic goes here...
  };

  this.saveTodo = function(todo, $index) {
    console.log('The '+ todo.name + ' todo has been saved.');
  };

});
