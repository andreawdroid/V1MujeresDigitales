/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 

mapboxgl.accessToken = 'pk.eyJ1IjoianNhbnRvczMwIiwiYSI6ImNsOTA4ZmxrYjB3YXEzbm9pZXRraXR4NXcifQ.zkBD0Xkt0x5o94iT6G9n4A';


if ( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opción de Geolocation' );
  throw new Error('Tu navegador no tiene opción de Geolocation');
}


ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

