import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../employee-loader.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {

  @Input() employeeData: Employee[];

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: number) {
    return index;
  }

}
