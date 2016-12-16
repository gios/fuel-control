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
    let element: HTMLElement = document.getElementById("map");
    let map = new GoogleMap(element);

    map.one(GoogleMapsEvent.MAP_READY).then(() => console.error("Map is ready!"));
    let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);
    let position: CameraPosition = {
      target: ionic,
      tilt: 30,
      zoom: 18,
    };

    map.moveCamera(position);
  }
}
