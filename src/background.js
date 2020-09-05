import axios from 'axios';

global.browser = require('webextension-polyfill');

const apiUrl = 'http://127.0.0.1:8000';

const bookmarkApiUrl = `${apiUrl}/api/bookmarks/`;

chrome.cookies.getAll({ url: 'http://127.0.0.1:8000' }, (result) => console.log(result));

chrome.bookmarks.onCreated.addListener((node, bookmark) => {
  axios.post(bookmarkApiUrl, bookmark, {
    withCredentials: true,
  }).then((_) => console.log('Successfully added'));
});

chrome.bookmarks.onRemoved.addListener((node, bookmark) => {
  const url = `${bookmarkApiUrl}${bookmark.index}/delete/`;
  axios.delete(url, {
    withCredentials: true,
  }).then((_) => console.log('Successfully deleted'));
});
