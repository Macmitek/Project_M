const express = require('express');
const paymentRoutes = require('./routes/paymentRouter.js');
const app = express();

app.use(express.json());
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const connectDb = require('./db');
connectDb();
