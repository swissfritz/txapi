import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { mapKey } from 'src/environments/env';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.page.html',
  styleUrls: ['./anfahrt.page.scss'],
})
export class AnfahrtPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    const apiKey = mapKey.key;
    const mapRef = document.getElementById('map') as HTMLElement;

    const newMap = await GoogleMap.create({
      id: 'taxoil-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 48.266512,
          lng: 16.449592,
        },
        zoom: 15, // The initial zoom level to be rendered by the map
      },
    });

    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 48.266512,
        lng: 16.449592
      }
    });
  }
}
