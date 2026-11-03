const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from encabezado_compra', (err, encabezado_compra) => {
            if (err) return res.json(err);
            res.json(encabezado_compra);
        });
    });
};

controller.edit = (req, res) => {
    const { num_compra } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from encabezado_compra where num_compra = ?', [num_compra], (err, encabezado_compra) => {
            if (err) return res.json(err);
            res.json(encabezado_compra[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into encabezado_compra set ?', [data], (err, encabezado_compra) => {
            if (err) return res.json(err);
            res.json(encabezado_compra);
        });
    });
};

controller.update = (req, res) => {
    const { num_compra } = req.params;
    const nuevo_encabezado_compra = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update encabezado_compra set ? where num_compra = ?', [nuevo_encabezado_compra, num_compra], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { num_compra } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update encabezado_compra set estado = "inactivo" where num_compra = ?', [num_compra], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
