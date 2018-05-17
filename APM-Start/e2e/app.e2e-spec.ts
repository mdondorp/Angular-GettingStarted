import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('should display welcome message', () => {
    APMPage.navigateTo();
    expect(APMPage.getParagraphText()).toEqual('Welcome to Angular: Getting Started!!');
  });
});
