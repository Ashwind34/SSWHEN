import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alert-message',
  templateUrl: 'alert-message.html'
})
export class AlertMessageComponent {
  
  text: string;
  messageType: string = 'benefit';

  constructor(public alertCtrl: AlertController) {
    console.log('Hello AlertMessageComponent Component');
    this.text = "hello world"
  }
  
  benefitInfoAlert(){
    let alert = this.alertCtrl.create({
      title: 'Full Retirement Benefit',
      message: 'Your Full Retirement Benefit is an estimate of the monthly income you will receive if you begin social security benefits at your Full Retirement Age, which is determined by the Social Security Administration.  You will be able to get this information from the Social Security website.',
      buttons: ['OK']
    });
    alert.present();
  }
  
  taxInfoAlert(){
    let alert = this.alertCtrl.create({
      title: 'Total Tax Contrbution',
      message: 'Your total tax contribution is an estimate of the total taxes you have paid in Social Security taxes over your life.  You will be able to find this information on your Social Security statement, which you can request online from the Social Security Administration.',
      buttons: ['OK']
    });
    alert.present();
  }
}
