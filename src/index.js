const express = require('express');
const app = express();
const morgan = require('morgan');
// settings
app.set('port', process.env.PORT || 3000); //si hay un puerto definido por la nube utilizsrlo, en caso contrario el puerto 3000, validamos el puerto
app.set('json spaces', 2);

// middlewares
// intalar nodemon para que cada que se generen canbios se reflejen en el sevidor
app.use(morgan('dev')); //me permite ver por consola lo que va llegando elservidor 
app.use(express.urlencoded({ extended: false }));//entender los datos del formulario, extended false es para entender datps sensillos, como inputs, no imagenes 
app.use(express.json());//para soportar los formatos json, le permite a mi servidor recivir formatos json

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// starting the server 
app.listen(app.get('port'), () => console.log(`Server on Port: ${app.get('port')}`))