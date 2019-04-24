import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../employee-loader.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
