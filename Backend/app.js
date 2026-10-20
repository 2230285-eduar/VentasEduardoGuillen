const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const cors = require('cors');

const app = express();
app.set('port', 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'NuevaClave123',
  port: 3306,
  database: 'ventas'
}, 'single'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const clientesRutas = require('./rutas/clientes');
app.use('/clientes', clientesRutas);

const productoRutas = require('./rutas/producto');
app.use('/producto', productoRutas);

const ventasRutas = require('./rutas/ventas');
app.use('/ventas', ventasRutas);

app.listen(app.get('port'), () => {
  console.log('Servidor en http://localhost:' + app.get('port'));
});