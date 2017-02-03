/**
 * Created by Victoria on 03.02.2017.
 */
/**
 * Created by Victoria on 23.01.2017.
 */

;(function() {

  document.addEventListener("DOMContentLoaded", function() {

    var menuPicture = document.querySelector('.menu-picture');
    var navigation = document.querySelector('.navigation');

    menuPicture.addEventListener('touchstart', viewMenu, false);

    function viewMenu() {
      navigation.classList.toggle('animation');
    }
  });
}());
