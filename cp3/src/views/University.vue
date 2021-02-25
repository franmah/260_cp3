<template>
    <div class="content" :style="{'background-color': university.main_color}">

    <img :src="university.img">
    <div class="main">
      <div class="description card card-body">
            <h1>{{ university.name.toUpperCase() }}</h1>
            <p>{{ university.description }} </p>
      </div>

    <div class="courses card card-body">
        <div class="card-body">
          <h3>Courses</h3>
          <div v-for="course in university.courses" v-bind:key="course.name">
            <router-link :to="{ name: 'Course', params: { uni_id: university.id, course_id: course.id }}">{{course.name.toUpperCase()}}: {{course.full_name}}</router-link>
          </div>
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
  },
}
</script>

<style scoped>

img {
  width: 15%;
  padding: 32px 0px;
}
.content {
  text-align: center;
}

.main {
  display: flex;
  justify-content: center;
}

.description {
  margin: 0px 24px;
  width: 50%;
}

.courses {
  margin: 0px 24px;
  width: 20%
}

</style>
