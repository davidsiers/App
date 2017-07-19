import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html',
})
export class PersonDetailsPage {
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person');
  }
}
