import express from 'express'
const router = express.Router()

import {
    randomAirQuality, franceAirQuality
} from '../controllers/airQualityController.js'

router.route('/air_quality').get(randomAirQuality)
router.route('/air_quality/paris').get(franceAirQuality)

export default router
