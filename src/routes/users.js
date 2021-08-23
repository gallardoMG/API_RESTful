const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => res.json(users))
})

module.exports = router;