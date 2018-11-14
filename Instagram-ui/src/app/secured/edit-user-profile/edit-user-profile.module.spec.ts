import { EditUserProfileModule } from './edit-user-profile.module';

describe('EditUserProfileModule', () => {
  let editUserProfileModule: EditUserProfileModule;

  beforeEach(() => {
    editUserProfileModule = new EditUserProfileModule();
  });

  it('should create an instance', () => {
    expect(editUserProfileModule).toBeTruthy();
  });
});
