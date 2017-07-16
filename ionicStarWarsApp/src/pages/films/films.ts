import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { FilmDetailsPage } from '../film-details/film-details';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push(FilmDetailsPage, {film: film});
  }
}
