import { Component, OnInit, DoCheck } from '@angular/core';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, DoCheck {
  students: any = [];
  constructor(private _student: StudentService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.students = this._student.getStudents();
  }

  deleteRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._student.deleteStudentRow(index);
    }
  }

  editRow(event: Event, index: Number) {
    this._student.editStudentRow(index);
  }
}
