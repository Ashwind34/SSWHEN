import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';

@Component({
  selector: 'modal-dashboard',
  templateUrl: 'modal-dashboard.html'
})

export class ModalDashboardComponent implements OnInit{
    chartType: string;
    retYears: any[] = [];
    tableMonthly: any[] = [];
    totalAccumulated: any[] = [];
    leftTitle: string = "Retirement Age";
    rightTitleMonthly: string = "Monthly Payout";
    rightTitleCumulative: string = "Cumulative Payout";
    
    
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public calculations$: CalculationsProvider,
              public mock$: MockDataProvider) {
    this.chartType = this.navParams.get('modalType');
  }
  
  ngOnInit() {
      console.log(this.chartType);
      console.log(this.retYears);
      console.log(this.tableMonthly);
      console.log(this.totalAccumulated);
      // this.retYears = this.calculations$.retirementYears;
      // this.tableMonthly = this.calculations$.monthlyBenefit().monthly;;
      // this.totalAccumulated = this.calculations$.monthlyBenefit().cumulative;
      // console.log(this.chartType)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
