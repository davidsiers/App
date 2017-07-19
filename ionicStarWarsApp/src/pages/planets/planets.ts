import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PlanetDetailsPage } from '../planet-details/planet-details';

@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.planets = this.apiProvider.getPlanets();
    }

  openDetails(planet) {
    this.navCtrl.push(PlanetDetailsPage, {planet: planet});
    }
  }
