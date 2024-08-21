const userController = {
  createUser: async (req, res) => {
    try {
      const { nome, sobrenome, email, senha } = req.body;

      return res.status(200).json({
        msg: "Usuario criado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro ao criar o Usuario!",
      });
    }
  },
};

module.exports = userController