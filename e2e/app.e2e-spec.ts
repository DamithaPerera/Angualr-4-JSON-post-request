import { Mytest2Page } from './app.po';

describe('mytest2 App', () => {
  let page: Mytest2Page;

  beforeEach(() => {
    page = new Mytest2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
