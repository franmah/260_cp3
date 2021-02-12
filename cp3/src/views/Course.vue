<template>
<div>
  <div class="content" :style="{'background-color': university.main_color}">
    <div class="info-section">
      <div class="basic-info">
        <h1>{{course.name.toUpperCase()}}</h1>
        <h3>{{course.full_name}}</h3>
        <p>{{course.description}}</p>
      </div>

      <div class="vertical-line" :style="{'border-color': university.main_color}"></div>

      <div class="sup-info">
        <h3>Information</h3>
        <ul>
          <li>Credits: {{course.credits}}</li>
          <li>Rating: {{course.rating}}/10</li>
          <li>Professors: {{professors}}</li>
        </ul>
      </div>

    </div>

     <div class="comment-section">
       <div class="card" v-for="comment in course.comments" v-bind:key="comment.author">
          <div class="card-body">
            <h5 class="card-title">Author: {{comment.author}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Professor: {{comment.professor}}</h6>
            <p class="card-subtitle mb-2 text-muted">Rating: {{comment.rating}}</p>
            <p class="card-text">{{comment.content}}</p>
          </div>
       </div>

       <div class="card">
         <div class="card-body form">
          <input type="text" placeholder="author" v-model="author">
          <input type="text" placeholder="professor" v-model="professor">
          <input type="text" placeholder="rating" v-model="rating">
          <textarea type="text" placeholder="comment" v-model="content"></textarea>
          <button type="submit" @click.prevent="addComment">Add Comment</button>
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
      course: {},
      university: {},
      author: '',
      professor: '',
      rating: '',
      content: ''
    }
  },
  methods: {
    addComment() {
      console.log("Add comment");
      this.$root.$data.universities[this.university.id].courses[this.course.id].comments.push({
        author: this.author,
        professor: this.professor,
        rating: this.rating,
        content: this.content
      })
      this.author = '';
      this.professor = '';
      this.rating = '';
      this.content = '';
    }
  },
  computed: {
    professors() {
      return this.course.professors.reduce((total, professor) => total += ', ' + professor);
    }
  },
  created() {
    const universityId = this.$route.params.uni_id;
    const courseId = this.$route.params.course_id;
    console.log(universityId + " " + courseId)
    this.university = this.$root.$data.universities[universityId];
    this.course = this.university.courses[courseId];
  }
}
</script>


<style scoped>
.info-section {
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 24px 0px;
}

.basic-info {
  text-align: center;
  width: 60%;
  padding-right: 32px;
}

.sup-info {
  padding-left: 32px;
  width: 25%;
}

.comment-section {
  padding: 32px 32px;

}

.vertical-line {
  margin: 8px 0px;
  border-left: 2px solid;
}

.card {
  margin-bottom: 24px;
}

.form {
  width: 25%;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.form input, textarea {
  margin-bottom: 8px;
}



</style>
