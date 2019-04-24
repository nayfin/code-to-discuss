import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeLoaderService } from '../../employee-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeData$: Observable<Employee[]>;

  constructor(private svc: EmployeeLoaderService) { }

  ngOnInit() {
    this.employeeData$ = this.svc.loadEmployees();
  }

}
