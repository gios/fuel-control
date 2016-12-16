import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { AboutPage } from "../pages/about/about";
import { MapPage } from "../pages/map/map";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
  ],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
})
export class AppModule {}
