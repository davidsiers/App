import { ApiProvider } from './../providers/api/api';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { FavoriteProvider } from './../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { PeoplePage } from '../pages/people/people';
import { PersonDetailsPage } from '../pages/person-details/person-details';

import { FilmsPage } from '../pages/films/films';
import { FilmDetailsPage } from '../pages/film-details/film-details';

import { PlanetsPage } from '../pages/planets/planets';
import { PlanetDetailsPage } from '../pages/planet-details/planet-details';

import { TabsPage } from '../pages/tabs/tabs';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PeoplePage,
    PersonDetailsPage,
    FilmsPage,
    FilmDetailsPage,
    PlanetsPage,
    PlanetDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { mode: 'md' }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PeoplePage,
    PersonDetailsPage,
    FilmsPage,
    FilmDetailsPage,
    PlanetsPage,
    PlanetDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    EmailComposer,
    FavoriteProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
