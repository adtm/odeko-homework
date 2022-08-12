import express from 'express'

import likesController from '../controllers/likes.controller'

const router = express.Router()
router.get("/most", likesController.getMostLiked)
router.get("/streaks", likesController.getStreaks)

export default router;
