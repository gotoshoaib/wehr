<template>
  <div id="layout_wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppSidebar from "./Sidebar.vue";

export default {
    components : {
        AppHeader,
        AppFooter,
        AppSidebar
    }
}
</script>

<style>

</style>