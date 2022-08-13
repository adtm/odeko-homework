require("dotenv").config();

import express from "express";
import postsRouter from "./routes/posts.router";
import likesRouter from "./routes/likes.router";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const router = express.Router();
app.use("/api/v1", router)
router.use("/posts", postsRouter)
router.use("/likes", likesRouter)

app.listen(process.env.APP_PORT, () => console.log(`Server listening on port: ${process.env.APP_PORT}`))
