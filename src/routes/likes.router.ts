import express from 'express'

import likesController from '../controllers/likes.controller'

const router = express.Router()
router.get("/streaks", likesController.getStreaks)
router.get("/most/weekdays", likesController.getMostLikedWeekdaysWithCount)

export default router;
