import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Geolocation } from "ionic-native";

import { ILocation } from "./model";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage implements OnInit {
  public mileage: number;
  public oneLiterCost: number;
  public liters: number;
  public total: number;
  public location: ILocation = { latitude: 0, longitude: 0 };

  constructor(public navCtrl: NavController) { }

  public ngOnInit() {
    this.getCurrentGeolocation();
  }

  public initFields(type: string) {
    setTimeout(() => {
      if (this.oneLiterCost && this.liters && type !== "total") {
        let total = this.toNumber(this.oneLiterCost) * this.toNumber(this.liters);
        this.total = this.toNumber(total);
      }
      if (this.total && this.liters && type !== "oneLiterCost") {
        let oneLiterCost = this.toNumber(this.total) / this.toNumber(this.liters);
        this.oneLiterCost = this.toNumber(oneLiterCost);
      }
      if (this.total && this.oneLiterCost && type !== "liters") {
        let liters = this.toNumber(this.total) / this.toNumber(this.oneLiterCost);
        this.liters = this.toNumber(liters);
      }
    });
  }

  private toNumber(value: string | number, fixed = 2): number {
    return parseFloat(Number(value).toFixed(fixed));
  }

  private getCurrentGeolocation() {
    Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 10000 }).then(response => {
      this.location.latitude = this.toNumber(response.coords.latitude, 6);
      this.location.longitude = this.toNumber(response.coords.longitude, 6);
    }).catch(error => {
      console.error(`Geolocation error: ${JSON.stringify(error)}`);
    });
  }
}
