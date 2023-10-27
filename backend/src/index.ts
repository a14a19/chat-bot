import app from './app.js';
import { connectToDatabase } from './db/connection.js';

// connection and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => { console.log("Server is open & connected to db. ") })
  })
  .catch((err) => {
    console.warn("connection:", err);
  })
