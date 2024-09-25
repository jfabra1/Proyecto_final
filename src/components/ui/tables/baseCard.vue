<template>
  <div class="row">
    <div v-for="(establishment, index) in establishments" :key="index" class="col-md-4 mb-4">
      <div 
        class="card h-100"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <img :src="establishment.logo" class="card-img-top" alt="Logo del establecimiento" />
        <div class="card-body">
          <h5 class="card-title">{{ establishment.nombre }}</h5>
          <p class="card-text">{{ establishment.descripcion }}</p>
        </div>
        <!-- Información adicional al pasar el cursor -->
        <div v-if="hoveredIndex === index" class="overlay">
          <p>Teléfono: {{ establishment.telefono }}</p>
          <p>Dirección: {{ establishment.direccion }}</p>
          <p>Email: {{ establishment.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array de datos aleatorios de establecimientos
const establishments = ref([
  {
    nombre: "Restaurante El Buen Sabor",
    logo: "https://via.placeholder.com/150",
    descripcion: "Comida casera de la mejor calidad.",
    telefono: "123-456-7890",
    direccion: "Calle 123, Montería",
    email: "contacto@elbuenSabor.com",
  },
  {
    nombre: "Café La Esquina",
    logo: "https://via.placeholder.com/150",
    descripcion: "El mejor café en el corazón de la ciudad.",
    telefono: "098-765-4321",
    direccion: "Avenida Principal, Montería",
    email: "info@cafelaesquina.com",
  },
  {
    nombre: "Pizzería Don Juan",
    logo: "https://via.placeholder.com/150",
    descripcion: "Las pizzas más deliciosas.",
    telefono: "555-555-5555",
    direccion: "Calle del Sabor, Montería",
    email: "reservas@donjuanpizza.com",
  },
  // Agrega más establecimientos si es necesario
]);

const hoveredIndex = ref(null);
</script>

<style scoped lang="scss">
@import "../../../assets/styles/scss/card/cardsBaseEstable.scss";
</style>
