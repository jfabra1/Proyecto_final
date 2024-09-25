<template>
    <div class="home">
        <div class="row">
            <div class="col-3 sidebar" style="height: calc(109vh - 59px)">
                <span class="sidebar1">
                    <Sidebar />    
                </span>
            </div>
            <div class="col-9 contenido">
                <span class="navbar">
                    <Navbar />
                </span>\
                <span class="main">
                    <router-view />
                </span>
                <span class="footer">
                    <Footer />
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from '@/components/layout/navbar.vue';
import Sidebar from '@/components/layout/sidebars.vue';
import Footer from '@/components/layout/footer.vue';
</script>
<style scoped lang="scss">
@import "../assets/styles/scss/layouts/home"
</style>
