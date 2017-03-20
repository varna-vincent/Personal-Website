<template>
  <div class="body-area container">
    <div class="content">
      <figure class="image is-256x256">
        <img src="../assets/images/me.jpg">
      </figure>
      <h1 class="about">Hi, I am <strong>Varna Vincent</strong></h1>
      <p>I design and develop for the web and mobile.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about {
  color: #4E3F30;
  font-family: 'Quicksand';
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0px;
  margin-bottom: 30px;
}

p {
  color: #4E3F30;
  font-family: 'Lato';
  font-size: 40px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 30px;
  text-indent: 36px;
}

h1 strong {
  color: #0CA5B0;
}

a, a:hover {
  color: #42b983;
}

figure {
  margin-top: 60px;
  display: inline-block;
}

img {
  border-radius: 120px;
  border: 12px solid #EEE;
}
</style>

