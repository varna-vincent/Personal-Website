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
<!--
	<div class="content">
		<p>
			<a class="button is-primary">
	          <span class="icon">
	            <i class="fa fa-download"></i>
	          </span>
	          <span>Download</span>
	        </a>
        </p>
        <div>
		  <article class="media">
		    <div class="media-left">
		      <figure class="image is-96x96">
		        <img :src="'/static/me.jpg'">
		      </figure>
		    </div>
		    <div class="media-content">
		      <div class="content">
		        <p>
		          <strong>Varna Vincent</strong> <small>@varnavincent</small> <small>31m</small>
		          <br>
		          An ace web developer with four years experience in extensive web and mobile application development in vacation rental, product distribution and healthcare domains. Known for strong technical, analytical and organizational abilities. Excellent team player with strong work ethic and personal integrity. Strong technical expertise in the latest web and mobile technologies and comfortable following the agile practices.

		        </p>
		      </div>
		    </div>
		  </article>

        <!--
		  <p>
		  <div class="tile is-ancestor">
			  <div class="tile is-5 is-vertical is-parent">
			    <div class="tile is-child">
			      <article class="message is-primary">
					  <div class="message-header">
					    <p>SKILLS</p>
					  </div>
					  <div class="message-body">
					    <ul>
					    	<li><strong>Strong: </strong>Core Java, Javascript, VueJs</li>
					    	<li><strong>Intermediate: </strong>AngularJS, Ionic framework, Git, HTML5, REST, SOAP Webservices, Apache Camel, MongoDB, MySQL, XML, XSLT, AJAX</li>
					    	<li><strong>Familiar: </strong>Spring, Oracle, Maven</li>
					    </ul>
					  </div>
					</article>
			    </div>
			    <div class="tile is-child">
			      <article class="message is-primary">
					  <div class="message-header">
					    <p>EMPLOYMENT</p>
					  </div>
					  <div class="message-body">
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
					</article>
			    </div>
			    <div class="tile is-child">
			    	<article class="message is-primary">
					  <div class="message-header">
					    <p>EDUCATION</p>
					  </div>
					  <div class="message-body">
					    <ul>
					    	<li>Currently doing<strong>MS in Software Engineering </strong>Santa Clara University, CA</li>
					    	<li><strong>BTech in Computer Science and Engineering </strong>from TocH Institute of Science and Technology, India</li>
					    </ul>
					  </div>
					</article>
			    </div>
			    <div class="tile is-child">
			    	<article class="message is-primary">
					  <div class="message-header">
					    <p>PERSONAL INFO</p>
					  </div>
					  <div class="message-body">
					  	<ul>
						  	<li><strong>Birthday: </strong> 27 November, 1990</li>
						  	<li><strong>Email: </strong> <a>varnamvmv@gmail.com</a></li>
						  	<li><strong>Website/Blog: </strong> <a>varnavincent.com</a></li>
						  	<li><strong>Github: </strong><a class="icon" href="https://github.com/varna-vincent" target="_blank"><i class="fa fa-github"></i></a></li>
						  	<li><strong>Linkedin: </strong><a class="icon" href="https://www.linkedin.com/in/varna-vincent-5b763541" target="_blank"><i class="fa fa-linkedin"></i></a></li>
					  	</ul>
					  </div>
					</article>
			    </div>
			  </div>
			  <div class="tile is-parent">
			    <div class="tile is-child">
			      <article class="message is-primary">
					  <div class="message-header">
					    <p>PROJECTS</p>
					  </div>
					  <div class="message-body">
					  	<ul>
						  	<li>
						  		<strong>Care Services [May 2016 –  July 2016]</strong>
						  		<p>Developed the mobile app that helps the general practitioner to find nearby community services for patients. Tools used: AngularJs, Ionic Framework, Firebase, Git</p>
						  	</li>
						  	<li>
						  		<strong>Always On Vacation [January 2016 –  May 2016]</strong> 
						  		<p>As part of the API Integration team, I contributed to developing a framework for bulk data processing called Databridge; exposed REST APIs to various distributors and integrated modules from many vacation rental property suppliers. Tools used: Core Java, Maven, Apache Camel, Jenkins, Spring, MongoDB, MySql, Oracle, Git</p>
						  	</li>
						  	<li>
						  		<strong>Mobile Insight [October 2015 –  December 2015]</strong> 
						  		<p>Developed a highly scalable messaging module. Tools used: Core Java, Maven, Git, Jenkins, Spring</p>
						  	</li>
						  	<li>
						  		<strong>SOS [March 2015 –  September 2015]</strong> 
						  		<p>Developed a responsive admin website, a tablet app for the SWAT team  and authorities of an organization and also a cross-platform mobile app for the employees in an organization; to be used in the event of a catastrophe. Tools used: Angularjs, javascript, Parse db, Ionic framework, Bootstrap, Grunt, Yeoman</p>
						  	</li>
						  	<li>
						  		<strong>HealthFabric - SugarCRM Integration [November 2014 –  March 2015]</strong>
						  		<p>Assisted in the development of an application to integrate HealthFabric, a healthcare module and SugarCRM, a customer relationship management system. Have moderate expertise in development of the switchyard application routing web services between HealthFabric and SugarCRM. Tools Used: Switchyard, JBOSS, REST, SOAP webservices, Core Java, Maven</p>
						  	</li>
						  	<li>
						  		<strong>HealthFabric - Tablet [November 2014 –  March 2015]</strong> 
						  		<p>Developed a tablet based solution, allowing patients to record their own health and social care information. Tools Used: HTML, CSS, Javascript, jQuery, Ajax, SQLite DB</p>
						  	</li>
						  	<li>
						  		<strong>Acer Web Development [May 2013 – August 2014]</strong> 
						  		<p>Enhanced ACER’s Australian site for their distributers and retailers. Developed additional modules and enhanced existing modules to facilitate & collaborate the Claim process between Acer’s customers and distributors. Tools used: Java, Servlets, Spring 2.0, XML, XSLT, Oracle db, Maven, JBOSS server, HTML, Javascript, jQuery, AJAX</p>
						  	</li>
						  	<li>
						  		<strong>Data Scrapper [August 2012 –  December 2012]</strong>
						  		<p>Involved in a team of five, in extracting data from various healthcare congress meeting abstracts. Tools used: Microsoft Excel 2013, VBA, Macro</p>
						  	</li>
					  	</ul>
					  </div>
					</article>
			    </div>
			  </div>
			</div>
		  </p>
		  -->
		  <!--
		  <p>
		  <div class="columns">
		  	<div class="column">
		  		<article class="message is-primary">
				  <div class="message-header">
				    <p>SKILLS</p>
				  </div>
				  <div class="message-body">
				    <ul>
				    	<li><strong>Strong: </strong>Core Java, Javascript, VueJs</li>
				    	<li><strong>Intermediate: </strong>AngularJS, Ionic framework, Git, HTML5, REST, SOAP Webservices, Apache Camel, MongoDB, MySQL, XML, XSLT, AJAX</li>
				    	<li><strong>Familiar: </strong>Spring, Oracle, Maven</li>
				    </ul>
				  </div>
				</article>
			</div>
			<div class="column">
				<article class="message is-primary">
				  <div class="message-header">
				    <p>EMPLOYMENT</p>
				  </div>
				  <div class="message-body">
				  	<ul>
				  	<li>
				  		<strong>Software Developer</strong> at Nibodha Technologies Pvt Ltd from <em>Mar 15 Jul 16</em> 
				  		Projects - Acer, HealthFabric
				  	</li>
				  	<li>
				  		<strong>Software Engineer</strong> at Zerone Consulting Pvt Ltd from <em>Aug 12 Mar 15</em> <br/>
				  		Projects - SOS, Mobile Insight, Always On Vacation and Care Services
				  	</li>
				  	</ul>
				  </div>
				</article>
			</div>
		  </div>
		  </p>
		  <p>
		  <article class="message is-primary">
			  <div class="message-header">
			    <p>PROJECTS</p>
			  </div>
			  <div class="message-body">
			  	<ul>
				  	<li>
				  		<p class="title is-4"><strong>Care Services</strong></p>
				  		<p class="subtitle">May 2016 –  July 2016</p>
				  		<p>Mobile app that helps the general practitioner to find nearby community services for patients. Tools used: AngularJs, Ionic Framework, Firebase, Git</p>
				  	</li>
				  	<li>
				  		<strong>Always On Vacation [January 2016 –  May 2016]</strong> 
				  		<p>Contributed to developing a framework for bulk data processing, exposed REST APIs and integrated modules from suppliers. Tools used: Core Java, Maven, Apache Camel, Jenkins, Spring, MongoDB, MySql, Oracle, Git</p>
				  	</li>
				  	<li>
				  		<strong>Mobile Insight [October 2015 –  December 2015]</strong> 
				  		<p>Developed a highly scalable messaging module. Tools used: Core Java, Maven, Git, Jenkins, Spring</p>
				  	</li>
				  	<li>
				  		<strong>SOS [March 2015 –  September 2015]</strong> 
				  		<p>Developed a responsive admin website, a tablet app for the SWAT team and a cross-platform mobile app for the employees in an organization; to be used in the event of a catastrophe. Tools used: Angularjs, javascript, Parse db, Ionic framework, Bootstrap, Grunt, Yeoman</p>
				  	</li>
				  	<li>
				  		<strong>HealthFabric - Tablet [November 2014 –  March 2015]</strong> 
				  		<p>Developed a tablet based solution, allowing patients to record their own health and social care information. Tools Used: HTML, CSS, Javascript, jQuery, Ajax, SQLite DB</p>
				  	</li>
				  	<li>
				  		<strong>Acer Web Development [May 2013 – August 2014]</strong> 
				  		<p>Enhanced ACER’s Australian site for their distributers and retailers. Developed additional modules and enhanced existing modules to facilitate & collaborate the Claim process between Acer’s customers and distributors. Tools used: Java, Servlets, Spring 2.0, XML, XSLT, Oracle db, Maven, JBOSS server, HTML, Javascript, jQuery, AJAX</p>
				  	</li>
			  	</ul>
			  </div>
			</article>
			</p>
			<p>
			  <div class="columns">
			  	<div class="column">
			  		<article class="message is-primary">
					  <div class="message-header">
					    <p>EDUCATION</p>
					  </div>
					  <div class="message-body">
					    <ul>
					    	<li><strong>MS in Software Engineering </strong>Santa CLara University, CA</li>
					    	<li><strong>BTech in Computer Science and Engineering </strong>from TocH Institute of Science and Technology, India</li>
					    </ul>
					  </div>
					</article>
				</div>
				<div class="column">
					<article class="message is-primary">
					  <div class="message-header">
					    <p>PERSONAL INFO</p>
					  </div>
					  <div class="message-body">
					  	<ul>
					  	<li>
					  		<strong>Birthday: </strong> 27 November, 1990
					  	</li>
					  	<li>
					  		<strong>Email: </strong> <a>varnamvmv@gmail.com</a>
					  	</li>
					  	<li>
					  		<strong>Website:</strong> <a>varnavincent.com</a>
					  	</li>
					  	</ul>
					  </div>
					</article>
				</div>
			  </div>
			  </p>
		</div>
	</div>-->

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
