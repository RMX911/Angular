import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

import { employee } from '../../services/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employeeData: employee[] = [];
  constructor(private _empData: EmployeeDataService) {}

  ngOnInit(): void {
    this.employeeData = this._empData.getDetails();
  }
}
