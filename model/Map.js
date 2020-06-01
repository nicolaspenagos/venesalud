var pos;
var map;

function iniciarMap() {
    var coord = {
        lat: 3.3416852,
        lng: -76.5298551
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({

                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                map: map,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }

            });

            map.setCenter(pos);
            coordenadasArray(map, pos);


        }, function () {
            //handleLocationError(true, infoWindow, map.getCenter());
        });

        console.log("Iniciar map");
    } else {
        // Browser doesn't support Geolocation
        //handleLocationError(false, infoWindow, map.getCenter());
    }






    /*
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                                  'Error: The Geolocation service failed.' :
                                  'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
          }
  
         this.coordenadasArray(map); 
      */


}

var markers = [];
var infoWindows = [];
var radius = parseInt(document.querySelector(".gmaps").getAttribute("data-radius"));


function coordenadasArray(map, userPos) {
    var coordenada = [];
    var lat;
    var lng;

    for (let index = 0; index < 87; index++) {
        var coord = {
            lat: helpCenterArray[index].Latitud,
            lng: helpCenterArray[index].Longitud
        };
        coordenada[index] = coord;
        lat = parseFloat(coordenada[index].lat);
        lng = parseFloat(coordenada[index].lng);

        //   console.log(getKilometros(lat, lng, userPos.lat, userPos.lng));

        if (getKilometros(lat, lng, userPos.lat, userPos.lng) < radius) {
            var myLatlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
            //console.log(lng);
            var marker = new google.maps.Marker({

                position: {
                    lat: lat,
                    lng: lng
                },
                map: map,
                title: helpCenterArray[index].name,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }


            });

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">' + helpCenterArray[index].Nombre + '</h1>' +
                '<div id="bodyContent">' +
                '<p>' + helpCenterArray[index].Dirección + '</p>' +
                '<p>' + helpCenterArray[index].Teléfono + '</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            markers.push(marker);

            infoWindows.push(infowindow);

            for (let i = 0; i < markers.length; i++) {
                markers[i].addListener('click', function () {
                    infoWindows[i].open(map, markers[i]);

                });

            }

        }

    }
}

function reloadMarkers() {

    // Loop through markers and set map to null for each
    for (var i = 0; i < markers.length; i++) {

        markers[i].setMap(null);
    }

    // Reset the markers array
    markers = [];
    infoWindows = [];
    radius = parseInt(document.querySelector(".gmaps").getAttribute("data-radius"));

    // Call set markers to re-add markers
    coordenadasArray(map, pos);
}



function getKilometros(lat1, lon1, lat2, lon2) {
    var rad = function (x) {
        return x * Math.PI / 180;
    }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
}

var cardAP = document.getElementById("cardAP");

console.log(cardAP);

cardAP.onclick = function goMap() {
    document.querySelector(".gmaps").style.display = "block";
    document.querySelector(".gmaps").dataset.radius = '100';
    reloadMarkers();
    document.querySelector(".initialScreen").style.display = "none";
}


var gmapsBtn = document.querySelector(".gomap");


var goMap2 = function () {
    document.querySelector(".gmaps").style.display = "block";
    document.querySelector(".gmaps").dataset.radius = '3';
    reloadMarkers();
    document.querySelector(".disease").style.display = "none";
}


document.getElementById('goToMapFromDisease').addEventListener('click', goMap2)