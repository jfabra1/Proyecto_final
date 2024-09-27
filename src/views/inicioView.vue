<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@img/images/restaurantes.jpeg" class="d-block w-100" alt="Lugar 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>Restaurantes</h5>
          <p>Tus restaurantes favoritos en un solo lugar.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@img/images/bares.jpeg" class="d-block w-100" alt="Lugar 2">
        <div class="carousel-caption d-none d-md-block">
          <h5>BARES</h5>
          <p>Tus bares favoritos en un solo lugar.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@img/images/gym.jpeg" class="d-block w-100" alt="Lugar 3">
        <div class="carousel-caption d-none d-md-block">
          <h5>GYM</h5>
          <p>Tus gimnasios favoritos en un solo lugar.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import "../assets/styles/scss/inicio/inicioCarrusel.scss";
</style>
