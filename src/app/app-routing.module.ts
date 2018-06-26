import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { StoriesComponent } from "./stories/stories.component";
import { CreateStoryComponent } from "./create-story/create-story.component";

import { ListUsersComponent } from "./list-users/list-users.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { InfosUsersComponent } from "./infos-users/infos-users.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "stories",
    component: StoriesComponent
  },
  {
    path: "stories/create",
    component: CreateStoryComponent
  },
  {
    path: "",
    redirectTo: "/map",
    pathMatch: "full"
  },
  { path: "users", component: ListUsersComponent },
  { path: "users/add", component: CreateUserComponent },
  { path: "users/infos/:id", component: InfosUsersComponent },
  { path: "users/update/:id", component: UpdateUserComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
})
export class AppRoutingModule {}
