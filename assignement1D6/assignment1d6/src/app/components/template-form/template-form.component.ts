import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  showDetails:boolean = false;

  dataModel =  {
    name:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  getData(formData:NgForm){
    this.showDetails=!this.showDetails;
    const name = formData.form.value.name;
    const email = formData.form.value.email;
    const phoneNumber = formData.form.value.phoneNumber;
    const password = formData.form.value.password;
    const confirmPassword = formData.form.value.confirmPassword;
    console.log(name,email,phoneNumber,password, confirmPassword)
    console.log(this.dataModel)
  }

}
