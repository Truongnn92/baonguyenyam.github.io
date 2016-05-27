import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {

  	value = 'Calling API';

	constructor(public http: Http) {}

	getDataJson() {
		return this.http.get('/assets/data.json').map(res => res.json());
	}

	getData() {
		return Observable.forkJoin(
			this.http.get('/assets/data/layout.json').map((res: Response) => res.json()),
			this.http.get('/assets/data/fonts.json').map((res: Response) => res.json()),
			this.http.get('/assets/data/table.json').map((res: Response) => res.json()),
			this.http.get('/assets/data/booking.json').map((res: Response) => res.json())
		);
	}
}
