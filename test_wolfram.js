describe('Smoke test for Wolfram Alpha', function(){

    beforeEach(function(){ 
        browser.waitForAngularEnabled(false);

        browser.driver.manage().window().setSize(1280, 1024);
        browser.get('https://www.wolframalpha.com/');
        expect(browser.getTitle()).toEqual('Wolfram|Alpha: Computational Intelligence');

      });

    afterEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://angular.io/');
    });

      it('Find solution', function(){
        let search = element(by.id('query'));
        search.sendKeys('x + y');
        browser.driver.sleep(2000)
        expect(search.getAttribute('value')).toEqual('x + y');

        let button = element(by.css('.eq'));
        button.click();

        browser.driver.sleep(2000)
        let signIn = element(by.cssContainingText('.sign-in', 'Sign in'));
        browser.driver.sleep(2000);
        signIn.click();

        browser.driver.sleep(2000)
        //expect(signIn.getText()).toEqual('Sign In - Wolfram|Alpha');
        //let createAcc = element(by.id('create-account'));
        //var createAcc = element(by.css('a[href*="create"]'));

        //createAcc.click();

        var mail = element(by.css('.form-control'));
        mail.sendKeys('amina.alijagic@atlantbh.com');
        
        browser.driver.sleep(2000);
        //var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'myInput' to contain the input 'foo'.
        //browser.wait(EC.textToBePresentInElementValue($(mail), 'amina.alijagic@atlantbh.com'), 5000);
        expect(mail.getAttribute('value')).toEqual('amina.alijagic@atlantbh.com');
    
        var pass = element(by.css('[name="j_password"]'));
        pass.sendKeys('testni');
        //element(by.id('passwordConfirm')).sendKeys('testni');

        //element(by.id('accountAgreement')).click();
        //browser.driver.sleep(1500);
        //browser.wait(EC.textToBePresentInElementValue($(pass), 'testni'), 5000);
        browser.driver.sleep(2000);

        expect(pass.getAttribute('value')).toEqual('testni');

        element(by.cssContainingText('#sign-in-btn.submit-btn.btn-primary', 'Sign in')).click();
        
        browser.driver.sleep(7000);

        //expect(browser.getTitle()).toEqual('x + y - Wolfram|Alpha');

        element(by.css('.icon-random-example-icon.ng-binding')).click();

        browser.driver.sleep(3000);
        var drop = element(by.css('.icon-apps-header.has-dropdown.ng-binding'));
        drop.click();

        browser.driver.sleep(2000);

        //element(by.id('#to-wpg')).click();
        //var select = element(by.css('a[href*="/problem-generator"]'));
        //select.$('[value="Problem Generator"]').click();
        var gen = element(by.cssContainingText('.ng-binding', 'Problem Generator'));
        gen.click();

        browser.driver.sleep(3500);
        var arit = element(by.cssContainingText('.bottomTitleBar.ng-scope.ng-binding', 'Arithmetic'));
        arit.click();

        browser.driver.sleep(3500);

        //browser.driver.sleep(4500);
        
        //element(by.cssContainingText('.wpg-link.tracking-apps-link::before', 'Problem Generator')).click();
        //var generator = element(by.cssContainingText('a[href*="/problem-generator"]', 'Problem Generator'));
        //var generator = element(by.css('.wpg-link.tracking-apps-link'));
        //var generator = element(by.linkText('Problem Generator'));
        //generator.click();
        
        //var elements = element.all(by.repeater('Problem in Apps'));
        //elements.get(1).click();
        
        //let drop = element(by.css('.apps-dropdown li'));
        //drop[1].click();
        //element(by.css(".wpg-link.tracking-apps-link [value='Problem Generator']")).click();
        
      });
});