import { Component, OnInit, DoCheck } from '@angular/core';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, DoCheck {
  students: any = [];
  allStudents: any = [];
  name: String = 'Name';
  class: String = 'Class';
  phno: String = 'Ph No';
  marks: String = 'Marks';
  action: String = 'Action';
  constructor(private _student: StudentService) {}

  ngOnInit(): void {
    this._student.getStudents().subscribe((data) => {
      this.students = data;
      this.allStudents = data;
    });
  }

  ngDoCheck(): void {}

  deleteRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._student.deleteStudentRow(index, this.students);
    }
  }

  editRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._student.editStudentRow(index, this.students);
    }
  }

  expandRow(index: number) {
    this._student.expandStudentRow(index, this.students);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    let filterValueLower = filterValue.toLowerCase();

    if (filterValue === '') {
      this.students = this.allStudents;
    } else {
      this.students = this.allStudents.filter((student: any) =>
        student.name.toLowerCase().includes(filterValueLower)
      );
    }
  }
}
