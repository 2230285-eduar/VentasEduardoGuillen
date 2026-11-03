const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from area_trabajo',(err,area_trabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(area_trabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idarea}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from area_trabajo where idarea=?', [idarea], (err,area_trabajo) => {
            res.json(area_trabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into area_trabajo set?', [data], (err,area_trabajo) => {
        res.json(area_trabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idarea}= req.params;
    const nuevo_area_trabajo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update area_trabajo set ? where idarea =?', [nuevo_area_trabajo, idarea], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idarea}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update area_trabajo set estado = "inactivo" where idarea =?', [idarea], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
