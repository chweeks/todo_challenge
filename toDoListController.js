toDoList.controller("ToDoListController", [function(){

  var self = this;

  self.tasks = [];
  self.tab = 1

  self.addTask = function(string){
    self.tasks.push({ task: string,
                      completed: false });
  };

  self.completedTask = function(task){
    task.completed = true;
  };

  self.setTab = function(tabNumber){
    self.tab = tabNumber;
  }

  self.tabIsSet = function(tabNumber){
    return self.tab == tabNumber;
  };

}]);
