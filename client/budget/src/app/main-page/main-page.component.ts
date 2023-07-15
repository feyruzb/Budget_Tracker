import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
 title = 'My Budget app';

 constructor(private service:BudgetService) {}

  totalIncome = 0;
  totalOutcome = 0;

  ngOnInit(): void {
    this.service.calcIncome().then((income) => {
      this.totalIncome = income;
    }
    );
    this.service.calcOutcome().then((outcome) => {
      this.totalOutcome = outcome;
    }
    );
  }


  public handleIncomeClick(income: number) {
    this.totalIncome = income;
  }
  
  public handleOutcomeClick(outcome: number) {
    this.totalOutcome = outcome;
  }

}
