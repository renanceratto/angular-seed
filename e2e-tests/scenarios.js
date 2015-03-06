'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /beers when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/beers");
  });


  describe('beers', function() {

    beforeEach(function() {
      browser.get('index.html#/beers');
    });


    it('should render beers when user navigates to /berrs', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});
