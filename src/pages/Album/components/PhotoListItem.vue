<template>
  <li>{{ title }}</li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String
  }
}
</script>

<style>
ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
}
</style>