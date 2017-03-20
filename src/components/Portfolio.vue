<template>
  <div class="body-area container">
    <div class="content">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="about">
            PROJECTS
          </h1>
          <div class="columns">
            <div class="column">
              <a href="https://number-sense.herokuapp.com" target="_blank">
                <h2 class="project-title">Number Sense</h2>
                <figure class="image is-128x128">
                  <img src="http://www.publicdomainpictures.net/pictures/170000/velka/little-boy-with-abacus-1463679162k8p.jpg">
                  <figcaption> Vue, SVG, HTML5 </figcaption>
                </figure>
              </a>
              <p>Interactive game to help develop <br/> your number sense</p>
            </div>
            <div class="column">
              <a href="https://github.com/varna-vincent/NumberSense" target="_blank">
                <h2 class="project-title">GlamUp</h2>
                <figure class="image is-128x128">
                  <img src="https://s-media-cache-ak0.pinimg.com/736x/f2/ac/50/f2ac503f971dd2888d7ccb1079f0dfb5.jpg">
                  <figcaption> React-Native, Firebase </figcaption>
                </figure>
              </a>
              <p>Mobile app that tells you everything about <br/> the latest makeup products</p>
            </div>
            <div class="column">
              <a href="https://github.com/varna-vincent/NumberSense" target="_blank">
                <h2 class="project-title">XML to Pojo</h2>
                <figure class="image is-128x128">
                  <img src="https://static.pexels.com/photos/207580/pexels-photo-207580.jpeg">
                  <figcaption> Java, Bootstrap </figcaption>
                </figure>
              </a>
              <p>A tool to generate Pojo classes from XML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about {
  color: #0CA5B0;
  font-family: 'Quicksand';
  font-size: 50px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0px;
  margin-bottom: 50px;
}

h1, h2, .project-title {
  color: #4E3F30;
  font-family: 'Lato';
  font-weight: normal;
}

p {
  color: #4E3F30;
  font-family: 'Lato';
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-indent: 36px;
  word-wrap: break-word;
}

figure {
  display: inline-block;
}

img {
  border-radius: 120px;
  border: 12px solid #EEE;
}

a, a:hover {
  color: #0CA5B0; 
  text-decoration: none;
}
</style>

