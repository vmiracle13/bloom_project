/**
 * Created by Victoria on 10.01.2017.
 */
;(function() {

  window.onload = function() {

    var basketSymbol = document.querySelector('.basket');
    var basketImgSymbol = document.querySelector('.basketImg');
    var basketForm = document.querySelector('.basket-form');
    var numberOfChosenProducts = document.querySelector('chosen-product-number');

    basketSymbol.addEventListener("click", handler1);
    basketImgSymbol.addEventListener("click", handler1);

    function handler1(event) {
      basketForm.classList.toggle('hide');
      numberOfChosenProducts.classList.toggle('chosen-product-number-onclick');
      basketSymbol.classList.toggle('greenBckgr');
      basketImgSymbol.classList.toggle('changeBasketSymbol');
    }

  };
}());
