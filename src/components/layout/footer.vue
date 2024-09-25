<template>
    <div class="container">
        <footer>
            <div class="foot">
                <span><strong>COPYRIGHT {{year}} MonteriaGo. Todos los derechos reservados</strong></span>
            </div>
        </footer>
    </div>
</template>
<script setup>
const date = new Date()
const year = date.getFullYear()
</script>
<style lang="scss">
@import "../../assets/styles/scss/layouts/footer";
</style>
