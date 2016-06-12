import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import 'theme.less';

require('static/alogin.jade');
require('static/login.jade');
require('static/error.jade');
require('static/redirect.jade');
require('static/status.jade');
require('static/logout.jade');
require('static/radvert.jade');

window.addEventListener('load', () => {
  const { error } = document.forms[0].dataset;
  if (error) {
    const snackbarContainer = document.querySelector('#toast');
    snackbarContainer.MaterialSnackbar.showSnackbar({ message: error });
  }
});
