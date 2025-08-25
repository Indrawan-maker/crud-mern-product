import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserRoute from './routes/UserRoute.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log(err));
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected...'))

app.use(cors({
    origin: [
        process.env.CLIENT_URL,
        process.env.CLIENT_URL_PROD
    ],
    credentials: true
}))
app.use(express.json())
app.use(UserRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port...`))