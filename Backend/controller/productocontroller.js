const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from producto', (err, producto) => {
            if (err) return res.json(err);
            res.json(producto);
        });
    });
};

controller.edit = (req, res) => {
    const { num_prod } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from producto where num_prod = ?', [num_prod], (err, producto) => {
            if (err) return res.json(err);
            res.json(producto[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into producto set ?', [data], (err, producto) => {
            if (err) return res.json(err);
            res.json(producto);
        });
    });
};

controller.update = (req, res) => {
    const { num_prod } = req.params;
    const nuevo_producto = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update producto set ? where num_prod = ?', [nuevo_producto, num_prod], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { num_prod } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update producto set estado = "inactivo" where num_prod = ?', [num_prod], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
