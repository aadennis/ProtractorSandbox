// spec.js
function sleep(durationInSeconds = 0.5) {
  browser.sleep(durationInSeconds * 1000);
}
describe('Mah Fine App', function () {

  it('should have a title', function () {
    browser.get('http://localhost:8080/stuff.html');
    sleep(0);
    expect(browser.getTitle()).toEqual('My name is John');
    sleep(0);
    var dishes = element.all(by.repeater('dishes in ctrl.Dishes').column('Lunch'));
    expect(dishes.count()).toEqual(4);
    expect(dishes.get(1).getText(2)).toEqual('McD');
    var headerContent = element(by.css('h2'));
    expect(headerContent.getText()).toEqual("The World of Classy Meals (Example:Cornflakes)");
  });
});

