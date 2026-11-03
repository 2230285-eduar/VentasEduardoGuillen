const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from sucursales', (err, sucursales) => {
            if (err) return res.json(err);
            res.json(sucursales);
        });
    });
};

controller.edit = (req, res) => {
    const { idsuc } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from sucursales where idsuc = ?', [idsuc], (err, sucursales) => {
            if (err) return res.json(err);
            res.json(sucursales[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into sucursales set ?', [data], (err, sucursales) => {
            if (err) return res.json(err);
            res.json(sucursales);
        });
    });
};

controller.update = (req, res) => {
    const { idsuc } = req.params;
    const nuevo_sucursales = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update sucursales set ? where idsuc = ?', [nuevo_sucursales, idsuc], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idsuc } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update sucursales set estado = "inactivo" where idsuc = ?', [idsuc], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
