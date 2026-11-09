const controller = {};

controller.listar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM producto', (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    });
  });
};

controller.buscar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM producto WHERE num_prod = ?', [req.params.id], (err, rows) => {
      if (err) return res.status(500).json(err);
      if (rows.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
      res.json(rows[0]);
    });
  });
};

controller.crear = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('INSERT INTO producto SET ?', [req.body], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ mensaje: 'Producto creado', id: result.insertId });
    });
  });
};

controller.actualizar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('UPDATE producto SET ? WHERE num_prod = ?', [req.body, req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Producto actualizado' });
    });
  });
};

controller.eliminar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('DELETE FROM producto WHERE num_prod = ?', [req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Producto eliminado' });
    });
  });
};

module.exports = controller;