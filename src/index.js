import { app } from "./app.js";
const PORT = process.env.PORTPC;
import 'dotenv/config';

const main = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();