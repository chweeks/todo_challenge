describe('To Do list maker', function() {

  var inputBox = element(by.model('toDoCtrl.taskInput'));
  var addTaskButton = element(by.id('addTask'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('lists tasks', function() {

    inputBox.sendKeys('Do Homework');
    addTaskButton.click();

    var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
    expect(tasks.get(0).getText()).toEqual('Do Homework Completed');
  });

  it('has a completed task button when tasks are added', function(){
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    var completeTaskButton = element(by.id('completeTask'));
    expect((completeTaskButton).isDisplayed()).toBeTruthy();
  });
});
