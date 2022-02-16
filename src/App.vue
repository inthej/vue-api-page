<template>
  <app-header></app-header>
  <user-page></user-page>
</template>

<script>
import AppHeader from './pages/User/components/AppHeader.vue'
import UserPage from './pages/User/UserPage.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    UserPage,
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
</style>
