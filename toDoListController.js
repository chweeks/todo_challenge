toDoList.controller("ToDoListController", [function(){

  var self = this;

  self.tasks = [];
  self.tab = 1;

  self.addTask = function(string){
    if(string.length > 3){
      self.pushTask(string);
    }
  };

  self.pushTask = function(string){
    self.tasks.push({ task: string,
                      completed: false })
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

  self.allCount = function(){
    return self.tasks.length;
  };

  self.activeCount = function(){
    var active = 0;
    for(i = 0; i < self.tasks.length; i++){
      if(self.tasks[i].completed == false){ active++ }
    };
    return active;
  };

  self.completeCount = function(){
    var completed = 0;
    for(i = 0; i < self.tasks.length; i++){
      if(self.tasks[i].completed){ completed++ }
    };
    return completed;
  };

  self.clearCompletedTasks = function(){
    for(i = 0; i < self.tasks.length; i++){
      if(self.tasks[i].completed){
        self.tasks.splice(i,1);
      }
    };
  };

}]);
