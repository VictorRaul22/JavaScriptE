import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./thema_oscuro.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/Alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dec 6, 2021 22:14:00", "Feliz cumpleaño");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/okJbBOHL9jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmapa",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/kmC81NeFDbM5A9vC9">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124859.25082824552!2d-77.11185254179688!3d-12.05373059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9d787d6115d%3A0xcd053c1cd4c95294!2sHiper%20plazaVea%20Alfonso%20Ugarte!5e0!3m2!1ses-419!2spe!4v1639176886670!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device")
  networkStatus();
});
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
