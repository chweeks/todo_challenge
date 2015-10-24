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
      ctrl.taskInput = 'do homework';
      ctrl.addTask();
      expect(ctrl.tasks).toEqual(['do homework']);
    });
  });
});
