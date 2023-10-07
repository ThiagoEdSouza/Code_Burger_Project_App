'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn( 'categories', 'path', { 
        type: Sequelize.STRING, //Tipo string
     });
    },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('categories', 'path');
  },
}
