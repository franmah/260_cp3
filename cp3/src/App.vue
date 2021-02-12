<template>
<div id="app">
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><router-link to="/">RateMyCourse</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Universities
            </div>
            <div  class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a v-for="university in universities" v-bind:key="university.id" class="dropdown-item">
                <router-link :to="{ name: 'University', params: { id: university.id }}">{{university.name}}</router-link></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      universities: this.$root.$data.universities,
    }
  }
}
</script>

<style>
.menu {
  margin-bottom: 32px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
