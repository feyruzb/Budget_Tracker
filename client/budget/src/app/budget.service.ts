import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Budget } from './budget';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',

  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  async calcIncome(): Promise<number> {
    const all: Budget[] = await this.getBudgets();
    let sum: number = 0;
    for (let a of all) {
      if (a.status === 'good') {
        sum += a.budget;
      }
    }
    return Number(sum.toFixed(2));
  }
  
  async calcOutcome(): Promise<number> {
    const all: Budget[] = await this.getBudgets();
    let sum: number = 0;
    for (let a of all) {
      if (a.status === 'bad') {
        sum += a.budget;
      }
    }
    return Number((sum * -1).toFixed(2));
  }
  






  createBudget(budget: Budget){
    if (budget.budget == 0) { budget.status = "neutral" } else if (budget.budget > 0) { budget.status = "good" } else { budget.status = "bad" }
    return lastValueFrom(this.http.post<Budget>(this.url,{
      title: budget.title,
      budget: budget.budget,
      category: budget.category,
      status: budget.status
    }, httpOptions)).then(() => { 
      this.router.navigate(['/budgets'])
    });
  }

  editelement(id: number, budget: Budget){
    if (budget.budget == 0) { budget.status = "neutral" } else if (budget.budget > 0) { budget.status = "good" } else { budget.status = "bad" }
    return lastValueFrom(this.http.put<Budget>(this.url + '/' + id,{
      title: budget.title,
      budget: budget.budget,
      category: budget.category,
      status: budget.status
    }, httpOptions)).then(() => {
      this.recolate();
    }
    );
    
  }

  deleteBudget(id: number){
    return lastValueFrom(this.http.delete<Budget>(this.url + '/' + id));
  }

  constructor(
    private http: HttpClient,private router: Router,
  ) { }
  private url = 'http://localhost:8000/api/budgets';
  
  recolate(){
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['/budgets']);
    });
  }


  getBudgets(){
    return lastValueFrom(this.http.get<Budget[]>(this.url));
  }
}
