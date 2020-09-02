# YammieMeetupV2

https://nikcich.github.io/YammieMeetupV2/

This project was created as an attempt to gain familiarity with ReactJS, google maps, google places API's, and basics of google firebase.

This project was made to be a "meet-up" solution for a motorcycle discord server. This server has since grown to be a large online community of 2,500+ individuals.

For over a year users were limited to using the discord channel specifically for "finding" others in their area to go riding with.

There was, at one point, shared google documents allowing users to add themselves to a list of other users, and enter their location and username to be found by others.

Sadly, someone took it upon themselves to delete all information on the document.

As a solution, I created this tool for everyone.

This tool not only allows for users to enter themselves as before, but also prevents them from "nuking" it like before.

In addition, it visualizes all the users on a map for easier viewing, as opposed to the formerly used excel style google doc.

The tool makes use of google places to auto-fill location search suggestions, as well as geocoding to get the latitude and longitudes of the locations for map purposes.

All the information is stored on a google firebase firestore for easy access reading and writing to the list
