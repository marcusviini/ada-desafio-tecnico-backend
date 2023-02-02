module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cards', {
      id: {
        type: Sequelize.INTEGER,

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,
      },

      titulo: {
        type: Sequelize.STRING,

        allowNull: false,
      },

      conteudo: {
        type: Sequelize.STRING(50000),

        allowNull: false,
      },

      lista: {
        type: Sequelize.STRING,

        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,

        allowNull: false,
      },

      updatedat: {
        type: Sequelize.DATE,

        allowNull: false,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('cards')
  },
}
