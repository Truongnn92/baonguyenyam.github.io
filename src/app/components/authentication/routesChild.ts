import {Route} from '@angular/router';
import AuthenticationHomeContainer from './home/accountHomeContainer';
import RegisterAccountContainer from './register/registerContainer';
import ForgotAccountContainer from './forgot/forgotContainer';

export default [
    { path: '/', component: AuthenticationHomeContainer, as: 'AuthenticationHomeContainer', useAsDefault: true },
    { path: '/register', component: RegisterAccountContainer, as: 'RegisterAccountContainer' },
    { path: '/forgot', component: ForgotAccountContainer, as: 'ForgotAccountContainer' }
];
