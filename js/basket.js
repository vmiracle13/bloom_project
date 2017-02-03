/**
 * Created by Victoria on 10.01.2017.
 */
;(function() {

  document.addEventListener("DOMContentLoaded", function() {

      var basketBlock = document.querySelector('.basket-block');
      var basketForm = basketBlock.querySelector('.form-basket');
      var basketImg = basketBlock.querySelector('.basketImg');
      var productNumber = basketBlock.querySelector('.chosen-product-number');

      basketBlock.addEventListener("click", openBasketForm);

      function openBasketForm(event) {

          var target = event.target;

          if (target.tagName == "DIV" && target.classList.contains('basket-block') || (target.tagName == 'SPAN') && target.classList.contains('basketImg')) {

              basketBlock.classList.toggle('selected');
              basketImg.classList.toggle('changeBasketSymbol');
              productNumber.classList.toggle('chosen-product-number-onclick');

              basketBlock.classList.add('clicked');

              if (basketBlock.classList.contains('clicked')) {
                basketForm.classList.toggle('visible');
              }
          } else {
            return;
          }

      }
  });
}());