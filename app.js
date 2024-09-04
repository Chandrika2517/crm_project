const express = require('express');
const app = express();
const logger = require('./config/logger')
const path = require('path');
require('dotenv').config();
const userRoutes = require('./routes/routes.js');

app.use(express.json());
app.get('/', (req, res) => {
  app.use(express.static(path.resolve(__dirname, "roles", "build")));
  res.sendFile(path.resolve(__dirname, "roles", "build", "index.html"));
})

app.use('/roles', userRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});