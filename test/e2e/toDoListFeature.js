describe('To Do list maker', function() {

  var inputBox = element(by.model('string'));
  var addTaskButton = element(by.id('addTask'));
  var completeTaskButton = element(by.id('completeTask'));
  var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
  var allTab = element(by.id('allTab'));
  var completeTab = element(by.id('completeTab'));
  var incompleteTab = element(by.id('active'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('lists tasks', function() {
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    expect(tasks.get(0).getText()).toEqual('Do Homework');
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

  it('hides task when completed button is pressed', function(){
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    completeTaskButton.click();
    completeTab.click();
    expect((tasks).isDisplayed()).toBeTrue;
  });

  it('Complete button dissapears after being pressed', function(){
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    completeTaskButton.click();
    expect((completeTaskButton).isDisplayed()).toBeFalse;
  });

  it('tabs show number of tasks', function(){
    expect((allTab).getText()).toEqual('0')
    inputBox.sendKeys('Do Homework');
    addTaskButton.click();
    expect((completeTab).getText()).toEqual('1')
    completeTaskButton.click();
    expect((incompleteTab).getText()).toEqual('0')
  });
});
