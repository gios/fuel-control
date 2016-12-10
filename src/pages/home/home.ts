import { Component } from "@angular/core";

import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  public mileage: number;
  public oneLiterCost: number;
  public liters: number;
  public total: number;

  constructor(public navCtrl: NavController) {

  }

  public initFields() {
    if (this.oneLiterCost && this.liters) {
      this.total = this.oneLiterCost * this.liters;
    }
    if (this.total && this.liters) {
      this.oneLiterCost = this.total / this.liters;
    }
    if (this.total && this.oneLiterCost) {
      this.liters = this.total / this.oneLiterCost;
    }
  }
}
