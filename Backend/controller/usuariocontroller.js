const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from usuario', (err, usuario) => {
            if (err) return res.json(err);
            res.json(usuario);
        });
    });
};

controller.edit = (req, res) => {
    const { userid } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from usuario where userid = ?', [userid], (err, usuario) => {
            if (err) return res.json(err);
            res.json(usuario[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into usuario set ?', [data], (err, usuario) => {
            if (err) return res.json(err);
            res.json(usuario);
        });
    });
};

controller.update = (req, res) => {
    const { userid } = req.params;
    const nuevo_usuario = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update usuario set ? where userid = ?', [nuevo_usuario, userid], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { userid } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update usuario set estado = "inactivo" where userid = ?', [userid], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
