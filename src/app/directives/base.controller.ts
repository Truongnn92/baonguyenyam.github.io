import {Injectable} from '@angular/core';
@Injectable()
export abstract class BaseController {
	constructor() {
		console.log('Base controller is abstract controller support for handle basic for all page');
	}
}
