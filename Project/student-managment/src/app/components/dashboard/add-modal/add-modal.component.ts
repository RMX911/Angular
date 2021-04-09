import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent implements OnInit {
  modalTitle: String;
  students: any = [];
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
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.students = this._student.getStudents();
  }

  getFormDetails() {
    // this.addModalVisible = !this.addModalVisible;
    this._student.addStudentRow(this.formModel);
  }

  close() {}
}
