<template>
  <div class="contenedor">
    <div class="card">
      <div class="card-header">
        <div class="row mt-1">
          <div class="col-md-3">
            <filterTableRol />
          </div>
          <div class="col-md-3">
            <filterTableEstado />
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <filterTableCustomers />
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-8">
            <h5>Restaurantes Disponibles</h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <!-- Mostrar el spinner si loading es verdadero -->
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
        </div>
        <!-- Mostrar la tabla solo si no está cargando -->
        <baseTable v-else :data="userData" />
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-3 align-content-center">
            <numberRegisterTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ui from "../utils/importUI.js";
import { ref, inject } from 'vue';
import { getDataFromFirestore } from '../composables/scripConsulta.js';

const {
  baseTable,
  filterTableRol,
  filterTableEstado,
  numberRegisterTable,
  filterTableCustomers,
} = ui;

// Inyecta Firestore (db) proporcionado desde main.js
const db = inject('db');
let collection = 'restaurantes';

// Variables reactivas para almacenar los datos y el estado de carga
const userData = ref([]);
const loading = ref(true); 

(async () => {
  userData.value = await getDataFromFirestore(collection, db);
  loading.value = false; // Cambia a false cuando los datos se hayan cargado
})();

</script>

<style lang="scss" scoped>
@import "../assets/styles/scss/card/cardBase.scss";
</style>
