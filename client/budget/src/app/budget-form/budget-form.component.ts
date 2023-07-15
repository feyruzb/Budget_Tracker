import { Component,Input, OnChanges,Output,EventEmitter } from '@angular/core';
import { Budget } from '../budget';
import { FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent{
  @Input() Budget = new Budget();
  constructor(private fb: FormBuilder,private service:BudgetService ) { }

  ngOnInit(): void {
  this.budgetForm.patchValue(this.Budget);
  }
  ngOnChanges(): void { 
    this.budgetForm.patchValue(this.Budget);
  }


 

  budgetForm = this.fb.group({
    title: [''],
    budget: [0],
    category: [''],
    status: ['']
  });


  onSubmit() {
    console.log(this.budgetForm.value);
    const gop : Budget= new Budget();
    gop.title = this.budgetForm.value.title ?? '';
    gop.budget = this.budgetForm.value.budget ?? 0;
    gop.category = this.budgetForm.value.category ?? '';
    gop.status = this.budgetForm.value.status ?? '';
    this.service.createBudget(gop);
  }

  
  get title() {return this.budgetForm.get('title');}
  get budget() {return this.budgetForm.get('budget');}
  get category() {return this.budgetForm.get('category');}
  get status() {return this.budgetForm.get('status');}
}
