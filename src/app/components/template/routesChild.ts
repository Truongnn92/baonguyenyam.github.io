import {Route} from '@angular/router';
import TemplateHomeContainer from './home/templateHomeContainer';
import BlockTemplateContainer from './block/blockContainer';
import TableTemplateContainer from './table/tableContainer';
import FormTemplateContainer from './form/formContainer';
import ApiTemplateContainer from './api/apiContainer';

export default [
    { path: '/', component: TemplateHomeContainer, as: 'TemplateHomeContainer', useAsDefault: true },
    { path: '/block', component: BlockTemplateContainer, as: 'BlockTemplateContainer' },
    { path: '/table', component: TableTemplateContainer, as: 'TableTemplateContainer' },
    { path: '/form', component: FormTemplateContainer, as: 'FormTemplateContainer' },
    { path: '/api', component: ApiTemplateContainer, as: 'ApiTemplateContainer' }
];
