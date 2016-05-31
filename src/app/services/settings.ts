import {Injectable} from '@angular/core';
import { Headers } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

/* Set the Content-Type header of an HttpClient object as required by an API when calling.*/
export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class SettingControl {
    static View = class {
        static CookieBNMenu: string = 'BNMenu';
		static CookieBNFont: string = 'BNFont';
		static CookieBNFontSize: string = 'BNFontSize';
		static MaxFontSize: number = 1.3;
		static MinFontSize: number = 0.8;
    };
	private MENU_CLASS_DEFAULT: string = 'menu-bn-default';
	private FONT_CLASS_DEFAULT: string = 'font-bn-default';
	private BN_ICON: any = '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Bao Nguyen  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="520px" height="520px" viewBox="0 0 520 520" enable-background="new 0 0 520 520" xml:space="preserve"><path id="XMLID_1_" fill="#00568E" d="M459.6,520H60.4C27.1,520,0,492.9,0,459.6V60.4C0,27.1,27.1,0,60.4,0h399.1C492.9,0,520,27.1,520,60.4v399.1C520,492.9,492.9,520,459.6,520z"/><path id="XMLID_13_" fill="none" d="M381.2,262.5L463.8,371h-61.9l-51.7-67.9L298.6,371h-61.9l82.6-108.6L232.4,148h61.9l56,73.8L504.1,19.5C493,7.5,477.2,0,459.6,0H60.4C27.1,0,0,27.1,0,60.4v399.1C0,492.9,27.1,520,60.4,520h399.1c33.4,0,60.4-27.1,60.4-60.4V80.1L381.2,262.5z M220,332h-30v40h-49v-40H52.7L33,278.8L140.8,149H190v134h30V332z"/><path id="XMLID_14_" fill="#FFFFFF" d="M294.3,148h-61.9l86.9,114.4L236.7,371h61.9l51.7-67.9l51.7,67.9h61.9l-82.6-108.5L520,80.1V60.4c0-15.8-6-30.1-15.9-40.9L350.3,221.8L294.3,148z"/><path id="XMLID_17_" fill="#FFFFFF" d="M190,148.9h-49.2L33,278.8l19.7,53.4h88.2v39.6H190v-39.6h29.6v-49.2H190V148.9z M140.9,282.9H88.4l52.5-62.6V282.9z"/></svg>';

	// Get cookies on site support for render layout choisen
    public getAppCookies($this) {
		if (!Cookie.get(SettingControl.View.CookieBNMenu)) {
			Cookie.set(SettingControl.View.CookieBNMenu, this.MENU_CLASS_DEFAULT);
			$this.setClasses = this.MENU_CLASS_DEFAULT;
		} else {
			$this.setClasses = Cookie.get(SettingControl.View.CookieBNMenu);
		}
		if (!Cookie.get(SettingControl.View.CookieBNFont)) {
			Cookie.set(SettingControl.View.CookieBNFont, this.FONT_CLASS_DEFAULT);
			$this.setFonts = this.FONT_CLASS_DEFAULT;
		} else {
			$this.setFonts = Cookie.get(SettingControl.View.CookieBNFont);
		}
	}

	public getLogo($this) {
		$this.BN_ICON = this.BN_ICON;
	}

	// Get data json - binding to front
	public getConfigLayoutFonts($this, apiService) {
		$this.apiService.getData().subscribe(
			// the first argument is a function which runs on success
			data => {
				$this.layout = data[0];
				$this.font = data[1];
			},
			// the second argument is a function which runs on error
			err => console.error(err),
			// the third argument is a function which runs on completion
			() => console.log()
			
		);
	}

	public setBreadcrumb($this, annotations) {
		for (let i = 0; i < annotations.length; i += 1) {
			if (annotations[i].constructor.name === 'RouteConfig') {
				$this.routeConfig = annotations[i].configs;
			}
		}
	}

	public setBodyClass($this, router) {
		$this.router.subscribe((val) => {
			if(val === '' || val === null) {
				$this.setBodyClass = 'BN-home';
			} else {
				$this.setBodyClass = 'BN-' + val.toString().toLowerCase().replace("/", "-").replace("./", "");
			}
		});
	}

	public setFontSize($this) {
		if (!Cookie.get(SettingControl.View.CookieBNFontSize)) {
			$this.size = 1;
		} else {
			$this.size = parseFloat(Cookie.get(SettingControl.View.CookieBNFontSize));
		}
	}
}
