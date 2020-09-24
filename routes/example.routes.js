const express = require('express');
const ExampleController = require('../app/controllers/example.controller')
const router = express.Router()

router.get('/', ExampleController.IndexPage)

module.exports = router