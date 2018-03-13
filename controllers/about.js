'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
     logger.info('start rendering');
     logger.error('some error has occurred');
     logger.debug('some step has occurred...');
     const viewData = {
      title: 'About Bookmark 1',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
