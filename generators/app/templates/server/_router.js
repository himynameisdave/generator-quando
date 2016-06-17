const router = require('express').Router();


//  All routes are based at /api/
router.get('/', (req, res) => {
  res.json({
    message: 'To see the data for this app, visit one of the following endpoints:',
    endpoints: {
      test: '/api/test'
    }
  });
});

router.get('/test', (req, res) => {
  res.json({
    message: 'Testing, Testing, 4-5-6!!!'
  });
});

module.exports = router;
