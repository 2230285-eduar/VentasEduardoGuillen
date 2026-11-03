const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from cxpagar', (err, cxpagar) => {
            if (err) return res.json(err);
            res.json(cxpagar);
        });
    });
};

controller.edit = (req, res) => {
    const { idcxp } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from cxpagar where idcxp = ?', [idcxp], (err, cxpagar) => {
            if (err) return res.json(err);
            res.json(cxpagar[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into cxpagar set ?', [data], (err, cxpagar) => {
            if (err) return res.json(err);
            res.json(cxpagar);
        });
    });
};

controller.update = (req, res) => {
    const { idcxp } = req.params;
    const nuevo_cxpagar = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update cxpagar set ? where idcxp = ?', [nuevo_cxpagar, idcxp], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idcxp } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update cxpagar set estado = "inactivo" where idcxp = ?', [idcxp], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;