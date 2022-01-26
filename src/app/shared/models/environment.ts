import { RuntimeChecks } from '@ngrx/store';

export interface Environment {
  production: boolean;
  storeRuntimeChecks: RuntimeChecks;
}
