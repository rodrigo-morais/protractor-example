describe('test the calculator', function() {
    it('should sum two numbers', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8081/index.html');

        element(by.id('num1')).sendKeys('1');
        element(by.id('num2')).sendKeys('2');
        element(by.id('sum')).click();

        var result = element(by.id('result')).getText()
        expect(result).toEqual('3');
    });

    it('should protactor two numbers', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8081/index.html');

        element(by.id('num1')).sendKeys('3');
        element(by.id('num2')).sendKeys('2');
        element(by.id('product')).click();

        var result = element(by.id('result')).getText()
        expect(result).toEqual('6');
    });
});