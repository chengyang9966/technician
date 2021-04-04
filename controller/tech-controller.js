const techs = require('../models/techs_model');

const GetTechs = async (req, res) => {
  try {
    const Techs = await techs.find();
    return res.status(201).json({
      success: true,
      data: Techs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

const addTechs = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a Technician ',
    });
  }
  const tech = new techs(body);

  try {
    const Tech = await tech.save();
    return res.status(201).json({
      success: true,
      data: Tech,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const deleteTechs = async (req, res) => {
  try {
    let SelectedLog = await techs.findById(req.params.id);
    if (!SelectedLog)
      return res.status(400).json({ success: false, error: 'Log Not Found' });
    // Find the right one and update logs

    await techs.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: true, msg: 'Log Removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
module.exports = {
  GetTechs,
  addTechs,
  deleteTechs,
};
