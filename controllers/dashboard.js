'use strict';

const logger = require('../utils/logger');


const bookmarkCollection = require('../models/bookmark-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmark: bookmarkCollection.getAllBookmark(),
    };
    logger.info('about to render', bookmarkCollection.getAllBookmark());
    response.render('dashboard', viewData);
  },
  
  deleteBookmark(request, response) {
    const bookId = request.params.id;
    bookmarkCollection.removeList(bookId);
    response.redirect('/dashboard');
  },
};
module.exports = dashboard;
