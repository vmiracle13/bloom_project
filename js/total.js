/**
 * Created by Victoria on 20.01.2017.
 */

;(function() {

    alert('hey');

    debugger;

    var ref = document.querySelector('.logo');

    ref.addEventListener("click", defaultClick);

    function defaultClick(event) {
      event.preventDefault();
    }

  //}

}());

