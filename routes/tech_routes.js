const express = require('express');

const Techs = require('../controller/tech-controller');

const router = express.Router();

router.get('/techs', Techs.GetTechs);
router.post('/techs', Techs.addTechs);
router.delete('/techs/:id', Techs.deleteTechs);

module.exports = router;
