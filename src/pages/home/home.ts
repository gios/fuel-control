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

  constructor(public navCtrl: NavController) { }

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
}
