import {Pipe} from '@angular/core';

@Pipe({
	name: 'search'
})
// Support for search multi condition
export class Search {
	transform(value, args: any[]) {
		var term = args[0];
		if (value == null) {
			return null;
		}
		if (term == null) {
			return value;
		}
		var searchRegx = new RegExp(term, "i");
		var result = [];
		for (var i = 0; i < value.length; i++) {
			var item = value[i];
			for (var j = 1; j < args.length; ++j) {
				if (searchRegx.test(item[args[j]])) {
					result.push(item);
				}
			}
		}
		return result;
	}
}
