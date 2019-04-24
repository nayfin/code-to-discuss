import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeesComponent } from './containers/employees/employees.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeesComponent
  ],
  exports: [
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
