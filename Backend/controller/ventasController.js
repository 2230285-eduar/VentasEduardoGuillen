const controller = {};

controller.listar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM encabezado_venta', (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    });
  });
};

controller.buscar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM encabezado_venta WHERE num_venta = ?', [req.params.id], (err, rows) => {
      if (err) return res.status(500).json(err);
      if (rows.length === 0) return res.status(404).json({ mensaje: 'Venta no encontrada' });
      res.json(rows[0]);
    });
  });
};

controller.crear = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('INSERT INTO encabezado_venta SET ?', [req.body], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ mensaje: 'Venta creada', id: result.insertId });
    });
  });
};

controller.actualizar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('UPDATE encabezado_venta SET ? WHERE num_venta = ?', [req.body, req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Venta actualizada' });
    });
  });
};

controller.eliminar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('DELETE FROM encabezado_venta WHERE num_venta = ?', [req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Venta eliminada' });
    });
  });
};

module.exports = controller;