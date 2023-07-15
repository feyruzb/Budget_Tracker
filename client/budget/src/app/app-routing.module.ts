import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "budgets",
    component: BudgetListComponent,
  },
  {
    path: "budgets/new",
    component: BudgetFormComponent,
  },
  {
    path: "budgets/:id",
    component: BudgetDetailComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
