describe('To Do list maker', function() {

  var inputBox = element(by.model('string'));
  var addTaskButton = element(by.id('addTask'));
  var completeTaskButton = element(by.id('completeTask'));
  var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('lists tasks', function() {

    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    expect(tasks.get(0).getText()).toEqual('Do Homework Completed');
  });

  it('has a completed task button when tasks are added', function(){
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    expect((completeTaskButton).isDisplayed()).toBeTruthy();
  });

  it('hides task when completed button is pressed', function(){
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    completeTaskButton.click();
    expect((tasks).isDisplayed()).toBeFalse;
  });
});
