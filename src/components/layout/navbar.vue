<template>
  <header>
    <div class="nav-multi">
      <div class="empresa">
        <p>MonteríaGo</p>
      </div>
      <div class="flex-shrink-0 dropdown notificacion">
        <a
          href="#"
          class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img src="@img/images/campana.png" class="img-perfil" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end text-small">
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-user"></i> Jairo Fabra</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-address-card"></i> Ingeniero de
              Software</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-building"></i> Usuario</a
            >
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#" @click="logout">
              <i class="fa-regular fa-arrow-right-to-bracket"></i> Cerrar
              Sesión</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-shrink-0 dropdown menu-usuario">
        <a
          href="#"
          class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img src="@img/images/conf.png" class="img-perfil" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end text-small">
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-user"></i> Jairo Fabra</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-address-card"></i> Ingeniero de
              Software</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="fa-regular fa-building"></i> Usuario</a
            >
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#" @click="logout">
              <i class="fa-regular fa-arrow-right-to-bracket"></i> Cerrar
              Sesión</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

// Cierre de sesión manual
const logout = () => {
  signOut(auth).then(() => {
    console.log("Cierre de sesión exitoso");
    router.push("/login"); // Redirige a la página de login
  }).catch((error) => {
    console.error("Error al cerrar sesión:", error);
  });
};

// // Cierre de sesión automático por expiración del token
// auth.onAuthStateChanged((user) => {
//   if (!user) {
//     console.log("El usuario no está autenticado o el token ha expirado.");
//     router.push("/login"); // Redirige a la página de login si el usuario no está autenticado
//   }
// });

// // Cierre de sesión cuando se cierra la ventana
// window.addEventListener('beforeunload', () => {
//   signOut(auth).then(() => {
//     console.log("Cierre de sesión exitoso antes de cerrar la ventana");
//   }).catch((error) => {
//     console.error("Error al cerrar sesión:", error);
//   });
// });

// // Cierre de sesión por inactividad
// let inactivityTime = () => {
//   let time;
//   const logoutTime = 600000; // Tiempo de inactividad antes del cierre de sesión (10 minutos)

//   const resetTimer = () => {
//     clearTimeout(time);
//     time = setTimeout(() => {
//       signOut(auth).then(() => {
//         console.log("Cierre de sesión por inactividad.");
//         router.push("/login");
//       }).catch((error) => {
//         console.error("Error al cerrar sesión:", error);
//       });
//     }, logoutTime);
//   };

//   window.onload = resetTimer;
//   document.onmousemove = resetTimer;
//   document.onkeypress = resetTimer;
// };

//inactivityTime();
</script>

<style lang="scss">
@import "../../assets/styles/scss/layouts/navbar";
</style>
