const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes')
const errorRouter = require('./routes/errorRoutes');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


apiRouter(app);
errorRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor en linea y escuchando en el puerto  ${PORT}`)
});
