const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from empleados', (err, empleados) => {
            if (err) return res.json(err);
            res.json(empleados);
        });
    });
};

controller.edit = (req, res) => {
    const { idemp } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from empleados where idemp = ?', [idemp], (err, empleados) => {
            if (err) return res.json(err);
            res.json(empleados[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into empleados set ?', [data], (err, empleados) => {
            if (err) return res.json(err);
            res.json(empleados);
        });
    });
};

controller.update = (req, res) => {
    const { idemp } = req.params;
    const nuevo_empleados = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update empleados set ? where idemp = ?', [nuevo_empleados, idemp], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idemp } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update empleados set estado = "inactivo" where idemp = ?', [idemp], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;