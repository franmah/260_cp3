<template>
<div class="main">
  <div class="content">
    <div class="intro card">
      <h1>Let other students know about a course you took in university</h1>
    </div>

    <div class="vertical-line"></div>

    <div class="info card">
      <h2>Why Rate a Course?</h2>
      <p>
        While a professor can make a tremendous difference in the way a course is taught, most courses have core features that do not change.
        For example, the content of a course, how much work is required, how interesting or useful it is might not change depending on the professor.
      </p>
      <p>
        With RateMyCourse you can give an opinion about a course (and a professor), but also search through other students comments. 
        You will be better able to pick courses that might interest you. It will also help you come up with a better plan for your next semester.
        If you find out that a course is more difficult or require more work, you can adadpt your schedule and pick other courses that might be easier.
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  background-color: #A68376;
  border: 1px solid #A68376;
  padding-bottom:100px;
}

.content {
  margin-top: 10%;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.intro {
  width: 40%;
  padding: 12px;
}

.intro h1 {
  margin-top: 10%;
}

.vertical-line {
  border-left: 2px solid #491E1E;
}

.info {
  width: 50%;
  padding: 16px;
}
.info p {
  margin: 18px 8px;
}

</style>
