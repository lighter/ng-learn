import { BlogerPage } from './app.po';

describe('bloger App', () => {
  let page: BlogerPage;

  beforeEach(() => {
    page = new BlogerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
