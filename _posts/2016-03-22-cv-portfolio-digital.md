---
layout: post
title: 'Portfolio (Web Apps, APIs, etc.)'
splash: 'splash-cv-portfolio-digital.jpg'
date: 2016-03-22 02:18:42.000000000 -04:00
type: post
published: true
status: publish
order: 1
category:
- cv
- menud
tags:
- apps
meta:
author:
display_name: CCM
first_name: C.C.
last_name: Miller
---


<!-- ******************************* INSTANCE-LEFT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<img class="pull-right" src="/assets/img/noun_768916_cc.svg">
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align:left;font-size:.8em;">
<p>MIT Lincoln Laboratory is a federally-funded research and development center that "applies advanced technology to problems of national security." As such, they take security very seriously and my work there cannot be shown. I can say that my primary objective when I started in 2012 was to build a system for the storage, search, discovery, and delivery of spatial data. Which I did - with <a href="https://www.mongodb.com/">MongoDB</a> and <a href="http://postgis.net/">PostGIS</a> on the back end; <a href="http://lucene.apache.org/solr/">Apache Solr</a>, <a href="http://geoserver.org">GeoServer</a>, <a href="http://geowebcache.org">GeoWebcache</a>, and <a href="https://mapproxy.org">MapProxy</a> in the middle; an API (first in <a href="http://www.slimframework.com">Slim</a>, then <a href="https://nodejs.org">Node</a> that I also consumed with a single-page web app written primarily against <a href="http://backbonejs.com">BackboneJS</a> (but with other fun stuff such as <a href="http://getbootstrap.com">Bootstrap</a>, <a href="http://leafletjs.com">Leaflet</a>, <a href="http://handlebarsjs.com">Handlebars</a>, all that hip stuff). There were numerous third-party APIs and projects in there as well (e.g. the erstwhile <a href="https://www.freebase.com">Freebase</a>, <a href="https://d3js.org">D3.js</a>, <a href="http://open.mapquestapi.com">MapQuest</a>, <a href="https://wiki.openstreetmap.org/wiki/Main_Page">OpenStreetMap</a>, <a href="http://cloudmade.com">CloudMade</a>. The result was pretty, clean, and a success for my sector. But I cannot show it.</p>

<p>Besides, I scrapped it! Designed, as it was, to enable end-users full control over configuring their data payloads, we didn't really account for the fact that most researchers just want *us* to do it for them, and the app was insufficient for that. So in 2019 I rewrote it, this time (delightfully) in <a href="https://vuejs.org">VueJS</a>. I also dropped MongoDB in favor of a <a href="https://ckan.org">CKAN</a> install and I switched the geocoder to a fully in-house <a href="https://nominatim.openstreetmap.org">Nominatim</a> instance. And it's even prettier, with <a href="http://bulma.io">Bulma</a> in lieu of Bootstrap. And every piece of it is <a href="https://www.docker.com">Dockerized</a>, now, even the reverse proxy Nginx that brokers calls to the stack from clients of all kinds from all over the lab.</p>

<p>There are other projects at MITLL, too, that evidence a growing and diversifying skill set - an API in NodeJS that brokers map routing (against data in PostGIS+pgRouting); a web scraper in NodeJS that harvests web targets based on certain semantic requirements; a MongoDB Map/Reduce workflow that summarizes and reports on many millions of archival items; and numerous ad hoc web apps designed to visualize this or that data problem or to deliver data found on behalf of a lab researcher. However these, too, cannot be copied, distributed, or shown off.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->


<!-- ******************************* INSTANCE-RIGHT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>This Site</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-this.jpg"></img>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-right" style="">


<p>This electronic CV was built during <span class="copy-trigger" data-type="gob" data-id="g|1">my commute</span>. It's a <a href="https://jekyllrb.com">Jekyll</a> instance that has been draped over <a href="http://backbonejs.com">BackboneJS</a> with <a href="http://leafletjs.com">Leaflet</a> as the map framework. There is a smattering of smaller other libraries in there, as well (<a href="http://lesscss.org">Less</a>, <a href="http://underscorejs.org">Underscore</a>, <a href="http://handlebarsjs.com">Handlebars</a>, etc.) I chose Jekyll so that I could freely and easily write about my work in Markdown and not worry about formatting and display (or even organization, to some extent).</p>

<p>But Jekyll is static (by design) and I wanted something more dynamic for the mapping piece. Fortunately, it's pretty easy to wrap static Jekyll content in the logic and MVC-ness of Backbone (or Ember or Angular, et al, but I use Backbone). Check it, from App.js:</p>


			<code>\{\% capture posts \%\}
						\[
						\{\% for post in site.categories.menud reversed \%\}
						\{
							"title"    : "\{\{ post.title \}\}",
							"url"      : "\{\{ post.url \}\}",
							"order"      : "\{\{ post.order \}\}",
							"slug"      : "\{\{ post.slug \}\}",
							"splash"      : "\{\{ post.splash \}\}",
							"date"     : "\{\{ post.date | date: "\%B \%d, \%Y" \}\}",
							"content"  : "\{\{ post.content | escape \}\}"
						\} \{\% if forloop.last \%\}\{\% else \%\},\{\% endif \%\}
						\{\% endfor \%\}
						\]
						\{\% endcapture \%\}</code>


<p>...And just like that all of that Jekyll content, front matter intact, is available to do with what we please based on this or that model or method in the GUI. (Although *nota bene* - <a href="http://gulpjs.com">Gulp</a> will squeeze this out of the file so it can't really be minimized into your concatenated app.min.js or whatever). "Hey, genius," you'll note - "why not just build your big, fat JavaScript app and pipe static html files into it?" Well, because then I wouldn't have a full and complete Jekyll site sitting around for super fast re-theming (should I decide to do so) AND because I wouldn't have learned what I did about coupling Jekyll with a webmapping framework (Leaflet) in the way I like Leaflet to operate. Who wants their Leaflet map to reset/refetch/redraw every time you hop from one static Jekyll html to another?</p>

<p>P.S. As with several other projects, map data (commute, the locations of my previous positions, etc.) are hosted in <a href="https://cartodb.com">CartoDB</a>, a cloud spatial database with an easy SQL API. In this particular case the data are prefetched and served statically out of the generated Jekyll dir. If for no other reason than it's easier to work on the T that way.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->



<!-- ******************************* INSTANCE-LEFT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>Only the Lonely: The 6 Loneliest Hubway Bikes of 2016</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="http://cecois.github.io"><img width="100%" class="pull-right" src="/assets/img/splash-cv-portfolio-digital.jpg"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-left" style="">

<p>In Spring 2017, Boston's <a href="https://www.motivateco.com/">Motivate</a>-based bike sharing system, <a href="https://www.thehubway.com/">Hubway</a>, announced a data visualization/analysis contest. My entry, "<a href="http://cecois.github.io">Only the Lonely</a>," <a href="https://www.bostonglobe.com/lifestyle/2017/04/14/how-lonely-are-loneliest-hubway-bikes-one-was-ridden-for-minutes-all-year/3e2jnNIYgLh6CrTmoOPFgJ/story.html">got some press</a> and then <a href="https://www.thehubway.com/blog/2017-datachallenge-winners">won <em>Best Data Narrative</em></a>. The app itself describes <a href="http://cecois.github.io/#about/pencil/out/">how it was built</a>.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->



<!-- ******************************* INSTANCE-RIGHT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>2014 Boston Garbage Atlas</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-garbage-atlas.jpg"></img>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-right" style="">

<p>Not long after the 2017 Hubway Data Challenge, and with just a couple of days to enter, I submitted the "2014 Boston Garbage Atlas" to the <a href="https://data.boston.gov/pages/opendatachallenge">2017 Analyze Boston Open Data Challenge</a>. A serious misnomer, this. It was hardly an "atlas" (although it could become one), and instead I merely grabbed a 2014 feed of "Big Belly" data (solar-powered, communicative garbage compressors all around town) and spatio-temporally mapped their statuses during various ~citywide events such as the <a href="http://garbage.milleria.org/#baa/carto_darkmatter/out/1395577860/-71.08205795288087,42.34785606651052,-71.02330684661867,42.37252735093426">Boston Marathon</a> and <a href="http://garbage.milleria.org/#riot/carto_darkmatter/out/1395577860/-71.08205795288087,42.34785606651052,-71.02330684661867,42.37252735093426">Wine Riot</a>, manually making snarky guesses at their probable contents.
</p>
<p>I didn't win, can you believe that?! My entry was runner-up in the "Telling a Story Through Data" track - I gave a talk at <a href="http://districthallboston.org">District Hall</a> that basically was a cheerleading routine for open data. Worth it.</p>
<p>A little more about the procedure can be found at <a href="http://garbage.milleria.org/#about/carto_darkmatter/out/1395577860/-71.08205795288087,42.34785606651052,-71.02330684661867,42.37252735093426">the app itself</a>, still live.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->



<!-- ******************************* INSTANCE-LEFT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>311 Garbage Bot: Automated Garbage Guesser</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="https://twitter.com/311GarbageBot"><img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-311.jpg"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-left" style="">
<p>
	Following the work I did for the 2017 Analyze Boston Challenge it seemed only appropriate, if not ovious, if not a MORAL IMPERATIVE to make a robot that would run 24/7, guessing the contents of various garbage overflows and litterings throughout the city.
</p>
<p>
	...Which is pretty easy in 4 steps:
	<ol>
<li>Manually add to a <a href="https://cloud.mongodb.com">hosted MongoDB</a> collection some spatially-arranged guesses at what might appear in garbage there.</li>
<li>Write a Node API that reaches into <a href="https://mayors24.cityofboston.gov/open311">Boston's Open311 Instance</a> ('s API) for any new calls having to do with garbage, litter, etc. and shops the location of each against the Mongo collection to find the nearest guess (spatially).</li>
<li>For each, tweet the result from <a href="https://twitter.com/311GarbageBot">an account set up specifically for this</a>.</li>
<li>Trigger the bot with an <a href="https://ifttt.com">IFTT</a> applet that fires to the API (hosted in <a href="https://www.heroku.com">Heroku</a>) every time <a href="https://twitter.com/BOS311x">BOS' 311 Twitter</a> posts</li>
	</ol>
</p>
<p>The time it took putting in guesses to keep it fresh felt...excessive, however, so I shut it down. Worked, though!</p>
</div>
</div> <!-- ******************************* /INSTANCE -->



<!-- ******************************* INSTANCE-RIGHT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>Doctoring</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-marks.jpg"></img>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-right" style="">

<p>
	An odd thing happened in Spring 2017. I became a web doctor for small business owners whose "web developers" had delivered to them unmanageable, un-updatable, and poorly-performing sites with little-to-zero responsivity and got paid for it. And then walked away, of course.
</p>
<p>
	The first of these is <a href="http://wendymarks.com/">WendyMarks.com</a> - a site whose design (and, tbh, content) I don't condone but whose structure was in bad, bad shape. The site was plagued with performance issues. The ultimate cause was that someobody pretty clearly had found a ~single-page application~ template online somewhere and stuffed all of the client's content into it with no regard for navigation, routing, load optimization, style consistency, or responsiveness. Or SEO, probably obviously. Over the course of a couple of weeks I fixed all of these problems, largely preserving the original style as per client's preference.
</p>
<p>Another contract is pending so I won't include it here.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->


<!-- ******************************* INSTANCE-LEFT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>The Clothes I Own</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="http://clothes.milleria.org"><img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-clothes.jpg"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-left" style="">
<p>
If I were a rich man I would be stylish. Instead these are the clothes I've worn over and over and over again for many years. One morning I decided to menagerize them and <a href="http://clothes.milleria.org/">the result</a>, I confess, I've visited more than once because I think it's beautiful and hilarious.
</p>
</div>
</div> <!-- ******************************* /INSTANCE -->


<!-- ******************************* INSTANCE-RIGHT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>CBB BitMap</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="http://cbb.milleria.org"><img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-cbb.png"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-right" style="">

<p>
This takes some explaining. <a href="http://www.earwolf.com/show/comedy-bang-bang/">Comedy Bang! Bang!</a> is a long-form improv comedy podcast that A) is often genius, and B) has developed a considerable canon over the years. It's dear to me, so I did what any red-blooded American stan would do and <a href="http://trainertothestarsseekingstars.org/#huh">built an application</a> that delivers A) every mappable location mentioned on the show, and B) every single recurring bit that occurs throughout its entire 8+ year run. I did it because I love the show and it's legitimately joyful labor. But I include it here because it's not <em>not</em> a successful example of reducing what is actually a pretty complex dataset into manageable units and delivering those data as cleanly as possible.
</p>
<p>
	The thing was originally built with the now-common chain of <a href="http://leafletjs.com">Leaflet</a>, <a href="http://backbonejs.com">Backbone</a>, <a href="http://lucene.apache.org/solr">Solr</a>, and <a href="http://getbootstrap.com">Bootstrap</a>. It <em>used to be</em> hosted on a <a href="https://www.openshift.com">Red Hat OpenShift</a> instance and the location data <em>used to be</em> in <a href="https://cartodb.com/">CartoDB</a>. 
</p>
<p>However...</p>
<p>In Fall 2017 both OpenShift and Carto changed their plans and I bolted. The bits data are still in a hosted <a href="https://www.mongodb.com">MongoDB</a> instance (<a href="https://mlab.com/">mLab</a>), but the geospatials are now in a different Mongo instance (MongoDB's <a href="https://cloud.mongodb.com">Atlas service</a>); they are indexed in <a href="http://elastic.co">ElasticSearch</a> rather than Solr; <a href="http://bulma.io">Bulma</a> is now providing style rather than Bootstrap; oh, and I completely rewrote the GUI in <a href="https://vuejs.org">VueJS</a>.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->



<!-- ******************************* INSTANCE-LEFT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>Dalyverse</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="http://trainertothestarsseekingstars.org"><img width="100%" class="pull-right" src="/assets/img/portfolio-wapp-dv.png"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-left" style="">
<p>
This one also needs some context. Evidently not burdened enough by having to, every week, log the recurring jokes in a 90-minute comedy podcast, I decided to learn some knowledge graph techniques by digitizing the entire canon built up by comedian <a href="https://en.wikipedia.org/wiki/Andy_Daly">Andy Daly</a> over the course of his appearances on various shows over the last decade or so. So, sure, I went back through every appearance of his on Comedy Bang! Bang!, Andy Daly Podcast Pilot Project, Womp it Up, Super Ego, Great American Cabinet of Curiosities, even his one-off on Bajillion Dollar Propertie$. And what I did was simply <em>record every person, place, thing, and event</em> he ever mentioned.
</p>
<p>Then the work began. All of those entities and their relations were imported into an <a href="https://www.arangodb.com">ArangoDB</a> Docker container and sliced up from several angles in order to best illustrate the incredible and meticulous work Daly has done with his characters and their (almost universal) canon over the years.</p>
</div>
</div> <!-- ******************************* /INSTANCE -->


<!-- ******************************* INSTANCE-RIGHT -->
<div class="portfolio-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>Spatial Track</h3><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="max-height:150px;overflow:hidden;">
<a href="http://spatialtrack.milleria.org"><img width="100%" class="pull-right" src="https://dzwonsemrish7.cloudfront.net/items/342D10090E25280z0X37/thumb-spatialtrack.jpg?v=0e5dc5b2"></img></a>
</div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pw-right" style="">
<p>
Another instance where more became less (became more) is my conversion of an old <a href="https://wordpress.org">WordPress</a> blog into a <a href="http://spatialtrack.milleria.org">more svelte and muuuuch faster Jekyll+Leaflet coupling</a>. None of the map plugins for WordPress ever gave enough map, always felt like afterthoughts. When web applications force primary content into little side boxes -- especially map content -- it drives me crazy. Using a custom Leaflet+Jekyll pairing again allows a user to engage the blog copy normally but also allows them to immerse themselves into a full-frame map and access primary content that way, too. More about its guts <a href="http://spatialtrack.milleria.org/this/">at itself</a>. That's a syntactically-legitimate sentence, right?
</p>
</div>
</div> <!-- ******************************* /INSTANCE -->





### Select Older/Offline/Obsolete Work

*At Purdue and Texas A&M International, I was not strictly-speaking in a developer position. I was faculty in both places, charged at TAMIU with developing out library-based spatial data & GIS services and at Purdue with a steeper mission of developing library data services and education to better support and collaborate with other cyberinfrastructure-building projects across campus. It just so happened that effectively _all_ of this work required web-facing development. At times I directed the work of others (post-docs, graduate RAs, and undergrads), but typically I did all of my own authoring.*


* _Spatial Data Catalog Project (MADA@P)_ - Purdue, 2008-2012
	* an open source­-built metadata+data+GUI stack to deliver spatial data
	* built (by me) with [GeoServer](http://geoserver.org) ([MapServer](http://mapserver.org), early on), [OpenLayers](http://openlayers.org), [jQuery](http://jquery.com), on top of a metadata store in [GeoNetwork OpenSource](http://geonetwork-opensource.org) that I re-re-indexed with a [Solr](http://lucene.apache.org/solr).


* _Targeted Metadata Crawler_ - Purdue, 2008-2011
	* web crawler side project that harvested specifically spatial metadata from social data streams
	* design by me, parser written in Java by one of my graduate assistants


* _IsoMAP: Isoscape Modeling, Analysis and Prediction_ - Purdue, 2008-2012
	* spatial data processing and organization workflows
	* web app (in [OpenLayers](http://openlayers.org)) that interfaces with metadata stores, spatial database contents, and TeraGrid job managing software
	* metadata authoring, metadata indexing, and metadata search mechanism
	* I built the spatial component of this NSF-funded cyberinfrastructure project that delivers powerful environmental isotope modeling, analysis, and visualization over the web


* _ISEE: Integrating Spatial Educational Experiences into Crop, Soil, and Environmental Science_ - Purdue, 2008-2012
	* 100s of GBs of soil imagery prepared and delivered to web and other clients (Google Earth) in soil science classrooms


* _Geoinformatics Course_: 2008, 2010
	* graduate-level course taught by me in which geoscientific technologies, data, and workflows are examined and practiced together as irrevocably interrelated pieces of a growing geocyberinfrastructure


* _Spatialized Repository Collections_ - Purdue, 2010-2012
	* a side-project that was building mostly­-automated workflows designed to extract semantically useful placenames and other location data from fulltext scholarly repository documents


* _Automated Georeferencer (PLAutoGeoRef)_ - Purdue, 2010-2012
	* in-house research designed to automate the laborious georeferencing of historic aerial photo collections
	* design and direction by me - processing algorithm by my GA, Jae Sung Kim


* _1906 Soil Survey Resurrection_ - Purdue, 2007­-2008
	* historic map digitization and data extraction ­a 1906 soil survey document was digitized and deposited into the Purdue Libraries institutional repository; its map was further georeferenced and run through a segmentation algorithm (Jae Sung Kim) which helped us pull out real polygonal vector data for use in modern GISs


* _Pilot PTO Dailies_ - Purdue, 2010-2012
	* an automated data publishing workflow incorporates extant library data APIs to push Purdue Terrestrial Observatory remote sensing data to the web