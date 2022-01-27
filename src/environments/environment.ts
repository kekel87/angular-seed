// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from 'src/app/shared/models/environment';

export const environment: Environment = {
  production: false,
  storeRuntimeChecks: {
    strictStateSerializability: true,
    strictActionSerializability: true,
    strictActionImmutability: true,
    strictStateImmutability: true,
    strictActionWithinNgZone: true,
    strictActionTypeUniqueness: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
