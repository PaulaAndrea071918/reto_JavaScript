var redSocial = {
  facebook : 'http://facebook.com/',
  twitter: 'http://twitter.com/',
  flickr: 'http://flickr.com/',
  youtube: 'http://youtube.com/'
};

let redesSociales = function() {
iconos = document.querySelectorAll('.socialmediaicons');
let  redes   
  for (let key in arguments[0]) {
    redes+= '<a href="' + redSocial[key] + '">' +
      '<img src="images/' + key + '.png"  ">' +
      '</a>';          
  }
  redes;
  for (let social = iconos.length - 1; social >= 0; social--) {
    iconos[social].innerHTML = redes;
  };
}(redSocial);



//arguments es un objeto similar 
//a Array accesible dentro de funciones 
//que contiene los valores de los argumentos pasados a esa función.


//keys() El método keys() devuelve un nuevo 
//objeto Array Iterator que contiene las claves de índice con las que 
//acceder a cada elemento en el array.