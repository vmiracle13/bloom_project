/**
 * Created by Victoria on 04.01.2017.
 */

;(function() {

  window.onload = function() {

    var loginButton = document.querySelector('.loginButton');
    var loginForm = document.querySelector('.login-form');
    var loginImgButton = loginButton.querySelector('.loginImg');


    loginButton.addEventListener("click", openLoginForm);

    function openLoginForm(event) {
      loginButton.classList.toggle('greenBckgr');
      loginImgButton.classList.toggle('changeLoginSymbol');
      loginForm.classList.toggle('hide');
    }
  };
}());