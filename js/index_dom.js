import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./thema_oscuro.js";
const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/Alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Dec 6, 2021 22:14:00","Feliz cumpleaño");
    scrollTopButton(".scroll-top-btn");
})
d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})
darkTheme(".dark-theme-btn","dark-mode");

