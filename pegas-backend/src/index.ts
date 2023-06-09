import express from "express";
import cors from 'cors';
import router from "./routes";
import { connectMongo } from "./database.config";
const app = express();
connectMongo();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen( port, () => console.log(`server on in PORT: ${port}`) );

export default app;
