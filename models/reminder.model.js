module.exports = (sequelize, Sequelize) => {
  const Reminder = sequelize.define(
    "reminder",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    { timestamps: false }
  );

  return Reminder;
};
