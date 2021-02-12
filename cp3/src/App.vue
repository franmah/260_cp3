<template>
<div id="app">
    <Navbar/>
    <router-view class="router"/>
    <footer>
      <a href="">Github</a>
    </footer>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.router {
  min-height: 80vh;
}

footer {
  text-align: right;
  background-color: #ADADAD;
}

footer a {
  margin-right: 32px;
  font-size: x-large;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
