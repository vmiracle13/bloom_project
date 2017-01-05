/**
 * Created by Victoria on 04.01.2017.
 */

;(function() {

    window.onload = function() {

        var loginSymbol = document.getElementsByClassName('login')[0];
        var logImgSymbol = document.getElementsByClassName('loginImg'[0]);
        var form = document.getElementsByClassName('login-form')[0];

        loginSymbol.onclick = logImgSymbol.onclick = function(event) {
            var target = event.target;
            target.classList.toggle('green');

            form.style.display = '';
        };
    };

}());
