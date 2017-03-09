<template>
	<div class="body-area container">
	  <section class="hero">
		  <div class="hero-body text">
	      <h1 class="title">Function Expression vs Function Declaration</h1>
	      <h2 class="subtitle">
	      	I had previously thought <code>function functionName() {}</code> was syntactic sugar for 
	      	<a href="http://varnastechreflection.blogspot.com/" target="_blank">Read More</a>
	      </h2>
		  </div>
	  </section>
	  <section class="hero">
		  <div class="hero-body text">
	      <h1 class="title">Lorem Ipsum</h1>
	      <h2 class="subtitle">
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
	      	<a href="http://varnastechreflection.blogspot.com/" target="_blank">Read More</a>
	      </h2>
		  </div>
	  </section>
	  <section class="hero">
		  <div class="hero-body text">
	      <h1 class="title">de Finibus Bonorum et Malorum</h1>
	      <h2 class="subtitle">
	        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
	      	<a href="http://varnastechreflection.blogspot.com/" target="_blank">Read More</a>
	      </h2>
		  </div>
	  </section>
  	</div>
</template>
<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
	text-align: justify;
	margin-left: 0.5rem;
}

h1, h2 {
  color: #4E3F30;
  font-family: 'Lato';
  font-weight: normal;
}

code {
	font-style: italic;
	color: #4E3F30;
	margin: 0px 4px;
}

a, a:hover {
  color: #0CA5B0; 
  text-decoration: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 0.9em;
}
</style>
