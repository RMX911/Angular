import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  startForm: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.startForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', Validators.required],
    });
  }

  get f() {
    return this.startForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.startForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.startForm.value));
  }

}
