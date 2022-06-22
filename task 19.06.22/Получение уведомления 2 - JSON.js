const checkForNewNotifications = () => {
	return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`).then(response => response.json());
}


// Sample usage - do not modify
console.log(checkForNewNotifications());
