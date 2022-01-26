import { Environment } from 'src/app/shared/models/environment';

export const environment: Environment = {
  production: true,
  storeRuntimeChecks: {
    strictStateSerializability: false,
    strictActionSerializability: false,
    strictActionImmutability: false,
    strictStateImmutability: false,
    strictActionWithinNgZone: false,
    strictActionTypeUniqueness: false,
  },
};
