const checkForNewNotifications = () => {
    return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`);
}


// Sample usage - do not modify
const result = checkForNewNotifications();

console.log(result); // Promise{<pending>}