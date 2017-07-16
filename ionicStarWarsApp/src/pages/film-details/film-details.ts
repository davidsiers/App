import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  filmId = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filmId = this.navParams.get('filmId');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
