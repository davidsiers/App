import { Component } from '@angular/core';

import { PeoplePage } from '../people/people';
import { FilmsPage } from '../films/films';
import { PlanetsPage } from '../planets/planets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PeoplePage;
  tab2Root = FilmsPage;
  tab3Root = PlanetsPage;

  constructor() {

  }
}
