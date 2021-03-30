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
      dob:new Date(),
      id:"",
      jobTitle:"" ,
      salary:0 
  }

  employees:employee[] =[ {
    firstName:"rohan",
      lastName:"mujoo",
      dob:new Date(),
      id:"1",
      jobTitle:"software trainee" ,
      salary:10000 
    },
    {
      firstName:"abc",
        lastName:"asd",
        dob:new Date(),
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
