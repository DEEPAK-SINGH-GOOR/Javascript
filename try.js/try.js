const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
  
  promise.then((message) => {
    console.log(message); // Output after 1 second: Data loaded
  });
  