const app = require('./config/app');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running ${PORT}`));
}).catch(err => {
  console.error('DB connect error', err);
  process.exit(1);
});