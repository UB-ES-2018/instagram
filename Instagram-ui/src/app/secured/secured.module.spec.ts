import { SecuredModule } from './secured.module';

describe('SecuredModule', () => {
  let securedModule: SecuredModule;

  beforeEach(() => {
    securedModule = new SecuredModule();
  });

  it('should create an instance', () => {
    expect(securedModule).toBeTruthy();
  });
});
