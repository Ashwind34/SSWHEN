import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EmailModalPage } from '../email-modal/email-modal';
import { LandingPage } from '../landing/landing';



@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  data: any = [
    { age: 62, monthlyPayout: 1000 },
    { age: 63, monthlyPayout: 1000 },
    { age: 64, monthlyPayout: 1000 },
    { age: 65, monthlyPayout: 1000 },
    { age: 66, monthlyPayout: 1000 },
    { age: 67, monthlyPayout: 1000 },
    { age: 68, monthlyPayout: 1000 },
    { age: 69, monthlyPayout: 1000 },
    { age: 70, monthlyPayout: 1000 }
    ];
  results: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController) {
    
    this.results = "graph";
    
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
  goToLanding(params){
    if (!params) params = {};
    this.navCtrl.push(LandingPage);
  }
  
  openEmailModal() {
    let resultsModal = this.modalCtrl.create(EmailModalPage);
    resultsModal.present();
  }
  
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Email Results',
      message: "Enter your email to send your results",
      inputs: [
        {
          name: 'title',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Email',
          handler: data => {
            console.log('Saved clicked');
            this.showConfirm();
          }
        }
      ]
    });
    prompt.present();
  }
  
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Thank you for using SSWHEN',
      message: 'By registering you can view additional data about your retirement benefits',
      buttons: [
        {
          text: 'Home',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.push(LandingPage);
          }
        },
        {
          text: 'Register',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(RegisterPage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
