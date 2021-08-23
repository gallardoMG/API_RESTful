const { Router } = require('express');
const router = Router();
const movies = require('./sample.json');
router.get('/', (req, res) => res.json(movies))
router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {//para validadar más facil, instalamos express valiadator
    const newMovie = { ...req.body, id: title }
    movies.push(newMovie)
    res.json(movies)
  } else {
    res.status(400).json({ error: "There was an error" })
  }
})
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newList = movies.map(el => el.id === id ? { ...el, ...req.body } : el)
    res.send(newList);
  }
  else {
    res.status(400).json({ error: 'there was an error' })
  }
})
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newlist = movies.filter(el => el.id !== id);
    res.json(newlist)
  } else {
    res.status(400).json({ error: 'there was an error' })
  }
})

module.exports = router;