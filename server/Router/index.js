import express from 'express'
import auth from '../config/auth'


var router = express.Router()

router.post('/', function (req, res, next) {
    auth.login(req, res, next)
})

module.exports = router