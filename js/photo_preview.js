;(function() {

  window.onload = function() {

    var photos = document.querySelector('.photos');
    var mainPhoto = document.querySelector('img');
    var selectedPreview = photos.querySelector('img');
    var activeClass = 'onclick';
    photos.addEventListener("click", choosePreview);
    selectedPreview.classList.add(activeClass);

    function choosePreview(event) {
      var target = event.target;

      if (target.tagName != 'IMG') {
        return;
      }

      if (selectedPreview) {
        selectedPreview.classList.remove(activeClass);
      }

      target.classList.toggle('onclick');
      mainPhoto.setAttribute('src', target.getAttribute('src'));
      selectedPreview = target;
    }
  };
}());