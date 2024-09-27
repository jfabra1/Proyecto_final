<template>
  <div class="side">
    <div class="logo">
      <img src="@img/images/monteriago1.jpeg" class="img-logo" @click="$router.push({name: 'inicio'})" cursor: pointer/>
    </div>
    <div class="modulos p-3">
      <div class="submodulos">
        <p @click="$router.push({name: 'restaurantes'})"><i class="fa-solid fa-utensils"></i> <span class="texto-modulos">Restaurantes</span></p>
        <p><i class="fa-solid fa-champagne-glasses"></i> <span class="texto-modulos">Discotecas</span></p>
        <p><i class="fa-solid fa-beer-mug-empty"></i> <span class="texto-modulos">Bares</span></p>
        <p><i class="fa-solid fa-dumbbell"></i> <span class="texto-modulos">Gym</span></p>
        <p><i class="fa-solid fa-futbol"></i> <span class="texto-modulos">Deportes</span></p>
        <p><i class="fa-solid fa-calendar-days"></i> <span class="texto-modulos">Eventos</span></p>
        <p><i class="fa-solid fa-rectangle-ad"></i> <span class="texto-modulos">Recomendados</span></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


</script>
<style lang="scss">
@import "../../assets/styles/scss/layouts/sidebars";
</style>
