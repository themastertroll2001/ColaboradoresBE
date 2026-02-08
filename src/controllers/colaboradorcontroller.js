const colaboradorService = require('../services/colaboradorservice');

// GET
exports.getColaboradores = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const result = await colaboradorService.getAllPaginated(page, limit);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener colaboradores' });
  }
};


// POST
exports.createColaborador = async (req, res) => {
  try {
    await colaboradorService.create(req.body);
    res.json({ message: 'Colaborador creado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT
exports.updateColaborador = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await colaboradorService.update(id, req.body);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Colaborador no encontrado' });
    }

    res.json({ message: 'Colaborador actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteColaborador = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await colaboradorService.remove(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Colaborador no encontrado' });
    }

    res.json({ message: 'Colaborador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar colaborador' });
  }
};
