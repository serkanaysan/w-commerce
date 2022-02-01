import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.send('Test it')
    } catch (error) {
        //res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

module.exports = router