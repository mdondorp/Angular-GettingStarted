import { browser, by, element } from 'protractor';

export class APMPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getParagraphText() {
    return element(by.css('pm-root h1')).getText();
  }
}
