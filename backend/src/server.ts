import express, { Request, Response } from 'express';
import cors from "cors"
import router from './routes';
import dotenv from "dotenv"

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
