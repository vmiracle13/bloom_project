/**
 * Created by Victoria on 10.01.2017.
 */
;(function() {

  window.onload = function() {

    var basketSymbol = document.getElementsByClassName('basket')[0];
    var basketImgSymbol = document.getElementsByClassName('basketImg')[0];
    basketSymbol.addEventListener("click", handler1);
    basketImgSymbol.addEventListener("click", handler1);


    function handler1(event) {
      var target = event.target;



    }

  };
}());
