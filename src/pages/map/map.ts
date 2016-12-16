import { Component, AfterViewInit } from "@angular/core";
import { NavController } from "ionic-angular";
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
} from "ionic-native";

@Component({
  selector: "page-map",
  templateUrl: "map.html",
})
export class MapPage implements AfterViewInit {
  constructor(public navCtrl: NavController) { }

  public ngAfterViewInit() {
    this.loadMap();
  }

  private loadMap() {
    // make sure to create following structure in your view.html file
    // <ion-content>
    //  <div #map id="map"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById("map");

    let map = new GoogleMap(element);

    // listen to MAP_READY event
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.error("Map is ready!"));

    // create LatLng object
    let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      tilt: 30,
      zoom: 18,
    };

    // move the map's camera to position
    map.moveCamera(position);
  }
}
