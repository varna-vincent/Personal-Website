<template>
  <div id="app">
    <nav class="nav">
      <div class="container">
        <div class="nav-left">
          <router-link class="nav-item" to="/" exact>
            <h1 class="size-title"><strong>VARNA</strong> VINCENT</h1>
          </router-link>
        </div>
        <div class="nav-right nav-menu">
          <router-link class="nav-item" to="/portfolio" exact>PORTFOLIO</router-link>
          <router-link class="nav-item" to="/resume" exact>RESUME</router-link>
          <router-link class="nav-item" to="/blog" exact>BLOG</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <div class="content has-text-centered">
      <footer>
        <p>
          <a class="icon" href="https://github.com/varna-vincent" target="_blank"><i class="fa fa-github"></i></a>
          <a class="icon" href="https://twitter.com/VarnaVincent" target="_blank"><i class="fa fa-twitter"></i></a>
          <a class="icon" href="https://www.linkedin.com/in/varna-vincent-5b763541" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a class="icon" href="https://www.pinterest.com/varnamvmv/" target="_blank"><i class="fa fa-pinterest"></i></a>
        </p>
        <h6 class="is-small copyrights">Designed and developed by Varna Vincent</h6>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.body-area {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 80vh;
  text-align: center;
}

nav {
  border-bottom: 1px solid #EEE;
  margin-bottom: 10px;
}

.size-title {
  font-size: 1.2em;
  font-family: 'Quicksand';
  color: #4E3F30;
  letter-spacing: 2px;
}

h1 {
  color: #4E3F30;
  font-family: 'Quicksand';
  font-size: 52px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0px;
  margin-bottom: 36px;
}

.router-link-active {
  color: #0CA5B0;
  font-weight: bolder;
}

.copyrights {
  color: #AAA;
}
</style>
