import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        // id: Sequelize.INTEGER,
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        points: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Task;
