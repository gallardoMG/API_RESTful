const { Router } = require('express'); //me permite definir nuevas rutas para mi servidor;
const router = Router();

router.get('/', (req, res) => res.json({ "Title": "hello word" })) //con send podemos enviar html, css, js, etc..

module.exports = router;