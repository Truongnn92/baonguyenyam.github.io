import {Injectable} from '@angular/core';
declare let Notification: any;

@Injectable()
export class NotificationControl {
	showNotification(title?: any, body?: any, icon?: any, link?: any) {
		let options = {
			body: body,
			icon: icon
		};

		if (!("Notification" in window)) {
			console.log("This browser does not support desktop notification");
		}

		// Let's check whether notification permissions have already been granted
		else if (Notification.permission === "granted") {
			// If it's okay let's create a notification
			let notification = new Notification(title, options);
			notification.onclick = (() => {
				window.open(link);
				notification.close();
			});
		}

		// Otherwise, we need to ask the user for permission
		else if (Notification.permission !== 'denied') {
			Notification.requestPermission(function (permission) {
				// If the user accepts, let's create a notification
				if (permission === "granted") {
					let notification = new Notification(title, options);
					notification.onclick = (() => {
						window.open(link);
						notification.close();
					});
				}
			});
		}
	}
}