import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  homePageFormData:any = {}
  constructor() { }

  ngOnInit(): void {
  }
  
  recieveFormData($event:Event){
    this.homePageFormData = $event;
    // console.log("comming from parent component",this.homePageFormData)
  }
}
