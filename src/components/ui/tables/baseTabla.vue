<template>
  <div class="table-responsive">
    <table class="table text-center">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header.text }}</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="value in row" :key="value">{{ value }}</td>
          <td>
            <actionsButtonGroup />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
defineProps({headers: {type: Array,required: true},data: {type: Array,required: true}});

import actionsButtonGroup from "../buttons/actionsButtonGroup.vue";
</script>
