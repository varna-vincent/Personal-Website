<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Current Work
          </h1>
          <div class="content">
            <a href="">
              <h4 class="subtitle">
                GlamUp
              </h4>
              <figure class="image is-128x128">
                <img src="https://s-media-cache-ak0.pinimg.com/736x/f2/ac/50/f2ac503f971dd2888d7ccb1079f0dfb5.jpg">
                <figcaption> React, React-Native, Firebase </figcaption>
              </figure>
            </a>
            <p>Mobile app that tells you everything about the latest makeup products</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Previous Work
          </h1>
          <ul>
            <li>
              <div class="content">
                <a href="https://github.com/varna-vincent/NumberSense">
                  <h4 class="subtitle">
                    Number Sense
                  </h4>
                  <figure class="image is-128x128">
                    <img src="http://www.publicdomainpictures.net/pictures/170000/velka/little-boy-with-abacus-1463679162k8p.jpg">
                    <figcaption> Vue, SVG, HTML5, Bulma </figcaption>
                  </figure>
                </a>
                <p>Interactive game to help develop your number sense</p>
              </div>
            </li>
            <li>
              <div class="content">
                <a href="">
                  <h4 class="subtitle">
                    XML to Pojo
                  </h4>
                  <figure class="image is-128x128">
                    <img src="https://static.pexels.com/photos/207580/pexels-photo-207580.jpeg">
                    <figcaption> Java, XML, Bootstrap </figcaption>
                  </figure>
                </a>
                <p>A tool to generate Pojo classes from XML</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
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
h1, h2, h4 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a, a:hover {
  color: #42b983;
}

figure {
  display: inline-block;
}

img {
  border-radius: 40px;
}

.subtitle {
  color: #7588a5;
}
</style>

