describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty task input', function() {
    expect(ctrl.taskInput).toBeUndefined();
  });

  it('initialises with an empty tasks array', function() {
    expect(ctrl.tasks).toEqual([]);
  });

  describe('when inputting new task', function() {

    it('displays task', function() {
      ctrl.addTask('do homework');
      expect(ctrl.tasks[0].task).toEqual('do homework');
    });
  });

  describe('when calculating task number', function() {

    beforeEach(function() {
      ctrl.tasks=[{task: 'string', completed:true}];
    });

    it('counts all tasks', function() {
      expect(ctrl.allCount()).toBe(1);
    });

    it('counts active tasks', function(){
      expect(ctrl.activeCount()).toBe(0);
    });

    it('counts completed tasks', function(){
      expect(ctrl.completeCount()).toBe(1);
    });
  });

  describe('when clearing tasks', function(){

    beforeEach(function() {
      ctrl.tasks=[{task: 'string', completed:true}];
    });

    it('removes all completed tasks from array', function(){
      ctrl.clearCompletedTasks();
      expect(ctrl.tasks.length).toBe(0)
    });
  });
});
