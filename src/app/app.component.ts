import { Component } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(
    private sidebarService: NbSidebarService,
  ) {

  }

  toggleSidebar() {
    this.sidebarService.toggle(true);

    console.log('toggleSidebar');
  }
}
