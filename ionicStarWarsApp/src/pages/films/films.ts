import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmDetailsPage } from '../film-details/film-details';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openDetails() {
    this.navCtrl.push(FilmDetailsPage);
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}
