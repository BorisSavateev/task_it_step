/**
 * @param {string} status
 * @param {string} location
 */
 const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
      userId,
      status,
      location
    };
   return JSON.stringify(data);
  }
  
  // Sample usage - do not modify
  console.log(prepareStatus("My first post!", "Amsterdam")); // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
  console.log(prepareStatus("Hello World!", "Berlin")); // '{"userId":42,"status":"Hello World!","location":"Berlin"}'