import { SigkSensWebappPage } from './app.po';

describe('sigk-sens-webapp App', () => {
  let page: SigkSensWebappPage;

  beforeEach(() => {
    page = new SigkSensWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
