var myImag = document.getElementById('tag-img');
myImag.onclick = function() {
      var imgLink = myImag.getAttribute('src');
      if (imgLink === "images/2.jpg"){
            myImag.setAttribute("src", 'images/4.jpg')
      } else {
            myImag.setAttribute('src', 'images/2.jpg')
      }
}
