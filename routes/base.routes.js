const express = require('express');
const BaseController = require('../app/controllers/base.controller')
const router = express.Router()

router.get('/', BaseController.IndexPage)

module.exports = router