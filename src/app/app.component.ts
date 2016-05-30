/*
 * Angular 2 decorators and services
 */
import {provide, Component, ViewEncapsulation, Input} from '@angular/core';
import {
  FORM_PROVIDERS,
  FORM_DIRECTIVES,
  CORE_DIRECTIVES
} from '@angular/common';
import {
  ROUTER_DIRECTIVES
} from '@angular/router';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {CollapseDirective, ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Modal} from "ng2-modal";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Home} from './components/home';
import {AppState} from './directives/app.state';
import {NotificationControl} from './directives/notification';
import {RouterActive} from './router-active';
import {SettingControl} from './services/settings';
import {ApiService} from './services/api/api.service';
import routes from './routes';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'body',
  pipes: [TranslatePipe],
  providers: [
    provide(TranslateLoader, {
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/i18n', '.json'),
      deps: [Http]
    }),
    TranslateService,
    Cookie,
    ApiService,
    SettingControl,
    NotificationControl
  ],
  directives: [
    RouterActive,
    ACCORDION_DIRECTIVES,
    CollapseDirective,
    Modal
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../styles/main.sass'),
    require('../../bower_components/animate.css/animate.min.css'),
    require('../../bower_components/flag-icon-css/css/flag-icon.css')
  ],
  template: require('./app.jade')()
})

@RouteConfig(routes)
export class App {  
  public NAV_oneAtATime: boolean = true;
  public NAV_isCollapsed: boolean = false;
  public NAV_isGlobalCollapsed: boolean = false;
  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  public fontSize = 1;
  public setToggleBody: string = '';

  constructor(
    public apiService: ApiService, public appState: AppState, public translate: TranslateService, public router: Router, public setting: SettingControl, public notificationControl : NotificationControl) {
    // Get Logo
    setting.getLogo(this);
    // Get cookies on site support for render layout
    setting.getAppCookies(this);
    // Call the config layout/fonts from config/global/.json
    setting.getConfigLayoutFonts(this, apiService);
    // Get Body Class
    setting.setBodyClass(this, router);
    // Control font-size for App. When we click on increase/descrease icon
    // it'll save to cookies and this value will apply to the font-size of content body.
    setting.setFontSize(this);
    // Load lang
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.getTranslation(userLang);
    // custom notification
    notificationControl.showNotification('Notification Title', 'BODY HERE', null, null);
  }

  ngOnInit() {
    // Welcome title App 
    console.log('%cBIZ4X', 'font-size:100px;color:#2196f3;text-shadow:0 1px 0 #1472BD,0 2px 0 #1472BD ,0 3px 0 #1472BD ,0 4px 0 #1472BD ,0 5px 0 #1472BD ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c BIZ4X APP ' + '%c - Load Done ', 'border-radius: 2px; padding: 3px; background: #2196f3; color: #FFF', 'color: #2196f3');
    console.log('Initial App State', this.appState.state);
  }

  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }

  // Change Menu Layout
  onChangeLayout(value) {
    Cookie.set(SettingControl.View.CookieBIZ4XMenu, value);
    window.location.reload(false);
  };
  // Change Font
  onChangeFont(value) {
    Cookie.set(SettingControl.View.CookieBIZ4XFont, value);
    window.location.reload(false);
  };
  // Change font-size
  onChangeFontSize(value) {
    var currentValue = this.fontSize + value;
    Cookie.set(SettingControl.View.CookieBIZ4XFontSize, currentValue);
    if (value === 0) {
      this.fontSize = 1;
    } else if (currentValue > SettingControl.View.MinFontSize && currentValue < SettingControl.View.MaxFontSize) {
      this.fontSize = this.fontSize + value;
    }
  }

  ngDoCheck() {
    if (this.NAV_isGlobalCollapsed) {
      this.setToggleBody = 'active ';
    } else {
      this.setToggleBody = '';
    }
  }

}
