describe('To Do list', function() {

  var inputBox = element(by.model('string'));
  var addTaskButton = element(by.id('addTask'));
  var completeTaskButton = element(by.id('completeTask'));
  var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
  var allTab = element(by.id('allTab'));
  var completeTab = element(by.id('completeTab'));
  var incompleteTab = element(by.id('active'));
  var clearCompletedTasks = element(by.id('clearTasks'));

  describe('when page loaded', function(){

    beforeEach(function() {
      browser.get('http://localhost:8080');
    });

    it('displays a title', function() {
      expect(browser.getTitle()).toEqual('To-Do List');
    });

    it('displays  text box', function(){
      expect(inputBox.isDisplayed()).toBeTrue;
    });

    it('displays all tab', function(){
      expect(allTab.isDisplayed()).toBeTrue;
    });

    it('displays active tab', function(){
      expect(incompleteTab.isDisplayed()).toBeTrue;
    });

    it('displays all tab', function(){
      expect(completeTab.isDisplayed()).toBeTrue;
    });

    it('tabs show number of tasks', function(){
      expect((allTab).getText()).toEqual('All 0')
      expect((incompleteTab).getText()).toEqual('Active 0')
      expect((completeTab).getText()).toEqual('Completed 0')
    });

    it('clear completed task button is hidden', function(){
      expect(clearCompletedTasks.isDisplayed()).toBeFalse;
    });
  });

  describe('when task is added', function(){

    beforeEach(function() {
      browser.get('http://localhost:8080');
      inputBox.sendKeys('Do Homework');
      addTaskButton.click();
    });

    it('lists tasks', function() {
      expect(tasks.get(0).getText()).toEqual('Do Homework');
    });

    it('has a completed task button', function(){
      expect((completeTaskButton).isDisplayed()).toBeTrue;
    });

    it('has a clear completed tasks button', function(){
      expect((clearCompletedTasks).isDisplayed()).toBeFalse;
    });
  });

  describe('when completed task button is pressed', function(){

    beforeEach(function() {
      browser.get('http://localhost:8080');
      inputBox.sendKeys('Do Homework');
      addTaskButton.click();
      completeTaskButton.click();
    });

    it('Complete button dissapears', function(){
      expect((completeTaskButton).isDisplayed()).toBeFalse;
    });

    it('hides task', function(){
      expect((tasks).isDisplayed()).toBeFalse;
    });

    it('shows task in completed tab', function(){
      completeTab.click();
      expect((tasks).isDisplayed()).toBeTrue;
    });
  });

  describe('when clear completed tasks button is pressed', function(){

    beforeEach(function() {
      browser.get('http://localhost:8080');
      inputBox.sendKeys('Do Homework');
      addTaskButton.click();
      completeTaskButton.click();
      clearCompletedTasks.click();
    });

    it('removes completed tasks', function(){
      expect((completeTab).getText()).toEqual('Completed 0')
    });

    it('cleat task button is hidden', function(){
      expect(clearCompletedTasks.isDisplayed()).toBeFalse;
    });
  });
});
