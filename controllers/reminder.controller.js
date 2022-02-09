const db = require("../models");
const Reminder = db.reminders;
const Op = db.Sequelize.Op;

// Create and Save a new Reminder
exports.createReminder = (req, res) => {
  const { user, description } = req.body;

  // Validate request
  if (!user) {
    return res.status(400).send({
      message: "User ID required"
    });
  }

  if (!description) {
    return res.status(400).send({
      message: "description required"
    });
  }

  // Create a Reminder
  const reminderObject = {
    user,
    description
  };

  // Save Reminder in the database
  Reminder.create(reminderObject)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reminder."
      });
    });
};

// Retrieve all Reminders from the database.
exports.getAllReminders = (req, res) => {
  const { user, after } = req.query;

  let condition = {};

  // Check for query params
  if(user) {
    condition.user = user;
  }

  if(after) {
    condition.date = { [Op.gte] : new Date(after * 1000) };
  }

  Reminder.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reminders."
      });
    });
};

// Find a single Reminder with an id
exports.getReminder = (req, res) => {
  const id = req.params.id;

  Reminder.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send('ID not found');
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Reminder with id=" + id
      });
    });
};

// Returns 405 for  DELETE,PUT, PATCH request for /reminders/<id>/reminders/<id>
exports.error = (req, res) => {
  return res.sendStatus(405);
};
