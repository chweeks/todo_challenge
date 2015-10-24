describe('To Do list maker', function() {

  var inputBox = element(by.model('toDoCtrl.taskInput'))
  var addTaskButton = element(by.className('btn'))

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
    expect(tasks.get(0).getText()).toEqual('Do Homework');
  });
});
