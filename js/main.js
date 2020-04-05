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

// sticky menu background

window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }

});

// smooth scrolling

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
})