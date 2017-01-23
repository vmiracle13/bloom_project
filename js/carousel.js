/**
 * Created by Victoria on 23.01.2017.
 */

;(function() {

    document.addEventListener("DOMContentLoaded", function() {

        var checkboxBlock = document.querySelector('.radio-buttons');
        var spanCheckedRadioBox = checkboxBlock.querySelector('span');
        var checkedRadioBox = checkboxBlock.querySelector('input');
        var tape = document.querySelector('.tape');
        var imgLength = 720;

        var activeClass='checked';

        checkboxBlock.addEventListener("click", checkRadioBox);

        function checkRadioBox() {

            var target = event.target;

            if (target.tagName != 'SPAN') {
              return;
            }

            spanCheckedRadioBox.classList.remove(activeClass);
            spanCheckedRadioBox.classList.add(target.className);
            checkedRadioBox.checked = 0;

            var n = target.previousElementSibling.value - checkedRadioBox.value;
            tape.style.marginLeft = - imgLength * n + 'px';

            target.classList.remove(target.className);
            target.classList.add(activeClass);
            target.previousElementSibling.checked = 1;

            spanCheckedRadioBox = target;
        }
    });
}());
