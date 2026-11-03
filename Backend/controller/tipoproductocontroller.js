const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from tipoproducto', (err, tipoproducto) => {
            if (err) return res.json(err);
            res.json(tipoproducto);
        });
    });
};

controller.edit = (req, res) => {
    const { idtpprod } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from tipoproducto where idtpprod = ?', [idtpprod], (err, tipoproducto) => {
            if (err) return res.json(err);
            res.json(tipoproducto[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into tipoproducto set ?', [data], (err, tipoproducto) => {
            if (err) return res.json(err);
            res.json(tipoproducto);
        });
    });
};

controller.update = (req, res) => {
    const { idtpprod } = req.params;
    const nuevo_tipoproducto = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update tipoproducto set ? where idtpprod = ?', [nuevo_tipoproducto, idtpprod], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idtpprod } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update tipoproducto set estado = "inactivo" where idtpprod = ?', [idtpprod], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
