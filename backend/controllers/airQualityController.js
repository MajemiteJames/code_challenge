import asyncHandler from 'express-async-handler';
import axios from 'axios';
import nodeCron from 'node-cron'
import Pollution from '../models/pollutionModel.js'

// @desc    Get air quality based on the latitude and longitude supllied in the params
// @route   POST /api/air_quality?lat=&lon=
// @access  Public
const randomAirQuality = asyncHandler(async (req, res) => {
    if(req.query.lat == null || req.query.lat == undefined || req.query.lat == ''){
        return res.status(404).send({
        error: "latitude and Longitude is Required",
        status: 404
    });
    }
    if(req.query.lon == null || req.query.lon == undefined || req.query.lon == ''){
        return res.status(404).send({
        error: "latitude and Longitude is Required",
        status: 404
    });
    }

    await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${req.query.lat}&lon=${req.query.lon}&key=${process.env.SECRET}`).then(response => {
        let pollution = response.data.data.current.pollution
        return res.status(201).send({
        status: 201,
        Result: {
        pollution
        },
    });
    }
    )
    .catch(err=>console.log(err.response.data));
})


const franceAirQuality  = asyncHandler(async (req, res) => {
    let lat = 48.856613;
    let lon = 2.352222;
    res.status(201).json({
    status: 201,
    message: 'Pollution for Paris will be created every minute'
    })
    nodeCron.schedule("* * * * *", async () => {
        console.log('running a task every minute');
        await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.SECRET}`).then(async response => {
        let pollution = response.data.data.current.pollution
        console.log(pollution.ts)
        let ts = pollution.ts
        let    aqius = pollution.aqius
        let   mainus =pollution.mainus
        let   aqicn = pollution.aqicn
        let   maincn = pollution.maincn
        await Pollution.create({
            ts,
            aqius,
            mainus,
            aqicn,
            maincn
        })
}
).catch(err=>console.log(err));});
})

export {
randomAirQuality,
franceAirQuality
}