import { Component, OnInit, DoCheck } from '@angular/core';

import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit, DoCheck {
  modalTitle: String;
  students: any = [];
  addModalVisible: boolean = true;
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

  showAddModal() {
    this.addModalVisible = !this.addModalVisible;
  }

  getFormDetails() {
    // this.addModalVisible = !this.addModalVisible;
    this._student.addStudentRow(this.formModel);
  }
}
