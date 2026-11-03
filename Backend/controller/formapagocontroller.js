const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from formapago', (err, formapago) => {
            if (err) return res.json(err);
            res.json(formapago);
        });
    });
};

controller.edit = (req, res) => {
    const { idfpago } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from formapago where idfpago = ?', [idfpago], (err, formapago) => {
            if (err) return res.json(err);
            res.json(formapago[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into formapago set ?', [data], (err, formapago) => {
            if (err) return res.json(err);
            res.json(formapago);
        });
    });
};

controller.update = (req, res) => {
    const { idfpago } = req.params;
    const nuevo_formapago = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update formapago set ? where idfpago = ?', [nuevo_formapago, idfpago], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idfpago } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update formapago set estado = "inactivo" where idfpago = ?', [idfpago], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
