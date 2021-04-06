import { Component, OnInit, DoCheck } from '@angular/core';

import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any = [];
  constructor(private _student: StudentsService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.students = this._student.getStudents();
  }
}
