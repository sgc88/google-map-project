
function initMap(){
  //map options
  var options={
    zoom:8,
    center:{lat:37.892196, lng:-122.519531}
  }

  //new map
  var map=new google.maps.Map(document.getElementById("map"), options);

  //LISTEN FOR CLICK ON MAP

  google.maps.event.addListener(map, "click", function(event){
    //add marker each time the user clicks on the map
    addMarker({coords: event.latLng});

  });
  // add a new marker

  // array of markers
  var markers = [

    {
      coords:{lat:37.335224, lng:-121.816406},
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' ,
      content:'<h1>San Jose</h1>',

    },


    {
      coords:{lat:37.7718, lng:-122.401428},
      content: '<h1>San Francisco</h1>',
    },


    {
      coords:{lat:37.859134, lng:-122.491379},
      content:'<h1>Sausalito</h1>',
    },

  ];

  for(var i=0; i< markers.length; i++){
    addMarker(markers[i]);
  }


  // add marker function

  function addMarker(props){
    var marker = new google.maps.Marker({
      //add marker
    position:props.coords,
    map: map,
    //icon:props.iconImage,
    });

    //CHECK FOR CUSTOM ICON
    if(props.iconImage){
      //SET ICON IMAGE
      marker.setIcon(props.iconImage);


    }

    //CHECK FOR content
    if(props.content){
      var infoWindow= new google.maps.InfoWindow({
        content:props.content
      });


      marker.addListener("click", function(){
        infoWindow.open(map, marker);
      });
    }


  }


}
