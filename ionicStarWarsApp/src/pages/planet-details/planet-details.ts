import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-planet-details',
  templateUrl: 'planet-details.html',
})
export class PlanetDetailsPage {
  planet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.planet = this.navParams.get('planet');
  }
}
