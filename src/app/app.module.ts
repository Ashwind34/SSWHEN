import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { AppDescriptionPage } from '../pages/app-description/app-description';
import { InfoInputPage } from '../pages/info-input/info-input';
import { ResultsPage } from '../pages/results/results';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { EmailModalPage } from '../pages/email-modal/email-modal';
import { PopoverPage } from '../pages/dashboard/popover-page';
import { ModalPage } from '../pages/dashboard/modal-page';
import { ChartsModule } from 'ng2-charts';

// import { ComponentsModule } from "../components/components.module";
import { BarChartComponent } from '../components/bar-chart/bar-chart';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    AppDescriptionPage,
    InfoInputPage,
    ResultsPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalPage,
    BarChartComponent
    // ComponentsModule

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    AppDescriptionPage,
    InfoInputPage,
    ResultsPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalPage,
    BarChartComponent
    // ComponentsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
