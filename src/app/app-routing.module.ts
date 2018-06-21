import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { StoryComponent } from "./story/story.component";
import { AddStoryComponent } from "./story/add-story/add-story.component";

const routes: Routes = [
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "stories",
    component: StoryComponent
  },
  {
    path: "stories/create",
    component: AddStoryComponent
  },
  {
    path: "",
    redirectTo: "/map",
    pathMatch: "full"
  }
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
