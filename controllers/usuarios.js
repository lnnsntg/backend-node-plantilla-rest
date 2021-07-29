const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "no name", apikey, page = "1", limit } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API -controler",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API -controler",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API - controler",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};
