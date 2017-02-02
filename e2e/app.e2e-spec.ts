import { MapTestPage } from './app.po';

describe('map-test App', function() {
  let page: MapTestPage;

  beforeEach(() => {
    page = new MapTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
