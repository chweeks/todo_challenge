toDoList.controller("ToDoListController", [function(){

  var self = this;

  self.tasks = [];

  self.addTask = function(){
    self.tasks.push(self.taskInput);
  };

}]);
