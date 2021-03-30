import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeDetails: any = [];
  constructor() { 
    this.employeeDetails = this.getDetails();
  }

  ngOnInit(): void {
  }
  
   getDetails():any {
    return [
      {
        employeeID:"abc1",	
        firstName:"r1",	
        lastName:"m1",	
        dept:"developemt",	
        city:"delhi",	
        email:"r1.m1@gmail.com"
      },
      {
        employeeID:"abc2",	
        firstName:"r2",	
        lastName:"m2",	
        dept:"developemt",	
        city:"delhi",	
        email:"r2.m2@gmail.com"
      },
      {
        employeeID:"abc3",	
        firstName:"r3",	
        lastName:"m3",	
        dept:"developemt",	
        city:"delhi",	
        email:"r3.m3@gmail.com"
      }
    ];    
  }
}
