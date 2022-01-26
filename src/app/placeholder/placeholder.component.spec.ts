import { MockBuilder, MockRender, MockedComponentFixture, ngMocks } from 'ng-mocks';

import { PlaceholderModule } from '~app/placeholder/placeholder.module';

import { PlaceholderComponent } from './placeholder.component';

describe('UserListComponent', () => {
  let fixture: MockedComponentFixture<PlaceholderComponent>;

  beforeEach(async () => {
    await MockBuilder(PlaceholderComponent, PlaceholderModule);

    fixture = MockRender(PlaceholderComponent);
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(fixture).toBeTruthy();
  });

  it('should have title', () => {
    expect(ngMocks.formatText(ngMocks.find('h2'))).toContain('Placeholder Theming Test Page');
  });
});
