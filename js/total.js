/**
 * Created by Victoria on 20.01.2017.
 */

;(function() {
  document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", defaultClickA);

  function defaultClickA(event) {
    var target = event.target;

    if (target.tagName == 'A' && target.getAttribute('href') == "#") {
      event.preventDefault();
    }
  }});

  document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", defaultClickButton);

    function defaultClickButton(event) {
      var target = event.target;

      if (target.tagName == 'BUTTON' && target.value('Add to Card')) {
        event.preventDefault();
      }
    }});
}());