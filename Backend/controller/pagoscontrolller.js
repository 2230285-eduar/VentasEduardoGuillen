const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from pagos', (err, pagos) => {
            if (err) return res.json(err);
            res.json(pagos);
        });
    });
};

controller.edit = (req, res) => {
    const { idpago } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from pagos where idpago = ?', [idpago], (err, pagos) => {
            if (err) return res.json(err);
            res.json(pagos[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into pagos set ?', [data], (err, pagos) => {
            if (err) return res.json(err);
            res.json(pagos);
        });
    });
};

controller.update = (req, res) => {
    const { idpago } = req.params;
    const nuevo_pagos = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update pagos set ? where idpago = ?', [nuevo_pagos, idpago], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idpago } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update pagos set estado = "inactivo" where idpago = ?', [idpago], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
