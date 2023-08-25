// import express from "express";
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv'
// import {connectDB} from './config/connectMongo'
// import  userRoutes  from './routes/userRoutes'
// import  issueRoutes  from './routes/issueRoutes'
// import  attachmentRoutes from './routes/attachmentRoutes'; // Assuming the attachmentRoutes.js is in the same directory
// import cors from 'cors';
// // import userController from "./controllers/userController";
// // import validateToken from './middleware/validateTokenHandler';

// dotenv.config();

// const app = express();
// const port = process.env.PORT;


// app.use(bodyParser.json());

// // database connection 
// connectDB()

// app.use('/uploads', express.static('./uploads'));

// app.use(cors());
// // Routes
// app.use("/api", userRoutes);
// app.use('/api/issues',issueRoutes);
// app.use('/api/attachments', attachmentRoutes);

// // server is running
// app.listen(port,() => {
//      console.log(`app is listening to port ${port}`);
// })

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connection from "../db";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
// import issueRoutes from "./routes/issues.js";

// Load environment variables from .env
dotenv.config();

const app = express();

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
// app.use("/api/issues", issueRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

