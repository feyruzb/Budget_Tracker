import { Component,Input, OnChanges, Output,EventEmitter } from '@angular/core';
import { Budget } from '../budget';
import { FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, OutletContext, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  @Input() Budget = new Budget();
  constructor(private fb: FormBuilder,private service:BudgetService,private router: Router) { }

  ngOnInit(): void {
  this.edit.patchValue(this.Budget);
  }
  ngOnChanges(): void { 
    this.edit.patchValue(this.Budget);
  }

  edit = this.fb.group({
    title: [''],
    budget: [0],
    category: [''],
    status: ['']
  });
  
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
}


  async onSubmit() {
    console.log(this.edit.value);
    const gop : Budget= new Budget();
    gop.title = this.edit.value.title ?? '';
    gop.budget = this.edit.value.budget ?? 0;
    gop.category = this.edit.value.category ?? '';
    gop.status = this.edit.value.status ?? '';
    this.service.editelement(this.Budget.id,gop);
    this.refresh.emit(await this.service.getBudgets());

  }
  
  @Output() refresh = new EventEmitter<Budget[]>();
  
  get title() {return this.edit.get('title');}
  get budget() {return this.edit.get('budget');}
  get category() {return this.edit.get('category');}
  get status() {return this.edit.get('status');}
}
