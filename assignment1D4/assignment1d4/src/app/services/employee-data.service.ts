import { Injectable } from '@angular/core';

import { employee } from './employee.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  employees: employee[];
  constructor() {
    this.employees = [
      {
        firstName: 'rohan',
        lastName: 'mujoo',
        age: 21,
        id: '1',
        profileImage: 'software trainee',
        salary: 10000,
      },
      {
        firstName: 'abc',
        lastName: 'asd',
        age: 22,
        id: '2',
        profileImage: 'software trainee',
        salary: 10000,
      },
    ];
  }
  getDetails() {
    return this.employees;
  }
}
