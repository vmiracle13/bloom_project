/**
 * Created by Victoria on 14.01.2017.
 */
;(function() {

  window.onload = function() {

    var product = document.querySelector('li');

    product.addEventListener('mouseover', handler1);

    function handler1() {
      var a = product.querySelectorAll('a');
      var button;

      for (var i = 0; i < a.length; i++) {
        if (a[i].innerHTML == "Add to Card") {
          button = a[i];
        }
      }
        button.classList.toggle('hide');
    }


  };
}());
