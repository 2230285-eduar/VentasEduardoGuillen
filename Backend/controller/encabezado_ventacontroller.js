const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from encabezado_venta', (err, encabezado_venta) => {
            if (err) return res.json(err);
            res.json(encabezado_venta);
        });
    });
};

controller.edit = (req, res) => {
    const { num_venta } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from encabezado_venta where num_venta = ?', [num_venta], (err, encabezado_venta) => {
            if (err) return res.json(err);
            res.json(encabezado_venta[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into encabezado_venta set ?', [data], (err, encabezado_venta) => {
            if (err) return res.json(err);
            res.json(encabezado_venta);
        });
    });
};

controller.update = (req, res) => {
    const { num_venta } = req.params;
    const nuevo_encabezado_venta = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update encabezado_venta set ? where num_venta = ?', [nuevo_encabezado_venta, num_venta], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { num_venta } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update encabezado_venta set estado = "inactivo" where num_venta = ?', [num_venta], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
