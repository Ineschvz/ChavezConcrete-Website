
"use client";

import { useRef, useState} from 'react';
import Link from 'next/link';
import ReactMapGL, { Marker, Popup, ViewState } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL CSS
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; // Import MapboxGeocoder from mapbox-gl-geocoder package

// interface IProps {};

export default function Map({}){
    return <div className='text-black relative '>
        <ReactMapGL></ReactMapGL> 
        

    </div>
}