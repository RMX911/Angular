import { Component, OnInit } from '@angular/core';

import {employee} from './employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  tempEmp:employee= {
    firstName:"",
      lastName:"",
      age:0,
      id:"",
      jobTitle:"" ,
      salary:0 
  }

  employees:employee[] =[ {
    firstName:"rohan",
      lastName:"mujoo",
      age:21,
      id:"1",
      jobTitle:"software trainee" ,
      salary:10000 
    },
    {
      firstName:"abc",
        lastName:"asd",
        age:22,
        id:"2",
        jobTitle:"software trainee" ,
        salary:10000 
      }
  ];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  updateEmp(){
    this.employees.push(this.tempEmp);
  }
}
