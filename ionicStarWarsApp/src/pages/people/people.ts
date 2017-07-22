import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PersonDetailsPage } from '../person-details/person-details';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.people = this.apiProvider.getPeople();
  }

  openDetails(person) {
    this.navCtrl.push(PersonDetailsPage, {person: person});
  }
}
