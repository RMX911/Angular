import { Component, OnInit, DoCheck } from '@angular/core';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any = [];
  constructor(private _student: StudentService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.students = this._student.getStudents();
  }

  deleteRow(event:Event,i:Number){
    if ( event.type == 'click' ) {
      this._student.deleteStudentRow(i);
    }   
  } 
}
