const controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM clientes', (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    });
  });
};

// Ver un cliente por su número
controller.edit = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('SELECT * FROM clientes WHERE num_clie = ?', [req.params.id], (err, rows) => {
      if (err) return res.status(500).json(err);
      if (rows.length === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
      res.json(rows[0]);
    });
  });
};

// Crear un cliente
controller.save = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('INSERT INTO clientes SET ?', [req.body], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ mensaje: 'Cliente creado', id: result.insertId });
    });
  });
};

// Editar un cliente
controller.update = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('UPDATE clientes SET ? WHERE num_clie = ?', [req.body, req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Cliente actualizado' });
    });
  });
};

// Borrar un cliente
controller.delete = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).json(err);
    conn.query('DELETE FROM clientes WHERE num_clie = ?', [req.params.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Cliente eliminado' });
    });
  });
};

module.exports = controller;