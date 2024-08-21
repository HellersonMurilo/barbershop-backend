const validateUser = (req, res, next) => {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || typeof nome !== "string") {
    return res.status(400).json({
      msg: "Tipo de dado inválido ou vazio!",
      campo: "nome",
    });
  }

  if (!sobrenome || typeof sobrenome !== "string") {
    return res.status(400).json({
      msg: "Tipo de dado inválido ou vazio!",
      campo: "sobrenome",
    });
  }

  if (!email || typeof email !== "string") {
    return res.status(400).json({
      msg: "Tipo de dado inválido ou vazio!",
      campo: "email",
    });
  }

  if (!senha || typeof senha !== "string") {
    return res.status(400).json({
      msg: "Tipo de dado inválido ou vazio!",
      campo: "senha",
    });
  }
};

module.exports = {
  validateUser,
};
