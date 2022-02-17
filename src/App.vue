<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/album">Album</router-link> |
    <router-link to="/post">Post</router-link> |
    <router-link to="/user">User</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
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
