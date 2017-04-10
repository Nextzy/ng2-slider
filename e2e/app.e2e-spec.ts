import { Ng2SliderPage } from './app.po';

describe('ng2-slider App', () => {
  let page: Ng2SliderPage;

  beforeEach(() => {
    page = new Ng2SliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
