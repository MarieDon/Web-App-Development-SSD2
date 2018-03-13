'use strict';
const _ = require('lodash');
const bookmarkStore = {

 bookmarkCollection: require('./bookmark-store.json').bookmarkCollection,

  getAllBookmark() {
    return this.bookmarkCollection;
  },

  getBookmark(id) {
    return _.find(this.bookmarkCollection, { id: id });
  },
  
   removeBookmark(id, bookmarkId) {
    const bookmark = this.getBookmark(id);
  _.remove(bookmark.Bookmark, { id: bookmarkId });
  },  
  
  remBookmark(id) {
  _.remove(this.bookmarkCollection, { id: id });
},
  
  removeList(id) {
    _.remove(this.bookmarkCollection, {id: id});
  },
  
};

module.exports = bookmarkStore;