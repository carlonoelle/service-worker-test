import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { WitzeComponent } from "./witze/witze.component";
import { LinksComponent } from "./links/links.component";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", component: LinksComponent },
  { path: "witze", component: WitzeComponent }
];

@NgModule({
  declarations: [AppComponent, WitzeComponent, LinksComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
