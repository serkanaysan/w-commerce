import express from 'express'
import { server } from '../../../..'


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.send('Test it')
    } catch (error) {
        //res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('POST REQUEST', server)
        const collection = server.database.db.collection('user')
        const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        console.log('Inserted documents =>', insertResult);



        res.send('Test it')
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

module.exports = router