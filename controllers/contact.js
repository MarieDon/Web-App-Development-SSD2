'use strict';

const logger = require('../utils/logger');

const contact = {
  index(request, response) {
     logger.info('start rendering');
     logger.error('some error has occurred');
     logger.debug('some step has occurred...');
     const viewData = {
      title: 'Contact Us',
    };
    response.render('contactus', viewData);
  },
};

module.exports = contact;
