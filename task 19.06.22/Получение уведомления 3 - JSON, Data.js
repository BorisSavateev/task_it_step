  const checkForNewNotifications = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
        .then(response => response.json())
        .then(data => console.log(data));
}


// Sample usage - do not modify
checkForNewNotifications();