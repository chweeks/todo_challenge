describe('To Do list maker', function() {

  var inputBox = element(by.model('string'));
  var addTaskButton = element(by.id('addTask'));
  var completeTaskButton = element(by.id('completeTask'));
  var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
  var allTab = element(by.id('allTab'));
  var completeTab = element(by.id('completeTab'));
  var incompleteTab = element(by.id('active'));
  var clearCompletedTasks = element(by.id('clearTasks'));


  beforeEach(function() {
    browser.get('http://localhost:8080');
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('lists tasks', function() {
    expect(tasks.get(0).getText()).toEqual('Do Homework');
  });

  it('has a completed task button when tasks are added', function(){
    expect((completeTaskButton).isDisplayed()).toBeTruthy();
  });

  it('hides task when completed button is pressed', function(){
    completeTaskButton.click();
    expect((tasks).isDisplayed()).toBeFalse;
  });

  it('hides task when completed button is pressed', function(){
    completeTaskButton.click();
    completeTab.click();
    expect((tasks).isDisplayed()).toBeTrue;
  });

  it('Complete button dissapears after being pressed', function(){
    completeTaskButton.click();
    expect((completeTaskButton).isDisplayed()).toBeFalse;
  });

  it('tabs show number of tasks', function(){
    expect((allTab).getText()).toEqual('All 1')
    expect((incompleteTab).getText()).toEqual('Active 1')
    completeTaskButton.click();
    expect((incompleteTab).getText()).toEqual('Active 0')
  });

  it('clear completed tasks button removes completed tasks', function(){
    completeTaskButton.click();
    clearCompletedTasks.click();
    expect((completeTab).getText()).toEqual('Completed 0')
  });
});
