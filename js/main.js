// initialize and add the map

function initMap(){
    // location lat & long 
    const loc = {lat: 42.501513, lng: -83.084703};
    // centered map on location

    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom:14,
        center: loc
    });
    // the marker, positioned at location
    const marker = new google.maps.Marker(
        {
            position: loc, 
            map: map
        });
}

