const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from clientes',(err,clientes) =>{
            if(err){
                res.json(err);
            }
            res.json(clientes);
        });

    });

};

controller.edit = (req, res) => {

    const {num_clien}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from clientes where num_clien=?', [num_clien], (err,clientes) => {
            res.json(clientes[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into clientes set?', [data], (err,clientes) => {
        res.json(clientes);
       });
   })
};

controller.update = (req,res) =>{

    const {num_cliente}= req.params;
    const nuevo_clientes = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update clientes set ? where num_clien =?', [nuevo_clientes, num_cliente], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {num_clien}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update clientes set estado = "inactivo" where num_clien =?', [num_clien], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
