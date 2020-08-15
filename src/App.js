import React, { useState, useEffect, forwardRef } from "react";
import './App.css';

import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import{
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

import Geocode from "react-geocode";

import mapStyles from "./mapStyles";
import originalList from "./originalList";
import $ from 'jquery';

import db from "./firebase";



const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "60vh",
};
const center = {
  lat: 37.6872,
  lng: 97.3301,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Reverse geo-coding all of the original list and adding to database

// console.log(originalList.length);

// for(let i = 110; i < 141; i++){
//   let curr = originalList[i];
  
//   const latlng = {
//     lat: parseFloat(curr.lat),
//     lng: parseFloat(curr.long)
//   };

//   Geocode.setApiKey("AIzaSyAkQaHkO5f2LymmHzYD0bAcAxj6h9a2kMU");

//   Geocode.setLanguage("en");
//   var wholeCityname = "";

//   Geocode.fromLatLng(curr.lat.toString(10), curr.long.toString(10)).then(
//     response => {
//       const address = response.results[0].formatted_address;
//       wholeCityname = address;

//       db.collection("riders").add({
//         name: curr.name,
//         bike: curr.bike,
//         lat: parseFloat(curr.lat),
//         long: parseFloat(curr.long),
//         country: curr.country,
//         city: wholeCityname,
//       });

//     },
//     error => {
//       console.error(error);
//     }
//   ); 
// }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


let markersArr = [];
let windowsArr = [];

let checkedArrPart1 = [];
let checkedArr = [];

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyAkQaHkO5f2LymmHzYD0bAcAxj6h9a2kMU",
    libraries,

  });

  const [riders, setRealMarkers] = useState([]);

  useEffect(() => {
    db.collection("riders").onSnapshot((snapshot) =>
      setRealMarkers(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const [markers, setMarkers] = React.useState([]);
  //const [selected, setSelected] = React.useState(null);

  // const onMapClick = React.useCallback((event)=>{
  //   setMarkers(current => [...current, {
  //    // lat: event.latLng.lat(),
  //     //lng: event.latLng.lng(),
  //     time: new Date()
  //   }]);
  // },[]);


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map)=>{
    mapRef.current = map;
  },[])

  const panTo = React.useCallback(({ lat, lng }) => {
    //mapRef.current.panTo({ lat, lng });
    //mapRef.current.setZoom(8);
  }, [])

  const [selectedIcon, setSelectedIcon] = useState(null);

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading maps...";

  checkedArrPart1 = [...riders];
  checkedArr = [];

  for(let i =0; i < checkedArrPart1.length; i++){
    if(checkedArr.length > 0){
      let mybool = false;
      for(let j = 0; j < checkedArr.length; j++){
        if(checkedArrPart1[i].name === checkedArr[j].name){
          mybool = true;
        }else if(checkedArrPart1[i].lat === checkedArr[j].lat && checkedArrPart1[i].long === checkedArr[j].long){
          mybool = true;
          checkedArr[j].name = checkedArr[j].name + ", " + checkedArrPart1[i].name  + " ("+ checkedArrPart1[i].bike + ")";
          break;
        }
      }
      if(!mybool){
        checkedArr.push({name: checkedArrPart1[i].name  + " ("+ checkedArrPart1[i].bike + ")", lat: checkedArrPart1[i].lat, long: checkedArrPart1[i].long});
      }
    }else{
      checkedArr.push({name: checkedArrPart1[i].name + " ("+ checkedArrPart1[i].bike + ")", lat: checkedArrPart1[i].lat, long: checkedArrPart1[i].long});
    }
  }

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <h3 id = "headh">Motorcycle Meetups Member List</h3>
          </ul>
        </nav>
      </header>

      <div className ="theMap">


        

        <GoogleMap className="thegooglemap"
          mapContainerStyle={mapContainerStyle}
          zoom={2}
          center={center}
          options={options}
        >

        {checkedArr.map(rider=>(

          <Marker 
            key={rider.name}
            position={{lat: rider.lat, lng: rider.long}}
            onClick={()=>{
              setSelectedIcon(rider);
            }}
            
          />
          
        ))}

        {selectedIcon && (
          <InfoWindow
            position={{lat:selectedIcon.lat, lng:selectedIcon.long}}
            onCloseClick={()=>{
              setSelectedIcon(null);
            }}
          >
            <h3 className="markerh3">{selectedIcon.name}</h3>
          </InfoWindow>

        )}

        </GoogleMap>
      </div>

      <Search panTo={panTo, "1"}/>
      
      <div className="latlong-view">
        <p><b>Latitude:</b> <span id="latitude_view"></span></p>
        <p><b>Longitude:</b> <span id="longitude_view"></span></p>
        
      </div>

      <div className="country-view">
        <p><b>City:</b> <span id="whatCity"></span></p>
        <p><b>Country:</b> <span id="whatCountry"></span></p>
      </div>

      <div id = "submitPart">
        <input type="text" className="DiscordName" id = "DiscordName" placeholder="Type Discord name with ID (Name#ID)" />
        <input type="text" className="biketype" id = "biketype" placeholder="Enter your bike (2017 GSX1300R HAYABUSA)" />
        <input type="button" className="AddToList" value="Click to Add To List" onClick={(sendEmail)} />
        <h1 className = "MayTake">Can take up to a day to process request</h1>
      </div>
      


      <div id = "FindPeople">
      <p><b>--FIND MEMBERS NEAR ME--</b> <span id="myLabel1"></span></p>
      <input type="text" className="Radius" id = "Radius" placeholder="Enter radius in miles" />
      <input type="button" className="FindPpl" value="Click to Find People" onClick={(findPeople)}/>
      <p><b id = "resultLabel">Members will appear here:</b> <span id="myLabel2"></span></p>
      <p><b id = "results">No members to display</b> <span id="myLabel2"></span></p>
    </div>

    <div id = "advert">
      <h3>---Upcoming Member Rides---</h3>

      <h2>Location: 120 Triangle Shopping Center Downtown Longview Cowlitz County Washington United States 98632 4682</h2>
      <h2>Date: 9:30am, August 22</h2>
      <h2 id = "bottomh2">Host: tallis#0518</h2>

      <h2>Request to Host a Meet</h2>

      <BottomSearch panTo={panTo, "2"}/>

      <div className="latlong-view2">
        <p><b>Location:</b> <span id="addy_view2"></span></p>
      </div>
      <input type="text" className="Radius" id = "HostName" placeholder="Enter hosts Discord name with ID (Name#ID)" />
      <input type="text" className="date" id = "DateBox" placeholder="Enter the date and time (12:00pm MM/DD/YY)" />
      <input type="button" className="FindPpl" value="Click to request meetup ad" onClick={(requestmeet)}/>


    </div>

    <div id = "everyone">
      <h1>Member Meetup Resource Created and Operated by Nik</h1>
    </div>
    
      
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function Search({panTo, numberv}){
  const { 
      ready, 
      value, 
      suggestions: {status, data}, 
      setValue, 
      clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions:{
      
    },
  });

  var cnameforit = "search";

  return (
    <div className="search1">
      <Combobox 
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try{
            const results = await getGeocode({address});
            const { lat, lng } = await getLatLng(results[0]);
            var selectedLocation = results[0];
              document.getElementById('latitude_view').innerHTML = selectedLocation.geometry.location.lat();
              document.getElementById('longitude_view').innerHTML = selectedLocation.geometry.location.lng();

              let countryname = "";
              let cityname = "";

              if(selectedLocation.address_components.length === 4){
                countryname = selectedLocation.address_components[4-1].long_name;
                cityname = selectedLocation.address_components[4-4].long_name;
              }else if(selectedLocation.address_components.length === 5){
                countryname = selectedLocation.address_components[5-1].long_name;
                cityname = selectedLocation.address_components[5-4].long_name;
              }else if(selectedLocation.address_components.length === 3){
                countryname = selectedLocation.address_components[3-1].long_name;
                cityname = selectedLocation.address_components[3-3].long_name;
              }else if(selectedLocation.address_components.length === 2){
                countryname = selectedLocation.address_components[2-1].long_name;
                cityname = selectedLocation.address_components[2-2].long_name;
              }else{
                countryname = 'N/A';
              }

              document.getElementById('whatCountry').innerHTML = countryname;
              document.getElementById('whatCity').innerHTML = cityname;

          }catch(error){
            console.log("ERROR!");
            console.log(error);
          }
          
        }}
        >
          <ComboboxInput value = {value} 
            onChange={(e) => {
              setValue(e.target.value);
            }} 
            disabled = {!ready}
            placeholder="Enter a location"
          />
          <ComboboxPopover className="optionscontainer">
            <ComboboxList>
              {status === "OK" && data.map(({id, description}) => (
                <ComboboxOption key={id} value={description} className="optionsbro"/>
              ))}
            </ComboboxList>
          </ComboboxPopover>
      </Combobox>
    </div>
  )
}
function requestmeet(){

  var addy = document.getElementById('addy_view2').innerHTML;
  var datetime = document.getElementById('DateBox').value;
  var hoster = document.getElementById('HostName').value;
  
  
  
  if(addy === '' || datetime === '' || hoster === ''){
    alert("Please enter all the data first");
  }else{
    var data = {
      service_id: 'gmail',
      template_id: 'template_P549kwWX',
      user_id: 'user_mtIxxJUUhp65VCg4m27S0',
      template_params: {
        'hoster': hoster,
        'date': datetime,
        'addy': addy
      }
    };
  
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your request will be verified before adding');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
  }
}

function sendEmail(){

        var inputVal = document.getElementById("DiscordName").value;

        var bikeVal = document.getElementById("biketype").value;

        var latVal = document.getElementById("latitude_view").innerHTML;

        var LongVal = document.getElementById("longitude_view").innerHTML;

        var countryName = document.getElementById('whatCountry').innerHTML

        var cityName = document.getElementById('whatCity').innerHTML;

        var validUser = true;

        for(let i = 0; i < checkedArrPart1.length; i++){
          let thisName = checkedArrPart1[i].name.toLowerCase();
          let othername =inputVal.toLowerCase();
          if(thisName.includes(othername)){
            validUser = false;
          }
        }

        if(!inputVal.includes("#")){
          validUser = false;
        }
        
        if((latVal === '0' && LongVal === '0') || (latVal === '' && LongVal === '')){
          alert("Please enter a location first");
        }else if(inputVal === '' || validUser === false){
          alert("Please enter a valid username first (Either you forgot the ID (Format of Name#0000) or the name already on the database");
        }else{
          var data = {
            service_id: 'gmail',
            template_id: 'bigdicks',
            user_id: 'user_mtIxxJUUhp65VCg4m27S0',
            template_params: {
              'username': inputVal,
              'bike': bikeVal,
              'latv': latVal,
              'longv': LongVal,
              'country':countryName,
              'city': cityName
            }
          };
        
          $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json'
          }).done(function() {
              alert('You were added to the database');

              // adding to the database
              db.collection("riders").add({
                name: inputVal,
                bike: bikeVal,
                lat: parseFloat(latVal),
                long: parseFloat(LongVal),
                country: countryName,
                city: cityName,
              });

          }).fail(function(error) {
              alert('Oops... ' + JSON.stringify(error));
          });
        }
}


function BottomSearch({panTo, numberv}){
  const { 
      ready, 
      value, 
      suggestions: {status, data}, 
      setValue, 
      clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions:{
      
    },
  });

  var cnameforit = "search";

  return (
    <div className="search2">
      <Combobox 
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try{
            const results = await getGeocode({address});
            const { lat, lng } = await getLatLng(results[0]);
            var selectedLocation = results[0];

            var addy2 = "";
              for(let i =0; i < selectedLocation.address_components.length; i++){
                addy2 = addy2 + " " + selectedLocation.address_components[i].long_name;
              }
              document.getElementById('addy_view2').innerHTML = addy2;

          }catch(error){
            console.log("ERROR!");
            console.log(error);
          }
          
        }}
        >
          <ComboboxInput value = {value} 
            onChange={(e) => {
              setValue(e.target.value);
            }} 
            disabled = {!ready}
            placeholder="Enter a location"
          />
          <ComboboxPopover className="optionscontainer">
            <ComboboxList>
              {status === "OK" && data.map(({id, description}) => (
                <ComboboxOption key={id} value={description} className="optionsbro"/>
              ))}
            </ComboboxList>
          </ComboboxPopover>
      </Combobox>
    </div>
  )
}

function toRadians(n){
  var pi = Math.PI;
  return n * (pi/180);
}

function getDist(lat1, lat2, lon1, lon2){
  var lon1 = toRadians(lon1); 
  var lon2 = toRadians(lon2); 
  var lat1 = toRadians(lat1); 
  var lat2 = toRadians(lat2); 

  var dlon = lon2 - lon1;  
  var dlat = lat2 - lat1; 
  var a = Math.pow(Math.sin(dlat / 2), 2) 
           + Math.cos(lat1) * Math.cos(lat2) 
           * Math.pow(Math.sin(dlon / 2),2); 
        
  var c = 2 * Math.asin(Math.sqrt(a)); 

  var r = 3956;

  return(c*r);
}


function findPeople(){
        
  var radius = document.getElementById("Radius").value;
  var latVal = document.getElementById("latitude_view").innerHTML;
  var LongVal = document.getElementById("longitude_view").innerHTML;
  var resultLabel = document.getElementById("results");
  
  var found = "";

  if((latVal === '0' && LongVal === '0') || (latVal === '' && LongVal === '')){
    alert("Please select a location first");
  }else{

    for(let i = 0; i < checkedArrPart1.length; i ++){
      var dist = getDist(checkedArrPart1[i].lat, latVal, checkedArrPart1[i].long, LongVal);
      if(dist <= radius){
        if(found === ""){
          found = "@"+checkedArrPart1[i].name;
        }else{
          found = found + "  @" + checkedArrPart1[i].name;
        }
        
      }
    }
    
    if(found === ""){
      found = "No members near you :(";
    }

    resultLabel.innerText = found;
  }
}

//export default App;