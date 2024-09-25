<template>
  <div class="form-login">
    <div class="container py-5">
      <div class="row align-items-center justify-content-center">
        <p class="text-login">Registrarse</p>
          <form>
            <div class="mb-3 mt-2">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1" />
            </div>
            <div class="d-flex align-content-end justify-content-end"> 
              <button type="submit" class="btn btn-primary boton-login">Registrarse</button>
            </div>
            <hr>
            <div class="pt-1 text-center">
              <a href="#" class="forgot-password">Olvidé mi contraseña</a>
            </div>
            <div class="pt-1 text-center">
              ¿Ya tienes una cuenta? <a href="#" class="link-signup">Inicia Sesión</a>
            </div>
            <div class="text-center cont-imagen">
              <img src="@img/images/parametra1.png" class="imagen"></img>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
@import "../../../assets/styles/scss/features/registerForm";
</style>
