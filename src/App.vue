<template>
  <div id="app">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item">
            <h1 class="title">Varna Vincent</h1>
          </a>
        </div>

        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" 
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>-->

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu">
          <router-link class="nav-item" to="/">Portfolio</router-link>
          <router-link class="nav-item" to="/resume">Resume</router-link>
          <router-link class="nav-item" to="/blog">Blog</router-link>
        </div>
      </nav>

      <router-view></router-view>

      <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <a class="icon" href="https://github.com/varna-vincent" target="_blank"><i class="fa fa-github"></i></a>
              <a class="icon" href="https://twitter.com/VarnaVincent" target="_blank"><i class="fa fa-twitter"></i></a>
              <a class="icon" href="https://www.linkedin.com/in/varna-vincent-5b763541" target="_blank"><i class="fa fa-linkedin"></i></a>
              <a class="icon" href="https://www.pinterest.com/varnamvmv/" target="_blank"><i class="fa fa-pinterest"></i></a>
            </p>
          </div>
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
  margin-top: 60px;
}
</style>
