import {
    Route
} from '@angular/router';
import TemplateContainer from './components/template/templateContainer';
// constructor({name, useAsDefault, path, regex, serializer, data, redirectTo}: RouteDefinition)

// Import Components ////////////////////////////////////////////////

export default [
    { path: '/', name: 'Index', loader: () => require('es6-promise!./components/home')('Home') },
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    { path: '/home', name: 'Home', loader: () => require('es6-promise!./components/home')('Home') },
    { path: '/about', name: 'About', loader: () => require('es6-promise!./components/about')('About') },
    { path: '/settings', name: 'Settings', loader: () => require('es6-promise!./components/settings')('Settings') },
    { path: '/plan', name: 'Plan', loader: () => require('es6-promise!./components/plan')('Plan') },
    { path: '/custom', name: 'Custom', loader: () => require('es6-promise!./components/custom')('Custom') },
    { path: '/account/...', name: 'AccountContainer', loader: () => require('es6-promise!./components/account')('AccountContainer') },
    { path: '/authorize/...', name: 'AuthenticationContainer', loader: () => require('es6-promise!./components/authentication')('AuthenticationContainer') },
    { path: '/template/...', as: 'TemplateContainer', component: TemplateContainer }
];
