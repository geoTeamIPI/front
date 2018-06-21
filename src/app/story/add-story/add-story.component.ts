import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Story } from '../story.model';
import { Location } from '../location.model';
import { StoryService } from '../story.service';


@Component({
  templateUrl: './add-story.component.html'
})
export class AddStoryComponent {

  story: Story = new Story();
  location : Location = new Location();

  constructor(private router: Router, private storyService: StoryService, route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.location.lat = params['lat'];
      this.location.lng = params['lng'];
      
  });
   
  }

  createStory(): void {
    
    this.story.location = this.location;
    console.log(this.story);
    this.storyService.createStory(this.story)
        .subscribe( data => {
          alert("Story created successfully.");
        });

  };

}