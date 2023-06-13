  // main error function at the application
  const errorFunction = (err, req, res, next) => {
    if (err.message.substring(0, 6) === 'E11000') {
      // error from mongo (duplicated email)
      res.status(400).json({ 'Error Massage': 'Duplicated data!' });
    }
  
    console.log(err);
  
    next();
  };
  
  // high level Error wrapper function
  const errorHandling = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
  export { errorFunction, errorHandling };