import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HeaderModule } from '~app/core/header/header.module';
import { environment } from '~environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { runtimeChecks: environment.storeRuntimeChecks }),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    StoreDevtoolsModule.instrument({
      name: 'seed',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    HeaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
