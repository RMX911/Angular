import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: any = [];
  constructor(http: HttpClient) {
    http.get<any>('../../assets/data.json').subscribe((data) => {
      // console.log(data);
      this.students = data;
    });
  }

  getStudents() {
    return this.students;
  }

  deleteStudentRow(index: Number) {
    this.students.splice(index, 1);
  }

  editStudentRow(index: Number) {
    this.students[index as any].editable = !this.students[index as any]
      .editable;
    return this.students[index as any].editable;
  }

  addStudentRow(newStudent: any) {
    this.students.push(newStudent);
  }
}
