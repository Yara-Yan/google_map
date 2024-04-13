function initMap(){
    // map option
    var options = {
        center: {lat: 44.6476 , lng: -63.5728 },
        zoom: 10
    }
    // new map
    map = new google.maps.Map(document.getElementById('map'),options);

    // listen for click on map location
    google.maps.event.addListener(map, "click", (event)=>{
        // add marker
        addMarker({location:event.latLng});
    }
)


    // marker
/*
    const marker = new google.maps.Marker({
        position:{lat: 44.7234, lng: -63.6900},
        map:map,
        icon:"https://github.com/Yara-Yan/google_map/assets/138326473/d95a2476-bd02-482e-ab7e-8c7aefdf23e2"
    });

    // info window
    const detailwindow = new google.maps.InfoWindow({
        content: "<h2>Bedford City</h2>"
    })

    marker.addListener("mouseover", () =>{
        detailwindow.open(map, marker);
    })
*/

    // add makers to array

    let MarkerArray = [
        {location: {lat: 44.7234, lng: -63.6900},
        imageIcon:"https://github.com/Yara-Yan/google_map/blob/main/icons-map-maker-1.png?raw=true",
        content:"<h2>Bedford City</h2>"},

        {location: {lat: 44.6661, lng: -63.5676},
        imageIcon: "https://github.com/Yara-Yan/google_map/blob/main/icons-map-maker-2.png?raw=true"},

        {location: {lat: 44.7764, lng: -63.6776}}
    ]


    // iterate the markerarray
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);
    }



    // add marker
    function addMarker(property){
        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon:property.imageIcon
        });

        // check for cutomer Icon, otherwise it would return undefined
        if(property.imageIcon){
            // set the image icon
            marker.setIcon(property.imageIcon)
        }

    

        // check for indo window
        if(property.content){

            const detailwindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener("mouseover", () =>{
                detailwindow.open(map, marker);
            })
        }

        

    }

/*
    addMarker({location: {lat: 44.7234, lng: -63.6900},
    imageIcon:"https://github.com/Yara-Yan/google_map/assets/138326473/d95a2476-bd02-482e-ab7e-8c7aefdf23e2",
    content:"<h2>Bedford City</h2>"});
    addMarker({location: {lat: 44.6661, lng: -63.5676}});
    addMarker({location: {lat: 44.7764, lng: -63.6776}});
*/

}