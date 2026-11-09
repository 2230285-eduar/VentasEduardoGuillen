const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};


app.use(cors(
    config.application.cors.server
  ));



const empresaRoutes = require('./rutas/empresa');
const clientesRoutes = require('./rutas/clientes');
const proveedorRoutes = require('./rutas/proveedor');
const areaTrabajoRoutes = require('./rutas/area_trabajo');
const cxcobrarRoutes = require('./rutas/cxcobrar');
const cxpagarRoutes = require('./rutas/cxpagar');
const detalleCompraRoutes = require('./rutas/detalle_compra');
const detalleVentaRoutes = require('./rutas/detalle_venta');
const empleadosRoutes = require('./rutas/empleados');
const encabezadoCompraRoutes = require('./rutas/encabezado_compra');
const encabezadoVentaRoutes = require('./rutas/encabezado_venta');
const formapagoRoutes = require('./rutas/formapago');
const pagosRoutes = require('./rutas/pagos');
const productoRoutes = require('./rutas/producto');
const sucursalesRoutes = require('./rutas/sucursales');
const tipoproductoRoutes = require('./rutas/tipoproducto');
const tipousuarioRoutes = require('./rutas/tipousuario');
const usuarioRoutes = require('./rutas/usuario');


app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'NuevaClave123',
    port:3306,
    database:'ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));



app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});	


var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/empresa', empresaRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/area_trabajo', areaTrabajoRoutes);
app.use('/api/cxcobrar', cxcobrarRoutes);
app.use('/api/cxpagar', cxpagarRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/tipoproducto', tipoproductoRoutes);
app.use('/api/tipousuario', tipousuarioRoutes);
app.use('/api/usuario', usuarioRoutes);


app.use(express.static(path.join(__dirname,'public')));



app.use(express.static(path.join(__dirname,'public')));
