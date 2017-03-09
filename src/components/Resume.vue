<template>
	<div class="body-area container">
	  <div class="content">
	  	<div class="section">
			<a class="button is-primary" href="/static/Resume.pdf" download="Varna_Resume.pdf">
	          <span class="icon">
	            <i class="fa fa-download"></i>
	          </span>
	          <span>Resume</span>
	        </a>
        </div>
       <p class="hero">
        An ace web developer with four years experience in extensive web and mobile application development in vacation rental, product distribution and healthcare domains. Known for strong technical, analytical and organizational abilities. Excellent team player with strong work ethic and personal integrity. Strong technical expertise in the latest web and mobile technologies and comfortable following the agile practices.</p>
       <div class="section columns">
       	<div class="column">
       		<h2 class="project-title">SKILLS</h2>
       		<ul>
		    	<li><strong>Strong: </strong>Core Java, Javascript, VueJs</li>
		    	<li><strong>Intermediate: </strong>AngularJS, Git, HTML5, Ionic framework, Apache Camel, REST, SOAP Webservices, MongoDB, MySQL, XML, XSLT, AJAX</li>
		    	<li><strong>Familiar: </strong>Spring, Oracle, Maven</li>
		    </ul>
       	</div>
       	<div class="column">
       		<h2 class="project-title">EXPERIENCE</h2>
       		<ul>
			  	<li>
			  		<strong>Software Developer</strong> at Nibodha Technologies Pvt Ltd from <em>Mar 15 Jul 16</em> 
			  		Projects - Acer, HealthFabric, Data Scrapper
			  	</li>
			  	<li>
			  		<strong>Software Engineer</strong> at Zerone Consulting Pvt Ltd from <em>Aug 12 Mar 15</em> <br/>
			  		Projects - SOS, Mobile Insight, Always On Vacation and Care Services
			  	</li>
		  	</ul>
       	</div>
       	<div class="column">
       		<h2 class="project-title">EDUCATION</h2>
       		<ul>
		    	<li>Currently pursuing <strong>Masters Program in Software Engineering </strong> at Santa Clara University, CA</li>
		    	<li><strong>BTech in Computer Science and Engineering </strong>from TocH Institute of Science and Technology, India</li>
		    </ul>
       	</div>
       </div>
      </div>
	</div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2, h4, .project-title {
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
  text-align: justify;
  word-wrap: break-word;
  margin-left: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #4E3F30;
  font-family: 'Lato';
  font-size: 1.1em;
  text-align: justify;
  margin: 0 10px;
}

li strong {
  color: #0CA5B0;
}
</style>
