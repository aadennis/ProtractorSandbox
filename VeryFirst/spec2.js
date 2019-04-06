var entryPage = 'https://angularjs.org';

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        function sleep(durationInSeconds = 0.5) {
            browser.sleep(durationInSeconds * 1000);
        }
      browser.get(entryPage);
      sleep();  
      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      sleep();
      element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);
      sleep();
    });
  });
