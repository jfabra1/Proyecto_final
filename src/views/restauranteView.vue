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
        <baseTable :headers="headers" />
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-3 align-content-center">
            <numberRegisterTable />
          </div>
          <div class="col-md-2 align-content-center">
            <selectDataTable />
          </div>
          <div class="col-md-7 align-content-center">
            <paginatorTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

//Importar UI elements
import ui from "../utils/importUI.js";
const {
  baseTable,
  filterTableRol,
  filterTableEstado,
  numberRegisterTable,
  filterTableCustomers,
  paginatorTable,
  selectDataTable,
} = ui;


</script>
<style lang="scss" scoped>
@import "../assets/styles/scss/card/cardBase.scss";
</style>
