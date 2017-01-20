/**
 * Created by Victoria on 17.01.2017.
 */
;(function() {

  window.onload = function() {

    var sidebar = document.querySelector('.sidebar');
    var button = sidebar.querySelector('button');
    var textOnImg = sidebar.querySelector('.textOnImg');
    var img = sidebar.querySelector('img');

    button.addEventListener("click", likeIt);

    function likeIt() {

      button.classList.toggle('onclickButton');

       if (button.classList.contains('onclickButton')) {
          button.innerHTML = 'I liked';
       } else {
         button.innerHTML = 'like it';
       }

      button.classList.toggle('onclickButtonBefore');
      button.classList.toggle('onclickButtonBackground');
      textOnImg.classList.toggle('hide');
      img.classList.toggle('onclickButtonBackground');
    }

  };
}());