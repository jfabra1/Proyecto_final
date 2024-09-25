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
            <a class="dropdown-item" href="#"
              ><i class="fa-regular fa-arrow-right-to-bracket"></i> Cerrar
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
            <a class="dropdown-item" href="#"
              ><i class="fa-regular fa-arrow-right-to-bracket"></i> Cerrar
              Sesión</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style lang="scss">
@import "../../assets/styles/scss/layouts/navbar";
</style>
