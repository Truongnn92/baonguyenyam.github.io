import {Route} from '@angular/router';
import AccountHomeContainer from './home/accountHomeContainer';
import AddAccountContainer from './add/addContainer';
import ProfileAccountContainer from './profile/profileContainer';

export default [
    { path: '/', component: AccountHomeContainer, as: 'AccountHomeContainer', useAsDefault: true },
    { path: '/add', component: AddAccountContainer, as: 'AddAccountContainer' },
    { path: '/profile', component: ProfileAccountContainer, as: 'ProfileAccountContainer' }
];
