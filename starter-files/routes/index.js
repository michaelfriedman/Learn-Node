const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const mike = { name: 'Mike', age: 31 };
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  res.send('it works!');
});

module.exports = router;
