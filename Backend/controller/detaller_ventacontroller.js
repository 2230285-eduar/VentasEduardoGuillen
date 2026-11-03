const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from detalleventa', (err, detalleventa) => {
            if (err) return res.json(err);
            res.json(detalleventa);
        });
    });
};

controller.edit = (req, res) => {
    const { iddetventa } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from detalleventa where iddetventa = ?', [iddetventa], (err, detalleventa) => {
            if (err) return res.json(err);
            res.json(detalleventa[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into detalleventa set ?', [data], (err, detalleventa) => {
            if (err) return res.json(err);
            res.json(detalleventa);
        });
    });
};

controller.update = (req, res) => {
    const { iddetventa } = req.params;
    const nuevo_detalleventa = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update detalleventa set ? where iddetventa = ?', [nuevo_detalleventa, iddetventa], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { iddetventa } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update detalleventa set estado = "inactivo" where iddetventa = ?', [iddetventa], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
