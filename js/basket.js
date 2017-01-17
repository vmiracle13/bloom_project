/**
 * Created by Victoria on 10.01.2017.
 */
;(function() {

  window.onload = function() {

    var basketSymbol = document.querySelector('.basket');
      //getElementsByClassName('basket')[0];
    var basketImgSymbol = document.getElementsByClassName('basketImg')[0];
    var basketForm = document.getElementsByClassName('basket-form')[0];
    var numberOfChosenProducts = document.getElementsByClassName('chosen-product-number')[0];

    basketSymbol.addEventListener("click", handler1);
    basketImgSymbol.addEventListener("click", handler1);

    function handler1(event) {
      basketForm.classList.toggle('hide');
      numberOfChosenProducts.classList.toggle('chosen-product-number-onclick');
      basketSymbol.classList.toggle('greenBckgr');
      basketImgSymbol.classList.toggle('changeBasketSymbol');
    }

    function handler3(event) {
      loginSymbol.classList.toggle('greenBckgr');
      spanLoginSymbol.classList.toggle('loginImg');
      spanLoginSymbol.classList.toggle('changeLoginSymbol');
      loginForm.classList.toggle('hide');
    }

    var sidebar = document.getElementsByClassName('sidebar')[0];
    var buttonSidebar = sidebar.lastElementChild.lastElementChild;
    var imgSidebar = sidebar.firstElementChild;
    var textOnImg = sidebar.childNodes[3];

    buttonSidebar.addEventListener("click", handler2);

    function handler2() {
      buttonSidebar.classList.toggle('onclickButtonA');
      buttonSidebar.classList.toggle('onclickButtonBeforeA');
      imgSidebar.classList.toggle('onclickButtonImg');
      textOnImg.classList.toggle('hide');

      if (textOnImg.classList.contains('hide')) {
        buttonSidebar.innerHTML = 'like it';
      } else {
        buttonSidebar.innerHTML = 'I liked';
      }
    }

  };
}());
