/**
 * Created by Victoria on 05.01.2017.
 */
'use strict';
/*
 let welcome = require('./login');
 welcome("home");
 */

//подключение файла login
import './login';


;(function() {

    window.onload = function() {

        var loginSymbol = document.getElementsByClassName('login')[0];
        var logImgSymbol = document.getElementsByClassName('loginImg')[0];
        var form = document.getElementsByClassName('login-form')[0];
        var spanLoginSymbol = document.querySelectorAll('span')[3];

        loginSymbol.onclick = logImgSymbol.onclick = function(event) {
            var target = event.target;
            target.classList.toggle('greenBckgr');
            spanLoginSymbol.classList.toggle('loginImg');
            spanLoginSymbol.classList.toggle('changeSymbol');
            form.classList.toggle('hide');
        };

        var sidebar = document.getElementsByClassName('sidebar')[0];
        var buttonSidebar = sidebar.lastElementChild.lastElementChild;
        var imgSidebar = sidebar.firstElementChild;
        var textOnImg = sidebar.childNodes[3];

        buttonSidebar.onclick = function(event) {
            buttonSidebar.innerHTML = 'I liked';
            buttonSidebar.classList.toggle('onclickButtonA');
            buttonSidebar.classList.toggle('onclickButtonBeforeA');
            imgSidebar.classList.toggle('onclickButtonImg');
            textOnImg.classList.toggle('hide');
        }
    };

}());
