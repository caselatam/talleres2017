import { TalleresPage } from './app.po';

describe('talleres App', function() {
  let page: TalleresPage;

  beforeEach(() => {
    page = new TalleresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
