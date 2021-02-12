<template>
  <div >
    <div class="content">

      <h1>{{ university.name.toUpperCase() }}</h1>
      
      <div class="description">
        <div class="description-header"> 
          <img :src="university.img">
        <div>{{ university.description }} </div>
        </div>
        
      </div>

      <div class="courses">
        <h3>Courses</h3>
        <div v-for="course in university.courses" v-bind:key="course.name">
          {{course.name}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'University',
  data() {
    return {
      university: {}
    }
  },
  created() {
    const id = this.$route.params.id;
    console.log(id)
    this.university = this.$root.$data.universities[id];
    console.log(JSON.stringify(this.university,null, 2));
  }
}
</script>

<style scoped>

img {
  width: 15%;
  border: 1px solid yellowgreen;
}
.content {
  text-align: center;
}

.description {
  border: 1px solid red;
  margin: auto;
}

.description-header {
  display: flex;
  justify-content: center;
  padding: 8px 0px;
}

.description-header div {
  border: 1px solid red;
  padding:12px;
  width: 40%;
  align-self: center;
}

.courses {
  margin: auto;
  padding-top: 32px;
  border: 1px solid blue;
  width: 100%;
}

</style>
