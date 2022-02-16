<template>
  <div class="column">
    <div class="card">
      <!-- <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> -->
      <div class="container">
        <h2>{{ this.name }}</h2>
        <p class="title">{{ this.company.name }} & {{ this.company.catchPhrase }}</p>
        <p>{{ this.address.street }} {{ this.address.suite }} {{ this.address.city }} {{ this.address.zipcode }}</p>
        <p>{{ this.email }}</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: Object,
    company: Object,
    email: String,
    id: Number,
    name: String,
    phone: String,
    username: String,
    website: String,
  }
}
</script>

<style>
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>