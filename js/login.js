/**
 * Created by Victoria on 04.01.2017.
 */

;(function() {

    document.addEventListener("DOMContentLoaded", function() {

      var loginBlock = document.querySelector('.login-block');
      var loginForm = loginBlock.querySelector('.login-form');
      var loginImg = loginBlock.querySelector('.loginImg');

      loginBlock.addEventListener("click", openLoginForm);

      function openLoginForm(event) {

        var target = event.target;

        if (target.tagName == "DIV" || (target.tagName == 'SPAN' && target.classList.contains('loginImg')) ) {
            loginBlock.classList.toggle('greenBckgr');
            loginImg.classList.toggle('changeLoginSymbol');

            loginBlock.classList.add('clicked');

            if (loginBlock.classList.contains('clicked')) {
              loginForm.classList.toggle('visible');
            }
        } else {
          return;
        }

      }
    });
}());