import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee/:edit/:id', component: EmployeeDetailsComponent},
  {path: 'employee/:edit/:id', component: EmployeeDetailsComponent},
  {path: 'employee/:add', component: EmployeeDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
