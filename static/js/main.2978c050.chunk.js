(this["webpackJsonpmeetup-v2"]=this["webpackJsonpmeetup-v2"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},34:function(e,t,a){},35:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),s=(a(34),a(12)),c=a.n(s),i=a(19),m=a(28),u=a(18),d=(a(35),a(14)),p=a(11),E=a(6),g=(a(38),a(39),a(26)),h=a.n(g),v=a(27),y=a.n(v).a.initializeApp({apiKey:"AIzaSyBgCQivLOVmUuKhnjNVU8bMMxbG_85FoIA",authDomain:"meetup-v2.firebaseapp.com",databaseURL:"https://meetup-v2.firebaseio.com",projectId:"meetup-v2",storageBucket:"meetup-v2.appspot.com",messagingSenderId:"204269353570",appId:"1:204269353570:web:e80e739691776f8b0daf3b",measurementId:"G-S4NKHKVSSM"}).firestore(),b=["places"],f={width:"80vw",height:"60vh"},w={lat:37.6872,lng:97.3301},_={styles:[{stylers:[{hue:"#ff1a00"},{invert_lightness:!0},{saturation:-100},{lightness:33},{gamma:.5}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2D333C"}]}],disableDefaultUI:!0,zoomControl:!0},M=[],N=[];function I(){var e=Object(d.d)({googleMapsApiKey:"AIzaSyAkQaHkO5f2LymmHzYD0bAcAxj6h9a2kMU",libraries:b}),t=e.isLoaded,a=e.loadError,r=Object(n.useState)([]),o=Object(u.a)(r,2),s=o[0],c=o[1];Object(n.useEffect)((function(){y.collection("riders").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]);var i=l.a.useState([]),p=Object(u.a)(i,2),E=(p[0],p[1],l.a.useRef()),g=(l.a.useCallback((function(e){E.current=e}),[]),l.a.useCallback((function(e){e.lat,e.lng}),[]),Object(n.useState)(null)),h=Object(u.a)(g,2),v=h[0],I=h[1];if(a)return"Error loading maps";if(!t)return"Loading maps...";M=Object(m.a)(s),N=[];for(var x=0;x<M.length;x++)if(N.length>0){for(var T=!1,S=0;S<N.length;S++)if(M[x].name===N[S].name)T=!0;else if(M[x].lat===N[S].lat&&M[x].long===N[S].long){T=!0,N[S].name=N[S].name+", "+M[x].name+" ("+M[x].bike+")";break}T||N.push({name:M[x].name+" ("+M[x].bike+")",lat:M[x].lat,long:M[x].long})}else N.push({name:M[x].name+" ("+M[x].bike+")",lat:M[x].lat,long:M[x].long});return l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("h3",{id:"headh"},"Motorcycle Meetups Member List")))),l.a.createElement("hr",{class:"sexy_line-TOP"}),l.a.createElement("div",{className:"theMap"},l.a.createElement(d.a,{className:"thegooglemap",mapContainerStyle:f,zoom:2,center:w,options:_},N.map((function(e){return l.a.createElement(d.c,{key:e.name,position:{lat:e.lat,lng:e.long},onClick:function(){I(e)}})})),v&&l.a.createElement(d.b,{position:{lat:v.lat,lng:v.long},onCloseClick:function(){I(null)}},l.a.createElement("h3",{className:"markerh3"},v.name)))),l.a.createElement(k,{panTo:"1"}),l.a.createElement("div",{id:"submitPart"},l.a.createElement("input",{type:"text",className:"DiscordName",id:"DiscordName",placeholder:"Type Discord name with ID (Name#ID)"}),l.a.createElement("input",{type:"text",className:"biketype",id:"biketype",placeholder:"Enter your bike (2017 GSX1300R)"}),l.a.createElement("input",{type:"button",className:"AddToList",value:"Add To List",onClick:C}),l.a.createElement("h1",{className:"MayTake"},"WILL APPEAR IMMEDIATELY")),l.a.createElement("div",{className:"latlong-view"},l.a.createElement("p",null,l.a.createElement("b",null,"Latitude:")," ",l.a.createElement("span",{id:"latitude_view"})),l.a.createElement("p",null,l.a.createElement("b",null,"Longitude:")," ",l.a.createElement("span",{id:"longitude_view"}))),l.a.createElement("div",{className:"country-view"},l.a.createElement("p",null,l.a.createElement("b",null,"City:")," ",l.a.createElement("span",{id:"whatCity"})),l.a.createElement("p",null,l.a.createElement("b",null,"Country:")," ",l.a.createElement("span",{id:"whatCountry"}))),l.a.createElement("hr",{class:"sexy_line"}),l.a.createElement("div",{id:"FindPeople"},l.a.createElement("p",null,l.a.createElement("b",null,"--FIND MEMBERS NEAR ME--")," ",l.a.createElement("span",{id:"myLabel1"})),l.a.createElement("input",{type:"text",className:"Radius",id:"Radius",placeholder:"Enter radius in miles"}),l.a.createElement("input",{type:"button",className:"FindPpl",value:"Find People",onClick:B}),l.a.createElement("p",null,l.a.createElement("b",{id:"resultLabel"},"Members will appear here:")," ",l.a.createElement("span",{id:"myLabel2"})),l.a.createElement("p",null,l.a.createElement("b",{id:"results"},"No members to display")," ",l.a.createElement("span",{id:"myLabel2"})),l.a.createElement("hr",{class:"sexy_line"})),l.a.createElement("div",{id:"advert"},l.a.createElement("h3",null,"Upcoming Member Rides"),l.a.createElement("h2",null,"Location: 120 Triangle Shopping Center Downtown Longview Cowlitz County Washington United States 98632 4682"),l.a.createElement("h2",null,"Date: 9:30am, August 22"),l.a.createElement("h2",{id:"bottomh2"},"Host: tallis#0518"),l.a.createElement("hr",{class:"sexy_line"}),l.a.createElement("h2",null,"Request to Host a Meet"),l.a.createElement(O,{panTo:"2"}),l.a.createElement("input",{type:"text",className:"Radius",id:"HostName",placeholder:"Enter hosts Discord name with ID (Name#ID)"}),l.a.createElement("input",{type:"text",className:"date",id:"DateBox",placeholder:"Enter the date and time (12:00pm MM/DD/YY)"}),l.a.createElement("input",{type:"button",className:"FindPpl",value:"Click to request meetup ad",onClick:L}),l.a.createElement("div",{className:"latlong-view2"},l.a.createElement("p",null,l.a.createElement("b",null,"Location:")," ",l.a.createElement("span",{id:"addy_view2"}))),l.a.createElement("hr",{class:"sexy_line"})),l.a.createElement("div",{id:"everyone"},l.a.createElement("h1",null,"Member Meetup Resource Created and Operated by Nik")))}function k(e){e.panTo,e.numberv;var t=Object(p.a)({requestOptions:{}}),a=t.ready,n=t.value,r=t.suggestions,o=r.status,s=r.data,m=t.setValue,u=t.clearSuggestions;return l.a.createElement("div",{className:"search1"},l.a.createElement(E.a,{className:"comboboxMain",onSelect:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,l,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(t,!1),u(),e.prev=2,e.next=5,Object(p.b)({address:t});case 5:return a=e.sent,e.next=8,Object(p.c)(a[0]);case 8:n=e.sent,n.lat,n.lng,l=a[0],document.getElementById("latitude_view").innerHTML=l.geometry.location.lat(),document.getElementById("longitude_view").innerHTML=l.geometry.location.lng(),r="",o="",4===l.address_components.length?(r=l.address_components[3].long_name,o=l.address_components[0].long_name):5===l.address_components.length?(r=l.address_components[4].long_name,o=l.address_components[1].long_name):3===l.address_components.length?(r=l.address_components[2].long_name,o=l.address_components[0].long_name):2===l.address_components.length?(r=l.address_components[1].long_name,o=l.address_components[0].long_name):r="N/A",document.getElementById("whatCountry").innerHTML=r,document.getElementById("whatCity").innerHTML=o,e.next=25;break;case 21:e.prev=21,e.t0=e.catch(2),console.log("ERROR!"),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}()},l.a.createElement(E.b,{value:n,onChange:function(e){m(e.target.value)},disabled:!a,placeholder:"Enter a location"}),l.a.createElement(E.e,{className:"optionscontainer"},l.a.createElement(E.c,{className:"optionsList"},"OK"===o&&s.map((function(e){var t=e.id,a=e.description;return l.a.createElement(E.d,{key:t,value:a,className:"optionsbro"})}))))))}function L(){var e=document.getElementById("addy_view2").innerHTML,t=document.getElementById("DateBox").value,a=document.getElementById("HostName").value;if(""===e||""===t||""===a)alert("Please enter all the data first");else{var n={service_id:"gmail",template_id:"template_P549kwWX",user_id:"user_mtIxxJUUhp65VCg4m27S0",template_params:{hoster:a,date:t,addy:e}};h.a.ajax("https://api.emailjs.com/api/v1.0/email/send",{type:"POST",data:JSON.stringify(n),contentType:"application/json"}).done((function(){alert("Your request will be verified before adding")})).fail((function(e){alert("Oops... "+JSON.stringify(e))}))}}function C(){for(var e=document.getElementById("DiscordName").value,t=document.getElementById("biketype").value,a=document.getElementById("latitude_view").innerHTML,n=document.getElementById("longitude_view").innerHTML,l=document.getElementById("whatCountry").innerHTML,r=document.getElementById("whatCity").innerHTML,o=!0,s=0;s<M.length;s++){var c=M[s].name.toLowerCase(),i=e.toLowerCase();c.includes(i)&&(o=!1)}if(e.includes("#")||(o=!1),"0"===a&&"0"===n||""===a&&""===n)alert("Please enter a location first");else if(""===e||!1===o)alert("Please enter a valid username first (Either you forgot the ID (Format of Name#0000) or the name already on the database");else{y.collection("riders").add({name:e,bike:t,lat:parseFloat(a),long:parseFloat(n),country:l,city:r})}}function O(e){e.panTo,e.numberv;var t=Object(p.a)({requestOptions:{}}),a=t.ready,n=t.value,r=t.suggestions,o=r.status,s=r.data,m=t.setValue,u=t.clearSuggestions;return l.a.createElement("div",{className:"search2"},l.a.createElement(E.a,{onSelect:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,l,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(t,!1),u(),e.prev=2,e.next=5,Object(p.b)({address:t});case 5:return a=e.sent,e.next=8,Object(p.c)(a[0]);case 8:for(n=e.sent,n.lat,n.lng,l=a[0],r="",o=0;o<l.address_components.length;o++)r=r+" "+l.address_components[o].long_name;document.getElementById("addy_view2").innerHTML=r,e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.log("ERROR!"),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}()},l.a.createElement(E.b,{value:n,onChange:function(e){m(e.target.value)},disabled:!a,placeholder:"Enter a location"}),l.a.createElement(E.e,{className:"optionscontainer"},l.a.createElement(E.c,null,"OK"===o&&s.map((function(e){var t=e.id,a=e.description;return l.a.createElement(E.d,{key:t,value:a,className:"optionsbro"})}))))))}function x(e){return e*(Math.PI/180)}function T(e,t,a,n){a=x(a),n=x(n),e=x(e);var l=n-a,r=(t=x(t))-e,o=Math.pow(Math.sin(r/2),2)+Math.cos(e)*Math.cos(t)*Math.pow(Math.sin(l/2),2);return 3956*(2*Math.asin(Math.sqrt(o)))}function B(){var e=document.getElementById("Radius").value,t=document.getElementById("latitude_view").innerHTML,a=document.getElementById("longitude_view").innerHTML,n=document.getElementById("results"),l="";if("0"===t&&"0"===a||""===t&&""===a)alert("Please select a location first");else{for(var r=0;r<M.length;r++){T(M[r].lat,t,M[r].long,a)<=e&&(l=""===l?"@"+M[r].name:l+"  @"+M[r].name)}""===l&&(l="No members near you :("),n.innerText=l}}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.2978c050.chunk.js.map