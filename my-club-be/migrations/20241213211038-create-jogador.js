'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jogadors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posicao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nacionalidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jogadors');
  },
};
