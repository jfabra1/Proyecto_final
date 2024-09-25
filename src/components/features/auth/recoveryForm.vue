<template>
  <div class="form-login">
    <div class="container py-5">
      <div class="row align-items-center justify-content-center">
        <p class="text-login">Recuperar Contraseña</p>
          <form>
            <div class="mb-5 mt-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" />
            </div>
            <div class="d-flex align-content-end justify-content-end"> 
              <button type="submit" class="btn btn-primary boton-login">Recuperar Contraseña</button>
            </div>
            <hr>
            <div class="pt-5 text-center">
              ¿ya tienes una cuenta? <a href="#" class="link-signup">Inicia Sesión</a>
            </div>
            <div class="pt-1 text-center">
              ¿No tienes una cuenta? <a href="#" class="link-signup">Regístrate</a>
            </div>
            <div class="text-center cont-imagen">
              <img src="@img/images/monteriago1.jpeg" class="imagen"></img>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
@import "../../../assets/styles/scss/features/recoveryForm";
</style>
