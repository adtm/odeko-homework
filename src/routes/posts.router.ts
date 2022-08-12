import express from 'express'

import validate from '../middlewares/validation';
import postsController from '../controllers/posts.controller'
import postValidationSchema from '../validations/posts.like.validation';

const router = express.Router()
router.post("/like", validate(postValidationSchema), postsController.likePosts)

export default router;
