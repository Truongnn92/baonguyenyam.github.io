// App
export * from './app.component';
export * from './directives/app.state';

import {AppState} from './directives/app.state';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];
