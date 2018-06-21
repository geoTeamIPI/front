import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { 
  MatButtonModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatTooltipModule, 
  MatIconModule, 
  MatSnackBarModule, 
  MatSidenavModule, 
  MatFormFieldModule 
} from "@angular/material/";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MapComponent } from "./map/map.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CreateStoryComponent } from "./create-story/create-story.component";
import { StoryComponent } from './story/story.component';
import { AddStoryComponent } from './story/add-story/add-story.component'

import { MapService } from "./map.service";
import { GeocodingService } from "./geocoding.service";
import { StoryService } from "./story/story.service";


import "leaflet";
import "leaflet.vectorgrid";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppRoutingModule } from ".//app-routing.module";
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    NavigatorComponent,
    MapComponent,
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    CreateStoryComponent,
    StoryComponent,
    AddStoryComponent,
    AddUserComponent
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
    FormsModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    AppRoutingModule
  ],
  providers: [MapService, GeocodingService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
