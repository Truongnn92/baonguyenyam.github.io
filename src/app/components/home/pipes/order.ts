import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'orderBy'
})
export class OrderBy implements PipeTransform {
	transform(input : any, [args]) : any {
		if (!Array.isArray(input) || args == null) {
			return input;
		}
		var orderData = input.slice();
		for (var i: number = 0; i < args.length; i++) {
			orderData.sort(function(a, b) {
				var key = args[i];
				if (a[key] == null) {
					return;
				}
				var x = a[key].toLowerCase();
				var y = b[key].toLowerCase();
				return x < y ? -1 : x > y ? 1 : 0;
			});
		}
		return orderData;
	}
}
