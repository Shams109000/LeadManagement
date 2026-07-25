const { validationResult } = require("express-validator");
const Lead = require("../models/Lead");

// Create Lead
const createLead = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Leads
const getLeads = async (req, res) => {
  try {
    const search = req.query.search || "";

    const query = {
      $or: [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    };

    const leads = await Lead.find(query).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Status
const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["New", "Contacted", "Closed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
      }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.json({
      success: true,
      message: "Status updated",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};