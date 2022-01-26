import { MockBuilder, MockRender, MockedComponentFixture, ngMocks } from 'ng-mocks';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(async () => {
    await MockBuilder(AppComponent, AppModule);

    fixture = MockRender(AppComponent);
  });

  it(`should create`, () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have header component`, () => {
    expect(ngMocks.find('app-header', null)).not.toBeNull();
  });

  it(`should have router outlet`, () => {
    expect(ngMocks.find('router-outlet', null)).not.toBeNull();
  });
});
