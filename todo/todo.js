function TodoCtrl($scope) {
  $scope.todos = [{text:"Learn AngularJS", done: false}, {text:"Make Todo App", done: false}];
  
  $scope.cleared = [];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  $scope.getRemainingTodos = function () {
    var count = 0;
    $scope.todos.forEach(function (todo) {
      if (!todo.done) {
        count += 1;
      };
    });
    return count;
  };
  
  $scope.addTodo = function () {
    if ($scope.formTodoText.length > 0) {
      $scope.todos.push({text: $scope.formTodoText, done: false});
      $scope.formTodoText = "";
    };
  };
  
  $scope.clearCompleted = function () {
    $scope.todos.forEach(function (todo) {
      if (todo.done) {
        $scope.cleared.push(todo);
      };
    });
    
    $scope.todos = _.filter($scope.todos, function (todo) {
      return !todo.done;
    });
  };
  
  $scope.resetList = function () {
    $scope.cleared.forEach(function (todo) {
      if (!todo.done) {
        $scope.todos.push(todo);
      };
    });
    
    $scope.cleared = _.filter($scope.cleared, function (todo) {
      return todo.done;
    });
  };
}