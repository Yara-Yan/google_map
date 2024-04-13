# google_map
JavaScript Google Maps API 

STEPS
1. go to google documentation/maps javascript API
https://developers.google.com/
copy: overview/inline loading
<script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&loading=async&callback=initMap">
</script>


2. go to console.developer.google.com
https://console.cloud.google.com/
create a new project
Create API key
go to credentials

3. go to VS code, create a single marker and info window
(1)create a new folder: maptest
index.html
style.css
app.js
using live server, whenever I save my work, it reloads my html page, don't need to reload it mannually

(2) insert the code code to html file with API keys
 <script async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDo1xjThWUj_LShYQ4rB-45DVlLgsBB8iY&loading=async&callback=initMap">
        </script>
        
Q: what is API?
API stands for Application Programming Interface.
It is a set of rules or protocols that enables software applications to communicate with each other to exchange data, features and functionality.

callback=initMap ---- means we need to create a function called initMap, to make Google Map show up

(3) create a script source and link it our javascript page
 <script src="/app.js"></script>
 
 (4) in js file, create a function initMap
 before function, create a <div>
 <div id="map"></div>
 This is where google map is going to show up
 
 (4) add style.css
 <link rel="stylesheet" href="/style.css">
 
 Remember enable Google Maps JavaScript API in GCP
 
 https://www.youtube.com/watch?v=uPhWSyRqQDA
 14:00 enable billing
 
 Zoom: higher number, the map would be bigger, see closer location, the lower, the smaller, the far locations
 
 (4) add a marker
 add const marker in app.js
 
 (5) create custom icon
 add icon in const marker in app.js
 Q: how to get the icon url?
 
 (6)create info window
  // info window
    const detailwindow = new google.maps.InfoWindow({
        content: "<h2>Bedford City</h2>"
    })

    marker.addListener("mouseover", () =>{
        detailwindow.open(map, marker);
    })
    
  "click" or "mouseover"
 
 4. create mutiple marker
 Comment single marker part (marker part /* ... */)
 
 Q: how to get the specific places' longitude and latitudes on Google Map?
 
 Change the icon and infowindow
 
 5. create markers manually on the map
 
 
