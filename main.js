/**
 * Created by Victoria on 05.01.2017.
 */
'use strict';
/*
 let welcome = require('./login');
 welcome("home");
 */


;(function() {

    window.onload = function() {

        var loginSymbol = document.getElementsByClassName('login')[0];
        var logImgSymbol = document.getElementsByClassName('loginImg'[0]);
        var form = document.getElementsByClassName('login-form')[0];
        var spanLoginSymbol = document.querySelectorAll('span')[3];

        loginSymbol.onclick = logImgSymbol.onclick = function(event) {
            var target = event.target;
            target.classList.toggle('greenBckgr');

            if (spanLoginSymbol.classList.contains('loginImg')) {
                spanLoginSymbol.classList.remove('loginImg');
                spanLoginSymbol.classList.add('changeSymbol');
            } else {
                spanLoginSymbol.classList.add('loginImg');
                spanLoginSymbol.classList.remove('changeSymbol');
            }

            if (form.classList.contains('hide')) {
                form.classList.remove('hide');
            } else {form.classList.add('hide');
            }

        };
    };

}());
