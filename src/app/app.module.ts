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
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { MapComponent } from "./map/map.component";
import { StoryComponent } from "./story/story.component";
import { AddStoryComponent } from "./story/add-story/add-story.component";

import { MapService } from "./map.service";
import { GeocodingService } from "./geocoding.service";
import { StoryService } from "./story/story.service";

import "leaflet";
import "leaflet.vectorgrid";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from "./app-routing.module";
import { CreateStoryComponent } from "./create-story/create-story.component";
import { UserService } from "./services/user.service";
import { CreateUserComponent } from "./create-user/create-user.component";
import { InfosUsersComponent } from "./infos-users/infos-users.component";
import { ListUsersComponent } from "./list-users/list-users.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

@NgModule({
  declarations: [
    NavigatorComponent,
    MapComponent,
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    CreateStoryComponent,
    CreateUserComponent,
    InfosUsersComponent,
    ListUsersComponent,
    UpdateUserComponent,
    StoryComponent,
    AddStoryComponent
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
  providers: [MapService, GeocodingService, UserService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
