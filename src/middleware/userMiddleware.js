const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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

  return next();
};

const hashPassword = async (req, res, next) => {
  try {
    const { senha } = req.body;

    if (!senha) {
      return res.status(400).json({
        msg: "Por favor, informe uma senha!",
      });
    }

    const saltRodad = 10;
    req.body.senha = await bcrypt.hash(senha, saltRodad);

    return next();
  } catch (error) {
    return res.status(500).json({
      msg: "Ocorreu um erro criptografar a senha",
    });
  }
};

const validatePassword = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        msg: "Informe o E-mail e Senha",
      });
    }

    //verificação do usuario
    const usuario = await User.findOne({ where: { email } });

    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario nao encontrado",
      });
    }

    const validarSenha = await bcrypt.compare(senha, usuario.senha);

    if (!validarSenha) {
      return res.status(400).json({
        msg: "Senha incorreta",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Ocorreu um erro ao validar o usuario",
    });
  }

  return next();
};

module.exports = {
  validateUser,
  hashPassword,
  validatePassword,
};
