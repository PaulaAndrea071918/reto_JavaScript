var redSocial = {
  facebook : 'http://facebook.com/',
  twitter: 'http://twitter.com/',
  flickr: 'http://flickr.com/',
  youtube: 'http://youtube.com/'
};

var redesSociales = function() {
  var  output = '<ul>', 
    iconos = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<a href="' + redSocial[key] + '">' +
      '<img src="images/' + key + '.png"  ">' +
      '</a>';
  }
  output+= '</ul>';
  
  for (var social = iconos.length - 1; social >= 0; social--) {
    iconos[social].innerHTML = output;
  };
}(redSocial);