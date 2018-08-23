# Neighbourhood Map Project

This is the final (8th) project created for the FEND Google Developer Nanodegree at Udacity.

## About

Neighbourhood Map is a single page application featuring a map of my neighborhood which is in the historic center of Athens and information from third-party data is provided for highlighted locations concerning art and entertainment.

The sidebar which opens with a burger menu contains the list of the places in alphabetical order. Each place is highlighted on the map with a custom marker icon. When clicking on a list item an info-window opens above the marker icon of the place. Also, an info-window opens by just choosing a marker.


## How to run the project

In order to run the project in development mode:
* download or clone the repository
* install all project dependencies with `npm install`
* start the development server with `npm start`
* a local connection will start automatically at: http://localhost:3000/

In order to run the project in production mode:
* run: npm build
* install the server running: npm install -g serve
* open the server running: serve -s build
* the command line will inform you that connections are being accepted at: http://localhost:5000/

## Important

A service worker is registered but offline usage is only available in production mode.

The development of the project was based on the relative lessons of the course, the study jams performed by Udacity students and extra resources like Tyler McGinnis React Bootcamp [React Bootcamp](https://tylermcginnis.com/free-react-bootcamp/).


## Development

The development proccess for this project started from scratch.
The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Map is powered by Google Maps API. The styling of the map was created by djneo and was published at: [snazzymaps](https://snazzymaps.com/style/1443/cleaner-midnight).

Map component was developed with [react-ggogle-maps](https://github.com/tomchentw/react-google-maps).

The data used for the locations on the menu list, the markers and the infowindows are fetched from Fousquare API.

The burger menu and the sidebar were created with [react-burger-menu](https://github.com/negomi/react-burger-menu).

[escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) and [sort-by] packages(https://www.npmjs.com/package/sort-by) are used for searching functionality and sorting the list.

## Contributing

This repository was made for the purposes of the FEND Nanodegree at Udacity. Any contribution which improves the project is welcome.
