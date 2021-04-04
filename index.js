const express = require('express');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 7328;
const connectDB = require('./config/db');
const LogsRouter = require('./routes/logs_routers');
const TechsRouter = require('./routes/tech_routes');
//Connect DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api', LogsRouter);
app.use('/api', TechsRouter);

app.listen(apiPort, () => console.log(`Server is Running on ${apiPort}`));
