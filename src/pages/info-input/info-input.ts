import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { ResultsPage } from '../results/results'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../validators/number';
import { CalculationsProvider } from "../../providers/calculations/calculations";
import { UserDataProvider } from "../../providers/user-data/user-data";
import { AlertMessageComponent } from '../../components/alert-message/alert-message';

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myForm: FormGroup;
  submitAttempt: boolean = false;

  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public calculations$: CalculationsProvider,
              public userData$: UserDataProvider,
              public viewCtrl: ViewController
              )
    {
      
      this.myForm = formBuilder.group({
        birthDate: ['', Validators.required],
        gender: ['', Validators.required],
        fra: ['', Validators.compose([
          Validators.required, Validators.maxLength(30), NumberValidator.numberValidator
          ]
        )]
      });
  }
  
  onSubmit(){
    this.submitAttempt = true;
    if(!this.myForm.valid){
      console.log('Unsuccessful input', this.myForm.value);
    }else{
      console.log('Successful input ', this.myForm.value);
      this.userData$.FRAbenefit = this.myForm.value.fra;
      this.userData$.dateOfBirth = this.myForm.value.birthDate;
      this.userData$.gender = this.myForm.value.gender;
      
      this.navCtrl.push(ResultsPage, {
        'myForm': this.myForm.value
      });
    }
    
    this.calculations$.getBenefitData();
    
  }


  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

}
