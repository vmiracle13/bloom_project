/**
 * Created by Victoria on 04.01.2017.
 */

;(function() {

  window.onload = function() {

    var loginSymbol = document.getElementsByClassName('login')[0];
    var logImgSymbol = document.getElementsByClassName('loginImg')[0];
    var form = document.getElementsByClassName('login-form')[0];
    var spanLoginSymbol = document.querySelectorAll('span')[3];
/*
    loginSymbol.onclick = logImgSymbol.onclick = function(event) {
      var target = event.target;
      target.classList.toggle('greenBckgr');
      spanLoginSymbol.classList.toggle('loginImg');
      spanLoginSymbol.classList.toggle('changeSymbol');
      form.classList.toggle('hide');
    };*/


    logImgSymbol.addEventListener("click", handler1);
    loginSymbol.addEventListener( "click", handler1);

    function handler1(event) {
      var target = event.target;
      target.classList.toggle('greenBckgr');
      spanLoginSymbol.classList.toggle('loginImg');
      spanLoginSymbol.classList.toggle('changeSymbol');
      form.classList.toggle('hide');
    }

    var sidebar = document.getElementsByClassName('sidebar')[0];
    var buttonSidebar = sidebar.lastElementChild.lastElementChild;
    var imgSidebar = sidebar.firstElementChild;
    var textOnImg = sidebar.childNodes[3];

    logImgSymbol.addEventListener("click", handler2);

    function handler2() {
      buttonSidebar.innerHTML = 'I liked';
      buttonSidebar.classList.toggle('onclickButtonA');
      buttonSidebar.classList.toggle('onclickButtonBeforeA');
      imgSidebar.classList.toggle('onclickButtonImg');
      textOnImg.classList.toggle('hide');
    }
  };
}());
