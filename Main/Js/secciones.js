  function cargarContenido(event, seccion) {
    var seccionNueva = seccion;
    sessionStorage.setItem('cargarSeccion', seccionNueva);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('contenido').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar la sección: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', seccion + '.html', true);
    xhr.send();
    event.preventDefault();
}

function cargarStorage(seccion) {
    var seccionNueva = seccion;
    sessionStorage.setItem('cargarSeccion', seccionNueva);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('contenido').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar la sección: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', seccion + '.html', true);
    xhr.send();
}
var seccionActual = sessionStorage.getItem('cargarSeccion');
if (seccionActual == null || seccionActual == ""){
    document.addEventListener("DOMContentLoaded", function() {
        cargarStorage("Templates/inicio");
      });
} else {
    document.addEventListener("DOMContentLoaded", function() {
        var seccionActual = sessionStorage.getItem('cargarSeccion');
        cargarStorage(seccionActual);
      });
}

function preventRedirection(event){
    event.preventDefault();
}

var enlaceWhatsapp = "https://wa.me/573155058792?text=Hola,%20me%20interesa%20obtener%20una%20cotizacion%20personalizada";
var enlacesPrincipales = document.getElementsByClassName("iniciarConversacion");
for (var i = 0; i < enlacesPrincipales.length; i++) {
    enlacesPrincipales[i].href = enlaceWhatsapp;
}
