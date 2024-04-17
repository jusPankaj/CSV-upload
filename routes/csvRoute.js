const express = require("express");
const homepage = require("../controller/homeController");
const router = express.Router();
const {showFiles} = require('../controller/csvController')
const {uploadFiles} = require('../controller/csvController')
const multer = require("multer");

const upload = multer({ dest: 'uploads/'})



router.get('/', homepage);
router.get('/csv/:id', showFiles)
router.post('/upload', upload.single('csv') , uploadFiles)


module.exports = router;
