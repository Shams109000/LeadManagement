const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  createLead,
  getLeads,
  updateLeadStatus,
} = require("../controllers/temp");

const protect = require("../middleware/authMiddleware");

// Public Route
router.post(
  "/",
  [
    body("name")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters"),

    body("email")
      .isEmail()
      .withMessage("Please enter a valid email"),

    body("budget")
      .notEmpty()
      .withMessage("Budget is required"),

    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters"),
  ],
  createLead
);

// Protected Routes
router.get("/", protect, getLeads);

router.patch("/:id", protect, updateLeadStatus);

module.exports = router;