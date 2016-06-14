import {hexMD5} from 'md5.js';

window.addEventListener('load', function() {
  const formLogin = document.login;
  const {error, chapId, chapChallenge} = formLogin.dataset;
  if (error) {
    const snackbarContainer = document.querySelector('#toast');
    snackbarContainer.MaterialSnackbar.showSnackbar({message: error});
  }
  if (chapId) {
    formLogin.onsubmit = function() {
      console.log(hexMD5);
      console.log(hexMD5(`${chapId}${formLogin.password.value}${chapChallenge}`));
      formLogin.password.value = hexMD5(`${chapId}${formLogin.password.value}${chapChallenge}`);
      console.log(formLogin);
    };
  }
});
