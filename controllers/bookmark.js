'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');

const bookmark = {
 index(request, response) {
    const bookmarkId = request.params.id;
    logger.debug('Bookmark id = ', bookmarkId);
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkStore.getBookmark(bookmarkId),
    };
    response.render('bookmark', viewData);
  },
  
  deleteBookmark(request, response) {
    const bookmarkId = request.params.id;
    const linkId = request.params.bookmarkid;
    logger.debug(`Deleting Link ${linkId} from Bookmark ${bookmarkId}`);
    bookmarkStore.removeBookmark(bookmarkId, linkId);
    response.redirect('/bookmark/' + bookmarkId);
  },
  
  
};

module.exports = bookmark;