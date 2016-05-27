import {Injectable} from '@angular/core';
import {AppState} from '../../directives/app.state';
import {ApiService} from '../../services/api/api.service';
@Injectable()
export abstract class CoreComponent {
	public liverate;
	public booking;
	constructor(public appState: AppState, public apiService: ApiService) {
		this.appState.set('isLogin', true);
		this.getDataForBinding();
        this.customDataForPage();
	}

	getDataForBinding() {
		this.apiService.getData().subscribe(
			// the first argument is a function which runs on success
			data => {
				this.liverate = data[2];
				this.booking = data[3];
			},
			// the second argument is a function which runs on error
			err => console.error(err),
			// the third argument is a function which runs on completion
			() => console.log()
		);
	}

	public customDataForPage() {
		// Do nothing
		// We can overwrite it on each page
	};
}
