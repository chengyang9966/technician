const express = require('express');

const Logs = require('../controller/log-controller');

const router = express.Router();

router.get('/logs', Logs.getLogs);
router.put('/logs/:id', Logs.updateLogs);
router.post('/logs', Logs.addLogs);
router.delete('/logs/:id', Logs.deleteLogs);
router.get('/logs?q=:text', Logs.searchLogs);

module.exports = router;
