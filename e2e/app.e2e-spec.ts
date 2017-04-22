import { A2PlaygroundPage } from './app.po';

describe('a2-playground App', () => {
  let page: A2PlaygroundPage;

  beforeEach(() => {
    page = new A2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
