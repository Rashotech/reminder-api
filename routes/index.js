// Required files
const express = require("express");

// Required Controller
const reminderController = require("../controllers/reminder.controller");

const router = express.Router();

// Create a new Reminder
router.post("/", reminderController.createReminder);

// Retrieve all Reminders
router.get("/", reminderController.getAllReminders);

// Retrieve a single Reminder with id
router.get("/:id", reminderController.getReminder);

router
  .put("/:id", reminderController.error)
  .patch("/:id", reminderController.error)
  .delete("/:id", reminderController.error);

module.exports = router;
