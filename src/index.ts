require("dotenv").config();

import express from 'express'

const app = express()
app.listen(process.env.APP_PORT, () => console.log(`Server listening on port: ${process.env.APP_PORT}`))
