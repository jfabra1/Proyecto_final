<template>
  <div class="fondo">
    <div class="login-form">
      <div class="row contenedor">
        <div class="col-md-6 contenedor-1">
          <div class="mountain-container">
            <div class="mountain mountain-1"></div>
            <div class="mountain mountain-2"></div>
            <div class="mountain mountain-3"></div>
          </div>
        </div>
        <div class="col-md-5 form">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Form from "@/components/features/auth/loginForm.vue";
</script>
<style scoped lang="scss">
@import "../../assets/styles/scss/auth/login";
</style>
