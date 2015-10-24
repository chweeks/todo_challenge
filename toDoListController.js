toDoList.controller("ToDoListController", [function(){

  var self = this;

  self.tasks = [];
  self.completedTasks = [];

  self.addTask = function(string){
    self.tasks.push({ task: string,
                      completed: false });
  };

  self.completedTask = function(task){
    task.completed = true;
  };
}]);
