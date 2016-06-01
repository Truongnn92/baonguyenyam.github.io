import {Input, Component} from '@angular/core';
import {AppState} from '../../directives/app.state';
import {CoreComponent} from '../../services/core/core.component';
import {ApiService} from '../../services/api/api.service';

import {Title} from './title';
import {XLarge} from './x-large';

import {Search} from './pipes/search';
import {OrderBy} from './pipes/order';

import {Column} from './pipes/column';
import {Sorter} from './pipes/sorter';

import {LiveFxRate} from '../../model/liveFxRate';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'section',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  viewProviders: [
    CoreComponent
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [
    Search,
    OrderBy
  ],
  inputs: ['rows: rowLiveFxRate', 'columns: columnsLiveRate'],
  // Our list of styles in our component. We may add more to compose many styles together
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./templates/home.jade')()
})
export class Home extends CoreComponent {
  @Input() name: string;
  private rowLiveFxRate: Array<LiveFxRate>;
  private rowMyRate: Array<LiveFxRate>;
  private columnsLiveRate: Array<Column>;
  private columnsMyRate: Array<Column>;
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public apiService: ApiService, public title: Title) {
    super(appState, apiService);
   // this.rowLiveFxRate = this.getDataRowForLiveFxRate();
   // this.columnsLiveRate = this.getDataColumnsForLiveRates();
    // Bind data for My Rates box & apply sorter
    //this.rowMyRate = this.getDataRowForMyRate();
    //this.columnsMyRate = this.getDataColumnsForMyRates();
  }

  private sorter = new Sorter();
  sortLiveRate(key) {
    this.sorter.sort(key, this.rowLiveFxRate);
  }
  sortMyRate(key) {
    this.sorter.sort(key, this.rowMyRate);
  }

}
