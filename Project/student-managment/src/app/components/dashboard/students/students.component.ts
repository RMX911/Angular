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
  // showRow:Boolean = false;
  // rowEdit: Boolean = false;
  constructor(private _student: StudentService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.students = this._student.getStudents();
    this.allStudents = this._student.getStudents();
  }

  deleteRow(event: Event, index: Number) {
    if (event.type == 'click') {
      this._student.deleteStudentRow(index);
    }
  }

  editRow(event: Event, index: Number) {
    if (event.type == 'click') {
      // this.rowEdit = !this.rowEdit;
      // console.log(this.rowEdit);
      this._student.editStudentRow(index);
    }
  }

  expandRow(index: number) {
    // this.showRow =  !this.showRow;
    this._student.expandStudentRow(index);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    let filterValueLower = filterValue.toLowerCase();

    if (filterValue === '') {
      this.students = this.allStudents;
    } else {
      this.students = this.allStudents.filter((student: any) => {
        student.name.includes(filterValueLower);
      });
    }
  }
}
