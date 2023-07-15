import { Component, EventEmitter, Output } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent {
  constructor(private service: BudgetService) {}

  budgetList: Budget[] = [];
  showEdit = true;
  status = '';
  selectedBudget: Budget | null = null;
  filterBudget: Budget[] = this.budgetList;

  public handleBudgetClick(budget: Budget) {
    if (this.selectedBudget === budget) {
      this.showEdit = !this.showEdit;
    } else {
      this.selectedBudget = budget;
      this.showEdit = true;
    }
  }

  filterIt(): void {
    if (this.status === '') {
      this.filterBudget = this.budgetList;
    } else {
      this.filterBudget = this.budgetList.filter(
        (budget) => budget.status === this.status
      );
    }
  }

  async ngOnInit() {
    this.budgetList = await this.service.getBudgets();
    this.filterIt();
  }

  handleStatusClick(newStatus: string) {
    this.status = newStatus;
    this.filterIt();
  }

  handleBudgetsChange(updatedBudgets: Budget[]) {
    this.filterBudget = updatedBudgets;
    this.filterIt();
  }
}
