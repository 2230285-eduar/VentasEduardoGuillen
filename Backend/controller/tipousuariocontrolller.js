const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from tipousuario', (err, tipousuario) => {
            if (err) return res.json(err);
            res.json(tipousuario);
        });
    });
};

controller.edit = (req, res) => {
    const { idtpusuario } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('select * from tipousuario where idtpusuario = ?', [idtpusuario], (err, tipousuario) => {
            if (err) return res.json(err);
            res.json(tipousuario[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('insert into tipousuario set ?', [data], (err, tipousuario) => {
            if (err) return res.json(err);
            res.json(tipousuario);
        });
    });
};

controller.update = (req, res) => {
    const { idtpusuario } = req.params;
    const nuevo_tipousuario = req.body;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update tipousuario set ? where idtpusuario = ?', [nuevo_tipousuario, idtpusuario], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { idtpusuario } = req.params;

    req.getConnection((error, conn) => {
        if (error) return res.json(error);
        conn.query('update tipousuario set estado = "inactivo" where idtpusuario = ?', [idtpusuario], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
