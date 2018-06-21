import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from '../story.model';
import { StoryService } from '../story.service';

@Component({
  templateUrl: './add-story.component.html'
})
export class AddStoryComponent {

  story: Story = new Story();

  constructor(private router: Router, private storyService: StoryService) {

  }

  createUser(): void {
    this.storyService.createStory(this.story)
        .subscribe( data => {
          alert("Story created successfully.");
        });

  };

}