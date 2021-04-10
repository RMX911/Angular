import { Component, Input, OnInit } from '@angular/core';

import { StudentService } from '../../../../services/student.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent implements OnInit {
  modalTitle: String;

  @Input() students: any = [];
  addModalVisible: String = '';
  formModel: any = {
    name: '',
    phNo: '',
    class: '',
    marks: 0,
    editable: false,
  };
  constructor(private _student: StudentService) {
    this.modalTitle = 'Add New Student';
    console.log(this.students);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    // this.students = this._student.getStudents();
  }

  getFormDetails() {
    // this.addModalVisible = !this.addModalVisible;
    console.log(this.students, this.formModel);
    this._student.addStudentRow(this.formModel, this.students);
  }

  close() {}
}
