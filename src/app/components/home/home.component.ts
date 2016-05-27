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
  styles: [require('./home.css') ],
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
    this.rowLiveFxRate = this.getDataRowForLiveFxRate();
    this.columnsLiveRate = this.getDataColumnsForLiveRates();
    // Bind data for My Rates box & apply sorter
    this.rowMyRate = this.getDataRowForMyRate();
    this.columnsMyRate = this.getDataColumnsForMyRates();
  }

  private sorter = new Sorter();
  sortLiveRate(key) {
    this.sorter.sort(key, this.rowLiveFxRate);
  }
  sortMyRate(key) {
    this.sorter.sort(key, this.rowMyRate);
  }

  private getDataRowForLiveFxRate(): Array<LiveFxRate> {
    return [
      {
        Name: "SGDGHD", Pid: "9,088.56", Ask: "6,667.56", Change: "9,088.56", Update: "12:20:04 PM", Map: "/map/name", Code: "sg", Sell: "9.8098.09", Buy: "10.988.09", Mid: "87.98", Display: true
      }, {
        Name: "VNDABC", Pid: "9,566.56", Ask: "9,423.98", Change: "9,097.98", Update: "11:23:24 PM", Map: "/map/name", Code: "vn", Sell: "7.3425.19", Buy: "10.988.12", Mid: "87.36", Display: true
      }, {
        Name: "USDSGD", Pid: "9,766.76", Ask: "6,667.56", Change: "9,088.67", Update: "10:12:34 PM", Map: "/map/name", Code: "eu", Sell: "5.2347.59", Buy: "10.988.23", Mid: "44.14", Display: false
      }, {
        Name: "SGDVND", Pid: "9,455.56", Ask: "9,455.56", Change: "9,423.98", Update: "05:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.7653.12", Buy: "10.988.45", Mid: "11.33", Display: true
      }, {
        Name: "USDVND", Pid: "9,123.56", Ask: "9,213.56", Change: "9,423.98", Update: "12:20:32 PM", Map: "/map/name", Code: "ag", Sell: "3.1236.65", Buy: "10.988.67", Mid: "88.98", Display: false
      }, {
        Name: "VNDUSD", Pid: "9,433.34", Ask: "9,123.56", Change: "9,423.98", Update: "06:20:32 PM", Map: "/map/name", Code: "sg", Sell: "2.1231.89", Buy: "10.988.66", Mid: "77.63", Display: true
      }, {
        Name: "ABCVND", Pid: "9,765.76", Ask: "9,535.56", Change: "9,456.98", Update: "10:20:32 PM", Map: "/map/name", Code: "vn", Sell: "6.7544.45", Buy: "10.988.67", Mid: "68.44", Display: false
      }, {
        Name: "SNDVND", Pid: "9,233.23", Ask: "9,786.56", Change: "9,456.98", Update: "09:20:32 PM", Map: "/map/name", Code: "au", Sell: "2.8456.34", Buy: "10.988.45", Mid: "68.78", Display: true
      }, {
        Name: "YYYVND", Pid: "9,876.98", Ask: "9,452.56", Change: "9,786.98", Update: "08:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.1234.23", Buy: "10.988.34", Mid: "67.45", Display: true
      }, {
        Name: "JVCVND", Pid: "9,786.67", Ask: "9,124.56", Change: "9,567.98", Update: "06:20:32 PM", Map: "/map/name", Code: "ag", Sell: "9.8956.46", Buy: "10.988.45", Mid: "78.54", Display: true
      }, {
        Name: "SGDGAH", Pid: "9,234.45", Ask: "9,786.56", Change: "9,967.98", Update: "12:20:32 PM", Map: "/map/name", Code: "sg", Sell: "9.8987.34", Buy: "10.988.03", Mid: "55.45", Display: true
      }
    ];
  }

  private getDataColumnsForLiveRates(): Array<Column> {
    return [
      new Column('Name', 'Name'),
      new Column('Pid', 'Pid'),
      new Column('Ask', 'Ask'),
      new Column('Change', 'Change'),
      new Column('Update', 'Update')
    ];
  }

  private getDataRowForMyRate(): Array<LiveFxRate> {
    return [
      {
        Name: "SGDGHD", Pid: "9,088.56", Ask: "6,667.56", Change: "9,088.56", Update: "12:20:04 PM", Map: "/map/name", Code: "sg", Sell: "9.8098.09", Buy: "10.988.09", Mid: "87.98", Display: true
      }, {
        Name: "VNDABC", Pid: "9,566.56", Ask: "9,423.98", Change: "9,097.98", Update: "11:23:24 PM", Map: "/map/name", Code: "vn", Sell: "7.3425.19", Buy: "10.988.12", Mid: "87.36", Display: true
      }, {
        Name: "USDSGD", Pid: "9,766.76", Ask: "6,667.56", Change: "9,088.67", Update: "10:12:34 PM", Map: "/map/name", Code: "eu", Sell: "5.2347.59", Buy: "10.988.23", Mid: "44.14", Display: false
      }, {
        Name: "SGDVND", Pid: "9,455.56", Ask: "9,455.56", Change: "9,423.98", Update: "05:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.7653.12", Buy: "10.988.45", Mid: "11.33", Display: true
      }, {
        Name: "USDVND", Pid: "9,123.56", Ask: "9,213.56", Change: "9,423.98", Update: "12:20:32 PM", Map: "/map/name", Code: "ag", Sell: "3.1236.65", Buy: "10.988.67", Mid: "88.98", Display: false
      }, {
        Name: "VNDUSD", Pid: "9,433.34", Ask: "9,123.56", Change: "9,423.98", Update: "06:20:32 PM", Map: "/map/name", Code: "sg", Sell: "2.1231.89", Buy: "10.988.66", Mid: "77.63", Display: true
      }, {
        Name: "ABCVND", Pid: "9,765.76", Ask: "9,535.56", Change: "9,456.98", Update: "10:20:32 PM", Map: "/map/name", Code: "vn", Sell: "6.7544.45", Buy: "10.988.67", Mid: "68.44", Display: false
      }, {
        Name: "SNDVND", Pid: "9,233.23", Ask: "9,786.56", Change: "9,456.98", Update: "09:20:32 PM", Map: "/map/name", Code: "au", Sell: "2.8456.34", Buy: "10.988.45", Mid: "68.78", Display: true
      }, {
        Name: "YYYVND", Pid: "9,876.98", Ask: "9,452.56", Change: "9,786.98", Update: "08:20:32 PM", Map: "/map/name", Code: "us", Sell: "9.1234.23", Buy: "10.988.34", Mid: "67.45", Display: true
      }, {
        Name: "JVCVND", Pid: "9,786.67", Ask: "9,124.56", Change: "9,567.98", Update: "06:20:32 PM", Map: "/map/name", Code: "ag", Sell: "9.8956.46", Buy: "10.988.45", Mid: "78.54", Display: true
      }, {
        Name: "SGDGAH", Pid: "9,234.45", Ask: "9,786.56", Change: "9,967.98", Update: "12:20:32 PM", Map: "/map/name", Code: "sg", Sell: "9.8987.34", Buy: "10.988.03", Mid: "55.45", Display: true
      }
    ];
  }

  private getDataColumnsForMyRates(): Array<Column> {
    return [
      new Column('Code', 'No'),
      new Column('Name', 'CCY'),
      new Column('Buy', 'Buy'),
      new Column('Mid', 'Mid Market'),
      new Column('Sell', 'Sell'),
      new Column('Display', 'Display')
    ];
  }

}
