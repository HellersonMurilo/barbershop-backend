const User = require("../models/userModel");

const userController = {
  signUp: async (req, res) => {
    try {
      const { nome, sobrenome, email, senha } = req.body;

      const newUser = await User.create({ nome, sobrenome, email, senha });

      return res.status(201).json({
        msg: "Usuario criado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro ao criar o Usuario!",
      });
    }
  },
};

module.exports = userController;
