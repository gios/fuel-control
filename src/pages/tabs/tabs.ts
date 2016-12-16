import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";
import { MapPage } from "../map/map";

@Component({
  templateUrl: "tabs.html",
})
export class TabsPage {
  public home: any = HomePage;
  public tab2Root: any = AboutPage;
  public map: any = MapPage;

  constructor() {
    // TODO
  }
}
