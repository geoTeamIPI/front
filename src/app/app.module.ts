import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppComponent } from "./app.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { MapComponent } from "./map/map.component";

import { MapService } from "./map.service";
import { GeocodingService } from "./geocoding.service";

import "leaflet";
import "leaflet.vectorgrid";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from ".//app-routing.module";
import { StoriesComponent } from "./stories/stories.component";
import { CreateStoryComponent } from "./create-story/create-story.component";

@NgModule({
  declarations: [
    NavigatorComponent,
    MapComponent,
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    StoriesComponent,
    CreateStoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    AppRoutingModule
  ],
  providers: [MapService, GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
