'use strict';

const express = require('express');
const router = express.Router();


const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const bookmark = require('./controllers/bookmark.js');
const contact = require('./controllers/contact.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/contact', contact.index);
router.get('/about', about.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/bookmark/:id/deleteBookmark/:bookmarkid', bookmark.deleteBookmark);
router.get('/dashboard/deletebookmark/:id', dashboard.deleteBookmark);


module.exports = router;
