const Logs = require('../models/logs_model');

const getLogs = async (req, res) => {
  try {
    const logs = await Logs.find();
    return res.status(201).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const searchLogs = async (req, res) => {
  try {
    const logs = await Logs.find({ message: req.text, tech: req.text });
    return res.status(201).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const deleteLogs = async (req, res) => {
  try {
    let SelectedLog = await Logs.findById(req.params.id);
    if (!SelectedLog)
      return res.status(400).json({ success: false, error: 'Log Not Found' });
    // Find the right one and update logs

    await Logs.findByIdAndRemove(req.params.id);
    res.status(201).json({ success: true, msg: 'Log Removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const addLogs = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a Logs ',
    });
  }
  const log = new Logs(body);

  try {
    const logs = await log.save();
    return res.status(201).json({
      success: true,
      data: logs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const updateLogs = async (req, res) => {
  const body = req.body;
  const { message, tech, attention, date } = body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const LogFields = {};
  if (message) LogFields.message = message;
  if (tech) LogFields.tech = tech;
  if (attention) LogFields.attention = attention;
  if (date) LogFields.date = date;

  try {
    let SelectedLog = await Logs.findById(req.params.id);
    if (!SelectedLog)
      return res.status(400).json({ success: false, error: 'Log Not Found' });
    // Find the right one and update logs

    SelectedLog = await Logs.findByIdAndUpdate(
      req.params.id,
      { $set: LogFields },
      { new: true }
    );
    res.json({
      success: true,
      data: SelectedLog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports = {
  updateLogs,
  getLogs,
  searchLogs,
  addLogs,
  deleteLogs,
};
