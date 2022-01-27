import { MockedComponentFixture, MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { HeaderModule } from '~app/core/header/header.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: MockedComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await MockBuilder(HeaderComponent, HeaderModule);

    fixture = MockRender(HeaderComponent);
  });

  it(`should create`, () => {
    expect(fixture).toBeTruthy();
  });

  it('should have title', () => {
    expect(ngMocks.formatText(ngMocks.find('h1'))).toContain('Seed APP');
  });
});
