function errorHandler(err, req, res, next) {

    console.error('ERROR', req.method, req.path, err)
  
    if (!res.headersSent) {
      res.status(500).json({message: 'Server error', error: err})
    }
  }
  
  function notFoundHandler(req, res, next) {
    res.status(404).json({ message: 'This route does not exist' })
  }
  
  module.exports = {
    errorHandler,
    notFoundHandler
  }
  