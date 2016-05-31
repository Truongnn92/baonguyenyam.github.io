import {
    Route
} from '@angular/router';
// constructor({name, useAsDefault, path, regex, serializer, data, redirectTo}: RouteDefinition)

// Import Components ////////////////////////////////////////////////

export default [
    { path: '/', name: 'Index', loader: () => require('es6-promise!./components/home')('Home') },
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    { path: '/home', name: 'Home', loader: () => require('es6-promise!./components/home')('Home') },
    { path: '/about', name: 'About', loader: () => require('es6-promise!./components/about')('About') }

];
