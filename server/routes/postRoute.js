import express from "express";

import {
  getFeedPost,
  getUserPosts,
  likePost,
  createPostControl,
} from "../controller/post.js";
import { verifyToken } from "../middleware/auth.js";
import upload from "../helper/fileUploder.js";

const routes = express.Router();

routes.post("/post", verifyToken, upload.single("file"), createPostControl);

routes.get("/get/", verifyToken, getFeedPost);
routes.get("/get/:UserId", verifyToken, getUserPosts);
routes.patch("/:id/like", verifyToken, likePost);

export default routes;
